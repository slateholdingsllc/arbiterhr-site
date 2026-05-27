# Arbiter HR UPL Safe-Harbor Analysis

**Document type:** Internal compliance memo
**Effective date:** 2026-05-26
**Operator:** Slate Holdings LLC, operator of Arbiter HR
**Status:** Living document — review when (a) any state UPL definition materially changes, (b) Arbiter HR product scope expands beyond current model, or (c) any state bar or regulator contacts Arbiter HR about its products
**Not for public publication.** Internal use only.

---

## Purpose

This memo documents Arbiter HR's legal positioning on Unauthorized Practice of Law (UPL) exposure across its current and near-term product line. It exists so that future decisions — about product features, customer interactions, marketing copy, and potential regulatory inquiries — can be made against a documented baseline of legal reasoning rather than improvised under pressure.

Arbiter HR's products operate inside well-established safe harbors for legal information publishing. This memo documents which safe harbors apply, why they apply, and what operational discipline maintains them.

## Product Scope Covered

This memo addresses three product categories:

1. **Workbooks** — static digital products distributed via Gumroad. One topic per workbook, all 50 states + DC, citations to primary sources. Refreshed monthly.
2. **Portal — general HR bots and reference modules.** SaaS dashboard with bot-driven access to workbook content scoped to customer's states, monthly compliance digests, and an audit-readiness archive.
3. **Portal — LOA intake agent.** A specific bot that takes user inputs (state, employer benefits offered, pay rate, leave situation) and produces customer-specific calculations (leave timeline Gantt charts, benefits snapshots).

Each category presents distinct UPL exposure and requires distinct operational discipline.

## Foundational Legal Framework

### The four elements of UPL

UPL is defined slightly differently in each state, but every state's definition reaches some combination of these activities:

1. **Holding oneself out as a lawyer when not licensed.** Claiming attorney status, using titles like "Esq." or "Attorney at Law," advertising legal services.
2. **Giving legal advice for a specific situation.** Applying law to specific facts of a specific client to recommend a specific course of action.
3. **Drafting legal documents for others.** Preparing contracts, wills, pleadings, or other instruments intended to have legal effect for a specific client.
4. **Representing others in legal proceedings.** Appearing in court, before agencies, or in negotiations on behalf of a client.

Arbiter HR does none of these things. The closer questions involve element 2 (giving legal advice) and how the LOA intake agent's customer-specific calculations should be characterized.

### The publishing safe harbor

The First Amendment protects the publication of general legal information. This protection has been litigated extensively in the context of self-help legal materials, with publishers consistently prevailing. Key precedents:

- **Quicken Family Lawyer (Tex. 1999).** The Texas Unauthorized Practice of Law Committee obtained an injunction against the sale of Quicken Family Lawyer, ruling that selling software-generated legal forms constituted UPL. The Texas legislature responded by amending Tex. Gov't Code § 81.101(c) to expressly exclude "products that clearly and conspicuously state that the products are not a substitute for the advice of an attorney" from the definition of practice of law. The Texas injunction was vacated. This precedent stands today as the leading codification of the publishing safe harbor.

- **Janson v. LegalZoom (W.D. Mo. 2011).** Class action alleging UPL against LegalZoom's document automation services. The court certified the class but the case ultimately settled. More importantly, multiple other state bars examined LegalZoom and declined to pursue UPL action, accepting the safe harbor when LegalZoom's outputs are framed as software-assisted form preparation rather than personalized legal advice.

- **Florida Bar v. Brumbaugh (Fla. 1978)** and **Florida Bar v. Stuart (Fla. 1992).** Florida cases establishing that the production and sale of self-help legal forms, with general instructions, does not constitute UPL even though the materials inevitably help non-lawyers complete legal documents.

- **Nolo Press cases (multiple jurisdictions, 1970s-2000s).** Nolo has published self-help legal materials in all 50 states for decades without successful UPL action in any state. Several state bars examined Nolo and declined to act.

The synthesis from these cases: publication of general legal information, with appropriate disclaimers, does not constitute UPL even when consumers use that information to make legal decisions. The line is crossed only when the publisher provides advice tailored to the specific facts of a specific client.

### The software-as-tool framework

In addition to the publishing safe harbor, software products that apply law to user-supplied facts have generally been treated as tools rather than as legal practitioners. The leading example:

