# Privacy Policy

**Miko — skincare routine builder**
Last updated: 10 September 2026
Effective: on first public release

> **Draft. Not yet reviewed by a lawyer.** Every factual claim below was written
> against the code and is accurate as of this date — but a privacy policy is a
> binding legal document, this app touches health-adjacent data, and it needs a
> qualified review before it is published or linked from App Store Connect.
> Placeholders in `[BRACKETS]` are facts only you have.

---

## The short version

Miko has no accounts and no user database. Your products, your routine and
everything you told us about your skin are stored on your phone and nowhere
else. We could not identify you if we were asked to.

Two things leave your device when you ask for them:

1. **A photograph of a product label**, sent to be read for its ingredients.
2. **Your skin answers plus the product being discussed**, sent to generate
   advice about it.

Neither is stored on our servers.

And one thing leaves without you asking, which we would rather state up front
than bury: **which set-up screen you reached** while first installing the app,
and **which subscription plan you tapped**. Screen names only — never what you
answered on them. Full list in §4e.

Your **life-state answer** — pregnancy, breastfeeding, isotretinoin,
post-procedure — never leaves your phone at all, in any flow.

---

## 1. Who we are

`[LEGAL ENTITY NAME]`, `[REGISTERED ADDRESS]`.
Contact: `[PRIVACY CONTACT EMAIL]`.

For the purposes of the UK GDPR and EU GDPR, we are the data controller for the
limited processing described in §4.

---

## 2. There is no account

Miko has no sign-up, no login, and no server-side record of you. We do not ask
for your name, your email address, or your phone number, and there is no way to
give them to us.

This is architectural rather than a policy choice: there is no user table to put
you in.

---

## 3. What is stored on your device

All of the following lives in a database on your phone (`expo-sqlite`) and is
never transmitted to us:

| What                        | Examples                                                                                                 |
| --------------------------- | -------------------------------------------------------------------------------------------------------- |
| Your shelf                  | Products, when you added them, bottle sizes, what you marked finished                                    |
| Your scans                  | Every product you have photographed, and the reads produced for them                                     |
| Your routine                | The generated week, and reminder times you set                                                           |
| Your skin answers           | Skin type, concerns, sensitivities, reactions, experience, climate, age range, gender, shaving frequency |
| **Your life-state**         | Pregnancy, breastfeeding, isotretinoin, post-procedure                                                   |
| Your Ask Miko conversations | Both sides of every chat                                                                                 |
| Cached AI answers           | So reopening a product costs nothing and works offline                                                   |
| Subscription status         | A cached copy of whether your subscription is active                                                     |

**Deleting the app deletes all of it.** There is no server copy, which also
means we cannot restore it for you — see §9.

---

## 4. What leaves your device, and when

### 4a. Reading a label

When you take a photograph to scan a product, the image is sent to our
processing service and on to an AI model that reads the ingredients from it. The
answer comes back and is stored on your phone.

- **We do not store the photograph.** It is passed through and discarded.
- The image is processed by `[AI PROVIDER — currently OpenRouter, routing to
Google's Gemini]`. Their retention is governed by their own policies, which we
  do not control. This is the one part of this document we cannot make a promise
  about, and the app says so in-app before the camera is first used.

### 4b. Generating advice

When you ask for a product read, shelf advice, a week explanation, or use Ask
Miko, we send:

- the product or products in question, and their ingredient lists;
- your skin answers, specifically: **skin type, concerns, sensitivities,
  climate, experience, gender, shaving frequency, age range, and whether
  products have gone wrong for you before**;
- for Ask Miko, the text of your question and up to eight previous turns.

### 4c. What is deliberately withheld

**Your life-state never crosses the network.** Pregnancy, breastfeeding,
isotretinoin and post-procedure status stay on your phone.

Where that answer needs to change what the AI says, your phone works out which
ingredients to keep out of the answer and sends **only a bare list of ingredient
names** — with no reason attached — and instructs the model not to speculate
about why. So the AI can avoid recommending a retinoid without ever being told
that you are pregnant.

This is enforced in code, not by policy: the data type the advice request
accepts has no field capable of carrying a life-state.

### 4d. Rate limiting

To stop one device exhausting the service, we count requests. We store a
counter under a value derived by hashing your device's random installation
identifier together with the current day.

- The identifier is generated on your device on first launch. It is random and
  is not linked to you, your Apple ID, or any advertising identifier.
