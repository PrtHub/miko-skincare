# Landing page and web surface

**Status:** Draft v1 · 2026-09-09
**Related:** [product.md](./product.md) · [features.md](./features.md) · [subscriptions.md](./subscriptions.md) · [terms.md](./terms.md) · [privacy-policy.md](./privacy-policy.md)

Everything needed to build the marketing site: the proposition, the copy, the
visual system, the pricing block, and the programmatic SEO architecture.

Every number in this document was read out of the code on the date above. Where
something is not built yet it says so, because a landing page that promises a
feature the app does not have is the one marketing mistake that costs a refund
instead of a click.

---

## 1. The one sentence

> **Miko reads the label on any skincare product and tells you what is in it,
> whether it suits you, and what not to use it with.**

Say it that way round. "What is in it" is the concrete thing; "routine builder"
is the category. Lead with the concrete thing and let the category follow.

### The positioning, and why it is not "conflict checker"

Miko is a **routine builder with conflict detection as the feature that makes it
trustworthy** — not an ingredient-conflict checker.

A checker is a lookup utility. Lookup utilities have a brutal retention cliff:
the user gets their answer and never returns. The shelf is the product; the
conflict check is the hook that gets the shelf populated.

It also ranks better. "Skincare routine builder" is a category people browse.
"Ingredient conflict checker" is a long-tail search term — valuable, and the
subject of §9, but not the thing the home page should be optimised for.

---

## 2. Who it is for

Three audiences, in the order they should be addressed.

**The overwhelmed buyer.** Owns six to ten products bought on recommendations,
has no idea whether they work together, suspects some are cancelling each other
out. Wants permission to stop worrying. This is the volume.

**The person who checks.** Twelve-plus products, reads INCI lists, knows the
jargon, already has opinions. Low volume, disproportionate influence — writes
the reviews and posts the screenshots. **The site must never be wrong in a way
this person can detect.** Every unhedged claim is a gift to them.

**The high-intent moment — not a persona.** Someone who has just found out they
are pregnant, owns a shelf assembled without that constraint, and urgently needs
to know what is now off-limits. Highest willingness to pay in the product,
highest emotional stakes, and the only thing here a competitor cannot copy
without doing the reference work. It deserves its own page (§9) as well as a
section on the home page.

---

## 3. The page, section by section

### Hero

Headline options, in order of preference:

1. **Point it at any bottle.** / _Miko reads the label and tells you what is in
   it, what that means for your skin, and what not to use it with._
2. **Know what is actually in it.** / _One photograph. Every ingredient
   explained, flagged against your own skin._
3. **Your bathroom shelf, finally explained.**

One primary action, repeated down the page: **Download on the App Store**. Not
three competing buttons.

Hero visual: the scan-to-read pair — a phone showing the viewfinder, and a
second showing the read. Those are the first two App Store screenshots and they
answer _"what do I get from one photograph?"_ before anything answers _"what is
this app?"_

### Section 2 — One photograph, every ingredient

The thing nobody can do for themselves: thirty-two names in six-point type,
sorted into what they are each doing there, with the two or three that matter to
_this person_ marked and explained.

Show the four levels. They are the visual signature of the product:

| Level            | Means                                                            |
| ---------------- | ---------------------------------------------------------------- |
| **Good for you** | Aimed at something you said you are working on                   |
| **Neutral**      | Doing a job, nothing to say about it — the majority of any label |
| **Watch**        | Worth introducing carefully, given what you told us              |
| **Avoid**        | You told us you react to this, or your life-state rules it out   |

**There is no "toxic" level and the site must not imply one.** It is not a claim
a label can support, and one unsupportable word makes the other three read as
marketing. This is the single most important copy constraint on the site.

### Section 3 — The week

Seven days, three slots — morning, midday, evening — built from the products you
already own, in application order, thinnest to thickest.

Two details worth the words:

- **Midday exists because "reapply" needs somewhere to live.** It carries
  sunscreen only, and it is empty for anyone without SPF rather than padded.
- **It is computed on your phone**, so it is identical every time you open it.
  A schedule that quietly rearranges itself is worth less than no schedule.

### Section 4 — What happens when you mix them

The conflict engine. Frame it as compatibility, never as safety:
_"commonly advised against layering"_, never _"unsafe"_.

Include at least one **myth**. Four of the nineteen layering rules exist to say
a widely-repeated warning does not hold up — vitamin C and niacinamide being the
famous one. Debunking is more shareable than warning, and it demonstrates
impartiality better than any claim about impartiality.