- **TurboTax / Intuit.** TurboTax takes user-supplied financial facts and applies tax law to produce a user-specific tax return. Multiple state bars and the IRS have examined TurboTax's UPL profile. TurboTax has prevailed on consistent reasoning: (a) software is a tool, not a person; (b) the user inputs the facts rather than being interviewed; (c) the user retains decision-making authority; (d) outputs are framed as calculations rather than recommendations; (e) the product directs users to professional help for complex situations.

This framework directly supports Arbiter HR's portal bot architecture, including the LOA intake agent.

## Analysis by Product Category

### Workbooks — squarely inside the publishing safe harbor

The workbooks are reference publications. They contain:
- General statements of employment law rules across all 50 states + DC
- Citations to primary sources (DOL, state labor departments, IRS, statutes, regulations)
- Comparative structures that organize the rules by topic and jurisdiction
- No application to specific customer facts
- No recommendations for action in specific situations
- Conspicuous disclaimers on Tab 1 of each workbook

This is the same model as Nolo Press, BLR, and dozens of other employment-law reference publishers operating freely in every state. UPL exposure is negligible.

**Operational discipline for workbooks:** maintain citations to primary sources; refresh content monthly; never tailor a workbook to a specific customer; never include "you should do X" language in workbook content.

### Portal — general HR bots — safe with proper construction

The portal's general bots respond to user queries by surfacing relevant rules, citations, and considerations from the underlying workbook content. They operate as interactive interfaces to the workbook material.

When constructed correctly, these bots are functionally indistinguishable from a search interface over the workbook content. The user types a question; the bot returns relevant rules and citations. This is reference, not advice.

**Required construction constraints:**

- **Scope discipline.** Each bot is scoped to a specific topic area (leave, pay, classification, etc.) corresponding to a workbook. Bots do not answer questions outside their scoped topic.
- **Output framing.** Bots respond with rules and citations, not recommendations. Output language uses "the relevant rule provides," "the cited statute requires," "factors a lawyer would consider include" — not "you should," "we recommend," "your best option is."
- **Specific-situation deflection.** When a user asks a question that requires applying law to specific facts ("my employee is in California and just told me X, what should I do?"), the bot acknowledges the specific-situation nature, surfaces the general rules and citations relevant to the situation, and recommends consulting counsel for specific guidance. The bot does not provide a specific recommendation.
- **No legal opinion language.** Bots do not say "in my opinion," "the better view is," "courts would likely rule," or any language that simulates legal analysis. They report the rules and the citations.
- **Disclaimer surfacing.** Every bot session includes the Content Disclaimer either prominently displayed in the interface or summarized at the start of the conversation.

**Operational discipline for general bots:** review bot outputs periodically (sample audits, especially after model updates) to ensure they stay within the construction constraints; treat any drift toward advice-like output as a defect to be corrected.

### Portal — LOA intake agent — the closest to the line, defensible with TurboTax framework

The LOA intake agent is the most UPL-exposed component of the Arbiter HR product line. Unlike the workbooks and the general bots, it produces customer-specific outputs based on customer-supplied inputs about specific (though not personally identified) employee situations.

The agent takes inputs:
- State (where the employee works)
- Benefits offered by the employer (STD, LTD, parental leave, PTO top-off, etc.)
- Rate of pay
- Leave situation (duration, type)

It produces outputs:
- Leave snapshot — Gantt chart showing how applicable leave entitlements (FMLA, state PFL, state PFML, parental leave, etc.) run concurrently or sequentially given the inputs
- Benefits snapshot — visualization of where the employee's earnings come from during the leave (employer top-off, STD payments, state PFL payments, unpaid periods)

The defensibility of this product turns on its construction.

**Why it can sit inside the safe harbor.** The TurboTax framework applies. The agent is a calculation tool that applies cited statutory and regulatory rules to user-supplied inputs to produce a calculation. The user retains decision authority. The user supplies the facts (through structured input fields, not through bot-driven interview). The outputs are calculations of statutory entitlement under specified scenarios, not recommendations about how to handle a specific employee.

**Required construction constraints — non-negotiable.**

1. **Inputs through structured fields, not conversational interview.** The customer selects state from a dropdown, selects benefits from checkboxes, enters pay rate in a numeric field, and selects leave type and duration. The agent does not ask "tell me about your employee's situation" and synthesize from free-text. This is the critical construction choice that separates calculation from advice.

2. **Outputs framed as calculations.** The Gantt chart is labeled "Leave Entitlement Calculation Based on Your Inputs." The benefits snapshot is labeled "Benefits Timeline Based on Your Inputs." Outputs do not say "Recommended Leave Schedule" or "How You Should Handle This Leave."

