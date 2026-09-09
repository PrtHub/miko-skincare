# Privacy Policy

**Miko — skincare routine builder**
Last updated: 9 September 2026
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

Two things do leave your device, both only when you ask for them:

1. **A photograph of a product label**, sent to be read for its ingredients.
2. **Your skin answers plus the product being discussed**, sent to generate
   advice about it.

Neither is stored on our servers. Your **life-state answer** — pregnancy,
breastfeeding, isotretinoin, post-procedure — never leaves your phone at all.

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

This is the only data we store on a server. It is integers.

---

## 5. What we do not do

- **No analytics.** There is no analytics or telemetry SDK in this app. We do
  not know which screens you open, how often you use it, or whether you
  finished onboarding.
- **No advertising and no ad identifiers.** We do not use the Advertising
  Identifier (IDFA) and do not show ads.
- **No tracking across apps or websites**, and no data shared for any third
  party's advertising or profiling.
- **No selling of personal information**, under any definition, ever.
- **No third-party SDK receives your data.** The AI processing in §4 is the only
  outbound flow.

---

## 6. Payments

Subscriptions are sold through Apple. Apple processes the payment and we never
see your payment details.

When purchasing is enabled, entitlement is managed by
`[RevenueCat, when wired — currently not yet integrated]` using an **anonymous
application user identifier**, with no email address or account attached.

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
  protection and abuse prevention.

We do not rely on consent for advertising, because we do not advertise.

**On health data:** answers about your skin, and about pregnancy or medication,
may constitute special-category data. Our approach is to keep the sensitive part
out of scope entirely — §4c — so that the special-category answer is never
transmitted or stored by us in any form.

---

## 11. International transfers

The AI processing in §4 may occur outside the UK/EEA, including in the United
States. Where it does, transfers rely on the provider's own safeguards
(`[Standard Contractual Clauses / adequacy — confirm with the provider]`).

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
2. **§5's "no analytics" is currently true and load-bearing.** The moment any
   SDK is added this section becomes false and the App Store privacy label
   becomes wrong. There is a stale comment in `src/db/settings.ts` describing the
   install ID as being "for analytics" — nothing implements it. Fix the comment
   or delete the claim, but do not let the two drift.
3. **§6 describes RevenueCat as not yet integrated**, which is true — three
   `TODO(revenuecat)` markers remain in `src/purchases/source.ts`. Update on
   the same day purchasing goes live, not after.
4. **The App Store privacy label must match this document.** On today's code the
   honest answer for "Data Used to Track You" is _none_, and for "Data Linked to
   You" _none_ — the only outbound personal-ish data (§4b) is not linked to an
   identity.
5. **§4a is the weakest claim in the document** and should be checked against
   the provider's current terms before launch, since it is the one flow where
   retention is not ours to promise.