### Section 5 — Pregnancy, and three other modes

Pregnancy · breastfeeding · isotretinoin · post-procedure.

Flip a switch and the shelf re-renders: blocked products grey out with a lock,
and the week rebuilds around what remains — **filling gaps from products you
already own**, never from anything anyone could earn a commission on.

Copy discipline here is absolute:

- _"Commonly advised against during pregnancy"_ — never _"unsafe"_, never
  _"safe"_.
- **Always** followed by the deferral: _"Confirm anything medical with your
  doctor."_
- Never imply clearance. The mode flags things to raise with a professional.

### Section 6 — Nothing about you leaves your phone

The one claim no competitor in this category can make, and it is literally true:
no account, no login, no server-side user row. The shelf, the routine and the
life-state live in a database on the phone.

**State the exception yourself.** A label photograph does go out to be read for
its ingredients. Saying so is what makes the rest of the claim credible — and a
reader who finds the gap themselves discounts everything else on the page.

The strongest single sentence available: **your life-state answer never crosses
the network at all.** When it needs to change what the AI says, the phone sends
a bare list of ingredients to avoid with no reason attached.

### Section 7 — Ask Miko

A chat that already knows your shelf, your products' full ingredient lists, and
what you told it about your skin — so a question needs no set-up.

### Section 8 — Pricing

See §7. One block, both plans, renewal terms visible.

### Section 9 — FAQ

The doubt-answering section, and where a lot of the long-tail SEO lands. Draft
questions in §9c.

---

## 4. What the app actually contains

Real figures, for copy that needs a number. Read from the code on the date at
the top of this file.

|                                       | Count                                                                    |
| ------------------------------------- | ------------------------------------------------------------------------ |
| Active ingredients tracked            | **58**, across **14** chemistry families                                 |
| INCI names recognised                 | **163** (aliases mapping printed names to actives)                       |
| Layering rules                        | **19** — 1 avoid, 11 separate, 7 fine, of which **4 are myth-busters**   |
| Life-state rules                      | **25** — pregnancy 13, breastfeeding 3, isotretinoin 4, post-procedure 5 |
| Concerns you can pick                 | **16**                                                                   |
| Sensitivities you can declare         | **12**                                                                   |
| Prescription-only ingredients flagged | **4**                                                                    |

### ⚠️ The number you may not use

**Zero of the 44 reference rows have completed citation review.** The app is
honest about this: such claims render as _"Pending review"_ with confidence
capped at low.

So the site **must not** say "cited", "sourced", "peer-reviewed",
"dermatologist-reviewed", "backed by research", or anything of that shape. It is
the one claim a sceptical reader can check and disprove — from the app's own
screens. Once the review pass is done this section gets rewritten and becomes
the strongest thing on the page. Not before.

Safe phrasings today: _"a reviewed reference table is being built"_, _"the app
tells you which claims are checked and which are not"_, _"we show you when we
are not sure"_.

---

## 5. Features, and what is honestly shippable copy

| Feature                                 | State                                                      | Say it on the site?                                           |
| --------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------- |
| Scan one product, full read             | Built                                                      | **Yes — lead with it**                                        |
| Ingredient list, grouped and flagged    | Built                                                      | **Yes**                                                       |
| Manual entry (paste an ingredient list) | Built                                                      | Yes                                                           |
| The shelf, tiered by application order  | Built                                                      | Yes                                                           |
| Weekly routine, 3 slots                 | Built                                                      | **Yes**                                                       |
| Conflict verdicts + myths               | Built                                                      | **Yes**                                                       |
| Life-state modes                        | Built                                                      | **Yes**                                                       |
| Ask Miko                                | Built                                                      | Yes                                                           |
| Adaptive reminders                      | Built                                                      | Yes                                                           |
| Run-out estimation                      | Built                                                      | Yes, hedged — it is an estimate and says so                   |
| Climate adjustment                      | Built                                                      | Minor mention                                                 |
| Shelf export                            | Built                                                      | Mention under privacy                                         |
| Seasonal drift                          | **Not built**                                              | **No**                                                        |
| Introduction pacing (ramps)             | **Not built** — the plan promises it, the shelf ignores it | **No**                                                        |
| Search a product by name                | **Not built**                                              | **No**                                                        |
| Citations on rules                      | **Not built**                                              | **No** — see §4                                               |
| Purchasing                              | **Not wired**                                              | Pricing may be shown; do not say "subscribe now" from the web |

---