3. **Every output document carries an embedded disclaimer.** The disclaimer text travels with the export. If the customer prints, downloads, or shares the Gantt chart, the disclaimer is visible on the document. This prevents the output from being detached from its disclaimer in downstream use.

4. **Specific-situation triggers fire as warnings.** When customer inputs touch on situations the agent isn't designed to address — accommodation requests, interactive process obligations, performance issues coinciding with leave, return-to-work questions, termination overlapping leave — the agent surfaces a clear notice that these situations require consultation with counsel and that the output does not address them.

5. **No "you should" language anywhere.** The output explains the calculation. It does not recommend action. "FMLA and CA CFRA leave entitlements run concurrently per [citation]" — defensible. "You should grant 12 weeks of leave" — not defensible.

6. **Out-of-scope refusal is built in.** If a customer attempts to use the agent in a way it isn't designed for (asking the bot to interpret a specific employment contract, advise on whether to terminate an employee, assess the merits of a discrimination claim), the agent declines and recommends counsel.

**Operational discipline for LOA intake agent:**
- Quarterly review of agent outputs for drift toward advice-like language
- Customer-facing input field design audit before each model update
- Disclaimer text embedded in every exportable output verified at least annually
- Any state bar inquiry about the agent triggers immediate counsel involvement per the Complaint Response SOP

## State-by-State Analysis for Aggressive UPL Jurisdictions

UPL enforcement varies meaningfully by state. The states with the most aggressive UPL postures are reviewed individually below. Operator location (WA) and customer geographic distribution (all 50 + DC for workbooks; portal customer scope TBD) are both relevant.

### California

Cal. Bus. & Prof. Code § 6125 prohibits practice of law without admission to the State Bar. The California State Bar's UPL enforcement is active and well-funded. However, California's UPL definition reaches:

- Holding oneself out as an attorney
- Giving legal advice as to specific situations
- Preparing legal documents for specific clients

California has not pursued UPL action against legal-information publishers (Nolo, BLR, LegalZoom, Rocket Lawyer, etc.) operating under the publishing safe harbor. LegalZoom in particular operates in California with a substantial customer base.

**Arbiter HR exposure in CA:** Workbooks — none. General bots — none with proper construction. LOA intake agent — defensible under TurboTax framework with construction constraints above.

### New York

N.Y. Jud. Law § 478 prohibits UPL. New York's enforcement is moderately active. The leading interpretive cases (e.g., *El Gemayel v. Seaman*, 72 N.Y.2d 701 (1988)) reach individualized legal advice and representation, not publication of general legal information.

New York's permissive treatment of legal information publishers is well-established. Avvo, LegalZoom, and similar information products operate freely in NY.

**Arbiter HR exposure in NY:** same as CA — workbooks and general bots clear; LOA intake agent defensible with construction discipline.

### Texas

Tex. Gov't Code § 81.101 prohibits UPL, but § 81.101(c) specifically codifies the safe harbor for self-help legal materials following the Quicken Family Lawyer case. The Texas statute expressly excludes from the definition of practice of law "the design, creation, publication, distribution, display, or sale" of products that "clearly and conspicuously state that the products are not a substitute for the advice of an attorney."

Arbiter HR's Content Disclaimer satisfies this requirement on its face.

**Arbiter HR exposure in TX:** lowest of any state. Explicit statutory safe harbor applies. LOA intake agent is squarely covered by § 81.101(c).

### Washington (operator state)

Wash. Rev. Code § 2.48.180 prohibits UPL. Until recently, Washington operated a Limited License Legal Technician (LLLT) program that allowed non-attorneys to provide limited legal services in family law; the program was sunset in 2023, returning Washington to the standard UPL regime.

Washington's UPL definition follows the conventional pattern. The Washington State Bar Association's UPL board pursues cases involving individualized legal advice or representation by non-attorneys, not legal information publishing.

**Arbiter HR exposure in WA:** standard analysis. Operator location does not trigger any additional UPL exposure beyond what would apply to a publisher anywhere.

### Florida and Illinois

Both states have moderately active UPL enforcement and follow conventional definitions. Both permit self-help legal publishing under the publishing safe harbor. No special exposure for Arbiter HR.

### Other states

The remaining 44 states (plus DC) follow conventional UPL definitions that reach individualized legal advice and representation but not legal information publishing. No state currently has a UPL framework that would create exposure for Arbiter HR's current product line.

## Operational Discipline Requirements

Maintaining the safe harbor requires sustained discipline. The following operational practices are required:

1. **Content Disclaimer is conspicuous on every customer touchpoint.** Footer of arbiterhr.com, Tab 1 of every workbook, portal interface, every bot output, every export. The disclaimer is not buried in a Terms-of-Service page; it appears where customers interact with content.

