/* ===========================================================================
   Arbiter HR — sitewide waitlist banner + modal (loaded on every page)
   ---------------------------------------------------------------------------
   Kit form 9454093 (UID 80553cd97d) — waitlist capture w/ product_interest tag.
   DOES NOT touch the Compliance Calendar funnel (Kit form 9372890) — that's
   the homepage lead magnet and stays exactly as-is.
   =========================================================================== */
(function () {
  'use strict';

  var KIT_ACTION = 'https://app.kit.com/forms/9454093/subscriptions';
  var KIT_FORM_ID = '9454093';
  var KIT_FORM_UID = '80553cd97d';
  var BANNER_DISMISS_KEY = 'arbiter-waitlist-banner-dismissed';

  // --- Banner HTML (spec File 2 verbatim + dismiss button) -----------------
  var bannerHTML =
    '<div class="arbiter-banner" id="arbiter-banner" role="region" aria-label="Site announcement">' +
      'Launching June 2026.' +
      '<a href="#" onclick="openWaitlist(\'\'); return false;">Join the waitlist &rarr;</a>' +
      '<button type="button" class="arbiter-banner-close" onclick="dismissWaitlistBanner()" aria-label="Dismiss announcement">&times;</button>' +
    '</div>';

  // --- Modal HTML (spec File 3 with Kit values wired) ----------------------
  var modalHTML =
    '<div class="waitlist-modal-overlay" id="waitlist-modal" role="dialog" aria-labelledby="waitlist-title" aria-modal="true" aria-hidden="true">' +
      '<div class="waitlist-modal" id="waitlist-modal-inner">' +
        '<div id="waitlist-modal-body">' +
          '<button type="button" class="close-btn" onclick="closeWaitlist()" aria-label="Close">&times;</button>' +
          '<h2 id="waitlist-title">Join the waitlist</h2>' +
          '<p class="subtitle">Be the first to know when our HR workbooks launch in June 2026.</p>' +

          '<div class="product-context-line" id="product-context">' +
            'You\'re signing up for updates on: <strong id="product-name-display"></strong>' +
          '</div>' +

          '<form id="waitlist-form" ' +
            'action="' + KIT_ACTION + '" ' +
            'method="post" ' +
            'data-sv-form="' + KIT_FORM_ID + '" ' +
            'data-uid="' + KIT_FORM_UID + '" ' +
            'novalidate>' +

            '<label for="ck-email">Email</label>' +
            '<input type="email" name="email_address" id="ck-email" autocomplete="email" required>' +

            '<label for="ck-first-name">First name</label>' +
            '<input type="text" name="fields[first_name]" id="ck-first-name" autocomplete="given-name" required>' +

            '<label for="ck-company-size">Company size</label>' +
            '<select name="fields[company_size]" id="ck-company-size" required>' +
              '<option value="">Select...</option>' +
              '<option value="1-50 employees">1-50 employees</option>' +
              '<option value="51-250 employees">51-250 employees</option>' +
              '<option value="251-1,000 employees">251-1,000 employees</option>' +
              '<option value="1,001-5,000 employees">1,001-5,000 employees</option>' +
              '<option value="5,000+ employees">5,000+ employees</option>' +
            '</select>' +

            '<input type="hidden" name="fields[product_interest]" id="ck-product-interest" value="">' +

            '<button type="submit" id="waitlist-submit">Join the waitlist</button>' +
          '</form>' +
        '</div>' +
      '</div>' +
    '</div>';

  // --- Inject on DOMContentLoaded -------------------------------------------
  function init() {
    // Banner first (top of body)
    var bannerWrap = document.createElement('div');
    bannerWrap.innerHTML = bannerHTML;
    var bannerEl = bannerWrap.firstChild;
    document.body.insertBefore(bannerEl, document.body.firstChild);

    // Check localStorage for prior dismissal
    try {
      if (localStorage.getItem(BANNER_DISMISS_KEY) === '1') {
        bannerEl.classList.add('hidden');
      }
    } catch (e) { /* localStorage may be blocked; banner stays */ }

    // Modal at end of body
    var modalWrap = document.createElement('div');
    modalWrap.innerHTML = modalHTML;
    document.body.appendChild(modalWrap.firstChild);

    // Wire submit handler
    var form = document.getElementById('waitlist-form');
    if (form) form.addEventListener('submit', handleSubmit);

    // Overlay click closes modal
    var overlay = document.getElementById('waitlist-modal');
    if (overlay) {
      overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closeWaitlist();
      });
    }

    // ESC closes modal
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' || e.key === 'Esc') {
        if (overlay && overlay.classList.contains('open')) closeWaitlist();
      }
    });

    // Focus trap inside modal (Tab cycles among focusables)
    if (overlay) overlay.addEventListener('keydown', handleFocusTrap);
  }

  function focusables() {
    var modal = document.getElementById('waitlist-modal-inner');
    if (!modal) return [];
    return Array.prototype.slice.call(
      modal.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    ).filter(function (el) {
      // Skip hidden elements (display:none or aria-hidden)
      return el.offsetWidth > 0 || el.offsetHeight > 0;
    });
  }

  function handleFocusTrap(e) {
    if (e.key !== 'Tab') return;
    var f = focusables();
    if (f.length === 0) return;
    var first = f[0];
    var last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  // --- Form submission (no-cors POST → modal-internal success state) -------
  function handleSubmit(e) {
    e.preventDefault();
    var form = e.target;
    var submitBtn = document.getElementById('waitlist-submit');
    var email = document.getElementById('ck-email');
    var first = document.getElementById('ck-first-name');
    var size = document.getElementById('ck-company-size');

    // Minimal client-side validation
    if (!email.value.trim() || email.value.indexOf('@') === -1) { email.focus(); return; }
    if (!first.value.trim()) { first.focus(); return; }
    if (!size.value) { size.focus(); return; }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';
    }

    var fd = new FormData(form);
    fetch(form.action, { method: 'POST', body: fd, mode: 'no-cors' })
      .then(showSuccess)
      .catch(showSuccess); // no-cors is opaque; show success either way
  }

  function showSuccess() {
    var body = document.getElementById('waitlist-modal-body');
    if (!body) return;
    body.innerHTML =
      '<button type="button" class="close-btn" onclick="closeWaitlist()" aria-label="Close">&times;</button>' +
      '<div class="waitlist-success">' +
        '<div class="waitlist-success-mark" aria-hidden="true">&#10003;</div>' +
        '<h2>You\'re on the list.</h2>' +
        '<p>Check your inbox in the next minute &mdash; there\'s a confirmation link. We\'ll email you the moment workbooks launch in June 2026.</p>' +
      '</div>';
  }

  // --- Public API (window-scoped so onclick="openWaitlist(...)" works) -----
  window.openWaitlist = function (productName) {
    var modal = document.getElementById('waitlist-modal');
    if (!modal) return;
    var productInput = document.getElementById('ck-product-interest');
    var contextLine = document.getElementById('product-context');
    var nameDisplay = document.getElementById('product-name-display');

    var clean = (productName || '').toString();
    if (productInput) productInput.value = clean;
    if (contextLine && nameDisplay) {
      if (clean) {
        nameDisplay.textContent = clean;
        contextLine.classList.add('visible');
      } else {
        contextLine.classList.remove('visible');
      }
    }
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Move focus to the first input for immediate typing
    setTimeout(function () {
      var firstInput = document.getElementById('ck-email');
      if (firstInput) firstInput.focus();
    }, 30);
  };

  window.closeWaitlist = function () {
    var modal = document.getElementById('waitlist-modal');
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  window.dismissWaitlistBanner = function () {
    var banner = document.getElementById('arbiter-banner');
    if (banner) banner.classList.add('hidden');
    try { localStorage.setItem(BANNER_DISMISS_KEY, '1'); } catch (e) { /* ignore */ }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