## 6. The visual system

Lift these directly from `src/theme.ts` so the site and the app are one thing.

### Colour

```
ink            #241E19    near-black, warm
paper          #FBF7F2    warm off-white — the ground. never pure white
surface        #FFFFFF    cards
surfaceSunken  #F2EBE1    recessed panels
line           #EFE7DC    hairlines
ink2 / ink3 / ink4 / faint   #554C43 · #6E6358 · #7C7166 · #A2988B
```

**Every active carries its own colour.** This is the load-bearing idea in the
whole system — colour is information, not decoration — and the site should use
it the same way rather than picking a brand accent:

```
retinoid   #D97742      aha / bha   #C4574E      vitamin C  #E0AE39
barrier    #5E9E78      hydrator    #6B93B8      peptide    #8E7AB5
brightening #A97DBA     soothing    #6FA98A      fragrance  #C98BA6
```

Verdicts: `fine #4E8F68` · `separate #B07A26` · `avoid #B84A3D`

### Type

```
Young Serif      headlines          (display, one weight — size carries hierarchy)
Instrument Sans  UI and body        (400 / 500 / 600)
IBM Plex Mono    labels, ingredient names, percentages
```

The mono is what makes ingredient names and percentages read as _data_ rather
than as prose. Use it for every INCI name on the site.

### The recurring image

**Bottles on a shelf, each carrying the colour of its dominant active.** A
product is drawn as an object with a lit left edge, and the board is three
strips — a lit top surface, a front edge, a darker underside. Not a flat bar.
That furniture is the app's signature; the site should reuse it, not invent a
new illustration style.

### Tone

Pharmacist, not influencer. Calm, specific, slightly clinical. **No sparkle
emoji, no exclamation marks.** The product sells impartiality and the copy has
to earn it on every line.

---

## 7. Pricing block

| Plan        | Price               | Presentation                                                |
| ----------- | ------------------- | ----------------------------------------------------------- |
| **Annual**  | **US$49.99 / year** | Default. Show `$4.17 a month, billed yearly` and `Save 58%` |
| **Monthly** | **US$9.99 / month** | Second, never preselected                                   |

The saving is derived, not typed: `1 − 49.99 / (9.99 × 12)` = 58%. If the site
hard-codes it, it will eventually disagree with the app.

**Required on any surface showing price:** that it renews automatically until
cancelled, that it is managed in Apple ID settings, and links to
[Terms](./terms.md) and the [Privacy Policy](./privacy.md).

**No free tier.** Do not imply a trial, a free plan, or a limited free mode —
none exists.

> **India pricing is unresolved.** US$49.99 is about ₹4,200, seven to ten times
> the ₹399–599 band the India thesis is built on, and ₹670-odd a week is not a
> price that market bears. If the site is India-facing, this needs deciding
> first — see [subscriptions.md §2](./subscriptions.md).

---

## 8. Copy bank

### Headlines

- Point it at any bottle.
- Know what is actually in it.
- Thirty-two ingredients. Sorted, and flagged for your skin.
- A routine built from what you already own.
- Your shelf, and what happens when you mix it.
- Nothing about you leaves your phone.

### Supporting lines

- One photograph. Every ingredient explained.
- The back of the bottle gives the ingredients. The front works too, if Miko
  knows the product.
- Colour is how you read what is in a bottle.
- It tells you what to pause, and why.
- Computed on your phone, so it says the same thing every time.
- No account. No sign-up. No database with your name on it — because there is
  no database.

### Words to prefer

_commonly advised against · commonly used for · worth watching · pending review
· we are not sure · your own products · on your phone_

### Words to refuse

**Never:** safe · unsafe · toxic · chemical-free · clean · non-toxic · clinically
proven · dermatologist-approved · cures · treats · prevents · guaranteed ·
detox · natural (as a virtue).

The first three are the ones that will get suggested most and matter most.
"Toxic" in particular contradicts a decision taken inside the product.

---

## 9. SEO architecture

This is the part with real leverage, and there is a documented hole to fill:
dropping the free tier removed the app-side SEO surface, and
[subscriptions.md §3](./subscriptions.md) records the replacement as _"Nothing
yet. The blog/web surface has to carry this on its own."_ This section is that
surface.

### 9a. The programmatic thesis

Every pair of actives is a query somebody types:

> _can I use retinol and niacinamide together_ · _vitamin c and aha_ ·
> _benzoyl peroxide with tretinoin_ · _salicylic acid while pregnant_