2. **Authorship and credentials are accurately represented.** Practitioner-developed methodology, not attorney-prepared content. No claims of attorney involvement, no implied legal credentials, no use of legal-credential signifiers.

3. **Citations are real and current.** Every cell, every output, every bot response is traceable to a primary source. Citation accuracy is verified before each monthly refresh.

4. **Customer-facing language stays informational.** Marketing copy, in-product copy, bot outputs, and customer support communications consistently use informational framing ("the relevant rule provides," "the cited statute requires") rather than advisory framing ("you should," "we recommend").

5. **Specific-situation triggers route to counsel.** Bots, marketing copy, and customer support all consistently route customers asking about specific situations to "consult an attorney licensed in your jurisdiction" rather than attempting to provide guidance.

6. **No referrals to specific attorneys or law firms.** Doing so creates a different exposure (lawyer-referral-service regulation) without offsetting benefit. Customers find their own counsel.

7. **No "free legal review" or "legal hotline" features.** Any feature that resembles direct legal consultation would defeat the publishing safe harbor regardless of how it's labeled.

8. **Audit archive is positioned as evidence of engagement, not evidence of compliance.** Customer-facing language about the archive describes it as monitoring activity documentation, not compliance certification. This positioning is documented in the Content Disclaimer and Terms.

9. **Bot quality review every quarter.** Sample bot outputs reviewed for drift toward advice-like language. Drift is treated as a defect and corrected.

10. **Any state bar contact triggers immediate counsel engagement.** If any state bar UPL committee, disciplinary body, or analogous regulator contacts Arbiter HR or Slate Holdings, the Complaint Response SOP escalation procedure applies (Type D — Regulatory inquiry). No substantive response without counsel review.

## Review Triggers

This memo is reviewed and updated when any of the following occur:

- A state passes new UPL legislation that materially changes the safe harbor framework
- A state bar or court issues a published decision narrowing the publishing safe harbor
- A federal court issues a published decision on AI-tool UPL exposure
- Arbiter HR expands the product line to include features that approach advice (e.g., direct customer-attorney matching, individualized written analysis, document drafting for specific situations)
- The LOA intake agent or any other bot drifts in its outputs in a way that exceeds the construction constraints
- Any state bar, court, or regulator contacts Arbiter HR with a UPL-related inquiry
- A customer files a complaint alleging Arbiter HR provided legal advice

## Residual Risks

The analysis above supports launch and sustained operation. The following residual risks remain and are accepted:

1. **A state bar opens a UPL inquiry despite the safe harbor.** Possible but unlikely. Defense costs would be substantial even if the safe harbor ultimately prevails. Mitigation: maintain counsel relationship; budget for defense costs in insurance evaluation.

2. **A state passes new UPL legislation specifically targeting AI-assisted legal tools.** Possible. Several state bars have begun studying AI in legal practice. If a state passes legislation narrowing the safe harbor specifically for AI, Arbiter HR may need to modify its bot construction or geographically exclude that state. Mitigation: legislative monitoring; LOA intake agent designed for state-specific scoping if needed.

3. **A customer alleges UPL after a workbook or bot output led them to a bad outcome.** Possible but low-probability. The Content Disclaimer and customer responsibility allocation in the Terms provide the principal defense. Mitigation: insurance (E&O); complaint response process.

4. **Adverse precedent in another industry transfers to legal information publishing.** Tax software, financial planning software, and medical information products all face analogous regulatory regimes. An adverse ruling in one of those areas could be analogized to legal information. Mitigation: monitor adjacent industries; treat adverse rulings as review triggers.

## Conclusion

Arbiter HR's current and near-term product line operates inside well-established safe harbors for legal information publishing. The workbooks are reference publications protected by the same framework that protects Nolo Press, BLR, and similar publishers. The general portal bots are interactive interfaces over reference content, safe with proper construction. The LOA intake agent is the closest to the line, defensible under the TurboTax software-as-tool framework if constructed correctly.

The defensive structure has three layers:
1. **Publishing safe harbor** — operates as the principal defense for all reference content
2. **Software-as-tool framework** — operates as the principal defense for customer-specific calculations
3. **Content Disclaimer and customer responsibility allocation** — operates as the contractual backstop reinforcing both

Sustained operation requires the operational discipline documented above. Launch is supported.

---

Slate Holdings LLC, operator of Arbiter HR
30 N Gould St, Ste N, Sheridan, WY 82801, USA