- Because the day is hashed _into_ the stored value rather than kept beside it,
  two days' counters cannot be linked back to the same device — including by us.
- Counters expire automatically.

These counters are the only thing we store on our own server. They are
integers.

### 4e. How far you got while setting up

We use **Mixpanel** to record how people move through first-time set-up, and
nothing else. Set-up is twenty screens, and without this we cannot tell whether
people give up — or which question they give up on.

This is the complete list of what is sent. It is short on purpose, so it can be
checked rather than taken on trust:

| Sent                                             | Example      |
| ------------------------------------------------ | ------------ |
| The name of the set-up screen shown              | `life-state` |
| Its position in the run                          | `15`         |
| Whether it counts toward the progress bar        | `true`       |
| Whether you moved forward, went back, or skipped | —            |
| Which subscription plan you tapped               | `annual`     |

**The name of a screen is not the answer given on it**, and that distinction is
the whole design. `life-state` records that the pregnancy question was shown to
somebody. It does not record, and cannot record, what they said. Your skin type,
concerns, sensitivities and life-state are never sent here in any form.

It is enforced in code rather than by policy: the event shapes have nowhere to
put an answer, a fixed allowlist of four field names strips anything else before
it is sent, and an automated test fails if any answer field is ever added to
that list (`src/analytics/events.ts`).

**One event can occur outside set-up.** The subscription screen is also
reachable later from Settings, so "which plan you tapped" may be recorded then
too. Nothing else in the app is instrumented: we do not know which screens you
open after set-up, how often you use Miko, what you scan, or what is on your
shelf.

We also disable:

- **Mixpanel's location lookup**, so your IP address is not used to derive a
  city or country.
- **Autocapture and session recording.** No screen contents, no taps, no video.
  A recording of set-up would be a recording of the pregnancy question, which is
  precisely what the rest of this document exists to prevent.

There is no account, so none of it is linked to you. Mixpanel sees an anonymous
per-install identifier that it generates itself — not the identifier in §4d, and
not linked to anything else. We never call any function that would attach an
identity to it.

---

## 5. What we do not do

- **No analytics outside set-up.** The one exception is the set-up funnel in
  §4e — screen names and the plan you tapped, never an answer. We do not know
  which screens you open afterwards, how often you use Miko, or what is on your
  shelf.
- **No session recording and no autocapture** — see §4e.
- **No advertising and no ad identifiers.** We do not use the Advertising
  Identifier (IDFA) and do not show ads.
- **No tracking across apps or websites**, and no data shared for any third
  party's advertising or profiling.
- **No selling of personal information**, under any definition, ever.
- **No third-party SDK receives your skincare data.** The AI processing in §4a
  and §4b is the only flow that carries anything about your skin, and the
  set-up funnel in §4e carries no personal information at all.

---

## 6. Payments

Subscriptions are sold through Apple. Apple processes the payment and we never
see your payment details.

Entitlement is managed by **RevenueCat** using an **anonymous application user
identifier**, with no email address or account attached. We never call their
login API and we never attach subscriber attributes, so nothing you told Miko
during set-up reaches them.

---

## 7. Permissions we ask for

| Permission        | Why                                                | If you decline                                                          |
| ----------------- | -------------------------------------------------- | ----------------------------------------------------------------------- |
| **Camera**        | To photograph product labels                       | You can type ingredient lists in by hand instead; everything else works |
| **Notifications** | Reminders you switch on yourself, per routine slot | No reminders. Nothing else changes                                      |

Notifications are scheduled **locally on your device**. There is no push server
and no device push token is ever sent to us.

---

## 8. Children

Miko is not directed at children and is rated for `[AGE RATING]`. We do not
knowingly collect information from children. Since we hold no personal data at
all, there is nothing to delete on request — but see §10.

---

## 9. Your rights, and the honest limits of them

Under GDPR and similar laws you have rights of access, rectification, erasure,
restriction, portability and objection.

**In practice these are unusually simple here, because we hold nothing about
you:**

- **Access and portability** — your data is on your phone. Settings includes an
  export that writes your shelf to a file you can keep or move.
- **Erasure** — delete the app, or use "Erase everything" in Settings. Both are
  immediate and complete. We do not hold a copy to delete.
- **Rectification** — every answer you gave is editable in Settings.