With **58 actives** that is **1,653 unordered pairs** before triples, before
life-state combinations, before ordering questions. Each one is a single factual
question with a short, honest answer — which is exactly the page type search
engines reward and content farms do badly.

**But only 19 pairs currently have a rule.** So the page set has three tiers and
the difference must be visible on the page:

| Tier                  | Count    | What the page says                                                                            |
| --------------------- | -------- | --------------------------------------------------------------------------------------------- |
| **Has a rule**        | 19       | The verdict, the reasoning, and the guidance (`AM/PM` or alternate nights)                    |
| **Has a family rule** | Many     | The answer derived from the two chemistry families, marked as general                         |
| **No rule**           | The rest | Say so. _"We do not have a specific answer for this pair"_ + what the two ingredients each do |

**Do not generate 1,653 pages of confident answers you do not have.** A thin
page that admits it is thin outranks a fabricated one and does not poison the
other 19.

### 9b. Page families to build

1. **`/can-i-use/[a]-and-[b]`** — the pair pages. 19 strong ones first, then
   family-derived. The 4 myth-busters are the best link bait on the site.
2. **`/pregnancy/[ingredient]`** — 13 pregnancy rules, and this is the
   highest-intent traffic in the category. Deferral copy on every one.
3. **`/ingredients/[active]`** — 58 pages. What it is, what it is commonly used
   for, what it does not go with, which concerns it addresses.
4. **`/concerns/[concern]`** — 16 pages, each mapping to real actives from
   `FOR_CONCERN`. "What actually works for large pores" and so on.
5. **`/routine/[skin-type]`** — the category term. Fewer pages, more competition,
   higher value.
6. **Sensitivity pages** — 12, e.g. "fragrance-free" as a _sensitivity_ rather
   than a virtue claim.

All of it is generated from the same seed data the app ships, so the site and
the app can never disagree — which is worth more than any individual page.

### 9c. FAQ / long-tail questions worth their own answer

- Can I use retinol and vitamin C together?
- Do vitamin C and niacinamide cancel each other out? _(a myth — say so)_
- What can I not use while pregnant?
- What order do I put my skincare on in?
- How do I start using a retinoid without wrecking my skin?
- How long until a product runs out?
- Does the order of skincare actually matter?

### 9d. Technical requirements

- **One `<h1>` per page**, matching the search intent, not the brand.
- **Schema.org**: `SoftwareApplication` on the home page, `FAQPage` on the FAQ
  and pair pages, `BreadcrumbList` on the generated families.
- **Titles** under 60 characters, leading with the question, not "Miko —".
- **Static generation.** These pages have no per-user state; render them at
  build time from the seed data.
- **Internal linking is the whole game**: every pair page links to both
  ingredient pages, every ingredient page links to its concerns and its pairs.
- **App Store link** on every page, one primary action.
- **No dark patterns**: no fake countdowns, no invented review counts, no
  fabricated testimonials. There are no users yet — leave the social-proof
  section out rather than inventing it.

---

## 10. What the site must never do

Collected because each of these is a decision taken inside the product, and a
marketing page is where they get quietly reversed.

1. **No outcome claims.** Never that a product or routine clears acne, prevents
   wrinkles, or is safe for anyone. Compatibility and composition only.
2. **No "toxic", "clean" or "chemical-free".** Contradicts the app.
3. **No claim of citations, review or clinical backing** until the review pass
   lands. See §4.
4. **No fabricated proof** — testimonials, ratings, download counts, press
   logos, "as recommended by". None of it exists yet.
5. **No brand recommendations.** Miko deliberately suggests ingredients and
   product types, never brands, so it can never look commission-shaped. The site
   inherits that.
6. **No implication that scanning works offline.** It needs a connection;
   everything else does not.
7. **No promise of backup or sync.** There is none, and a landing page implying
   one converts into a support burden and a one-star review.
8. **No "AI-powered" as the hero claim.** The AI is how it works, not why anyone
   should care. Lead with what they get.

---

## Notes for whoever builds it

- Take colours, fonts, the concern list, the active list and the rules from the
  repo rather than retyping them. `src/theme.ts`, `src/domain/concerns.ts`,
  `src/domain/sensitivities.ts`, `src/data/seed/`.
- The App Store screenshot compositions already exist and share this visual
  system — reuse those frames rather than commissioning new mockups.
- §4's warning and §10.3 are the same point twice on purpose. It is the one that
  a copywriter will unknowingly break, because "cited" is the obvious thing to
  claim about a table of rules.