The corresponding limit, stated plainly: **because there is no backup, data loss
is permanent.** If you delete the app, lose the phone, or set up a new device
without an iCloud restore, your shelf is gone and we cannot recover it. Use the
export if that matters to you.

To exercise a right, or to complain, write to `[PRIVACY CONTACT EMAIL]`. In the
UK you may also complain to the Information Commissioner's Office; in the EU, to
your local supervisory authority.

---

## 10. Legal basis for processing

For the limited processing in §4 we rely on:

- **Contract** — sending a label photograph or an advice request in order to
  provide the feature you asked for.
- **Legitimate interests** — the request counters in §4d, for service
  protection and abuse prevention; and the set-up funnel in §4e, to understand
  and improve a flow people otherwise abandon silently.

We do not rely on consent for advertising, because we do not advertise.

> **⚠️ For review.** Relying on legitimate interests for §4e is the common
> position for first-party product analytics that involves no tracking, no
> advertising identifier and no cross-service identity — all true here. It is
> still a legal judgement rather than a settled fact, and some regulators take a
> stricter view of any analytics SDK. If the reviewer disagrees, the fix is
> cheap: the SDK is confined to one module and is a no-op without its token, so
> it can be gated behind a consent prompt or dropped entirely without touching
> anything else.

**On health data:** answers about your skin, and about pregnancy or medication,
may constitute special-category data. Our approach is to keep the sensitive part
out of scope entirely — §4c — so that the special-category answer is never
transmitted or stored by us in any form.

---

## 11. International transfers

Two processors may handle data outside the UK/EEA, including in the United
States:

| Processor                                                | For      | Safeguard                                                 |
| -------------------------------------------------------- | -------- | --------------------------------------------------------- |
| `[AI PROVIDER — OpenRouter, routing to Google's Gemini]` | §4a, §4b | `[SCC / adequacy — confirm with the provider]`            |
| Mixpanel                                                 | §4e      | `[SCC — confirm; Mixpanel also offers EU data residency]` |

**Mixpanel offers an EU-hosted endpoint**, and the SDK can be pointed at it in
one line (`setServerURL`). If this app is marketed into the EU, switching to it
is the simplest way to remove that transfer from scope altogether — worth doing
before launch rather than after.

---

## 12. Not medical advice

Miko is not a medical device and does not provide medical advice. See
[terms.md](./terms.md) §5. Nothing in this policy should be read as suggesting
we hold or process a health record about you.

---

## 13. Changes

If we change this policy we will update the date at the top, and where the
change is material we will say so in the app before it takes effect.

---

## Notes for whoever finalises this

Kept in the file deliberately — these are the points a reviewer needs.

1. **Fill every `[BRACKET]`.** The entity, address, contact email, age rating,
   and the AI provider's transfer mechanism.
2. **An analytics SDK now exists — §4e is the section that has to stay true.**
   Mixpanel was added on 10 September 2026, scoped to the set-up funnel. The
   guards are `src/analytics/events.ts` (closed event shapes, a four-key runtime
   allowlist) and its test, which fails if an onboarding answer field is ever
   added. If anyone widens the event list, widens the allowlist, or turns on
   autocapture or session replay, this section and the App Store label both
   become false on the same commit.
3. **§6 describes RevenueCat as integrated and anonymous.** The first half is
   now true — `src/purchases/source.ts` makes real calls. The second half holds
   only while the app never calls `Purchases.logIn` and never sets a subscriber
   attribute; either would attach an identity to a purchase and make this
   paragraph false on the commit that added it.
4. **The App Store privacy label must match this document, and it currently does
   not.** It declares no collection; §4e means that is now wrong. The honest
   entry is:
   - **Data Not Linked to You → Usage Data → Product Interaction.** Set-up
     screen progression and the plan tapped.
   - **Data Used to Track You: none.** No IDFA, no cross-app or cross-site
     linkage, no data shared for anyone's advertising.
   - **Data Linked to You: none.** There is no account to link to, and
     `identify()` is never called.

   Update this before the next submission, not after.

5. **§4a is the weakest claim in the document** and should be checked against
   the provider's current terms before launch, since it is the one flow where
   retention is not ours to promise.
6. **§4e says one event can fire outside set-up.** That is accurate: the
   subscription screen is also reachable from Settings and from the locked
   screen, so `paywall_plan_selected` is not strictly a set-up-only event. If
   the funnel is ever narrowed to onboarding alone, tighten the wording back.
