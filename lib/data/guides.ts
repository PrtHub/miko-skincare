import { GuideArticle } from "../types";

export const GUIDES_LIST: GuideArticle[] = [
  {
    id: "guide-start-retinoids",
    slug: "how-to-start-retinoids-without-irritation",
    title: "How to Introduce a Retinoid Without Skin Barrier Stinging",
    seoTitle: "How to Start Retinoids Without Irritation | Miko",
    description:
      "A structured 6-week acclimation protocol for introducing retinol and retinaldehyde, including frequency ramping and the sandwich buffering method.",
    category: "Starting Actives",
    level: "Beginner",
    publishedAt: "2026-09-01",
    updatedAt: "2026-09-09",
    readTime: "8 min read",
    summary:
      "Introducing a topical retinoid is the single most effective intervention for cellular renewal, but rapid introduction triggers retinoid dermatitis in up to 80% of users. This protocol outlines a progressive 6-week acclimation schedule, buffering techniques, and active contraindications.",
    keyTakeaways: [
      "Begin with twice-weekly evening applications separated by at least 72 hours.",
      "Buffer with a ceramide-rich moisturizer before or after the retinoid to moderate transcutaneous absorption.",
      "Completely pause direct chemical exfoliants (glycolic, lactic, salicylic acid) during the first 4 weeks.",
      "Daily broad-spectrum sunscreen is non-negotiable because cellular renewal thins the outermost stratum corneum.",
    ],
    recommendedActives: ["retinol", "ceramides", "hyaluronic-acid"],
    relatedPairs: ["retinol-and-glycolic-acid", "ceramides-and-retinol", "retinol-and-niacinamide"],
    commonMistakes: [
      "Applying to damp skin immediately after cleansing (water increases skin permeability and drives rapid retinoid flux, spiking stinging).",
      "Using every night from week one under the assumption that faster peeling produces faster results.",
      "Adding an AHA toner on 'off nights' before baseline retinoid tolerance is established.",
      "Applying around the immediate peri-orbital eye contour or nasal ala creases where skin is thinnest.",
    ],
    steps: [
      {
        stepNumber: "01",
        title: "The Wash and Complete Dry-Down",
        timing: "PM Routine · Step 1",
        instructions:
          "Wash your face with a non-foaming, physiological-pH cleanser. Pat gently with a clean towel and wait 10 to 15 full minutes until skin is completely dry down to touch.",
        rationale:
          "Water increases cutaneous hydration and loosens intercellular corneocyte junctions, allowing retinoid molecules to flood into epidermal layers at an uncontrolled rate.",
        recommendedTextures: ["Water-rinsed aqueous gel or gentle cleansing milk"],
        watchOutFor: "Avoid cleansing with exfoliating silicone brushes or abrasive washcloths.",
      },
      {
        stepNumber: "02",
        title: "Apply the Pea-Sized Dose",
        timing: "PM Routine · Step 2 (Twice Weekly)",
        instructions:
          "Dispense a single pea-sized amount of retinoid (approximately 0.25ml) onto your fingertip. Dot onto forehead, cheeks, and chin, then smooth evenly across the face, avoiding the lower eye rim and lip corners.",
        rationale:
          "More product does not yield greater cellular efficacy; it simply increases unused compound pooling in creases and triggering localized retinoid dermatitis.",
        recommendedTextures: ["Light lotion, anhydrous squalane base, or encapsulated serum"],
        watchOutFor: "Do not double-pump to cover the neck until facial tolerance is fully established.",
      },
      {
        stepNumber: "03",
        title: "The Barrier Buffer (The Sandwich Method)",
        timing: "PM Routine · Step 3",
        instructions:
          "Wait 2 minutes, then layer a rich moisturizer containing ceramides, cholesterol, and fatty acids. If your skin is historically reactive, apply a thin layer of moisturizer *before* the retinoid as well.",
        rationale:
          "Lipid lamellae replenishment offsets the temporary lag in endogenous ceramide synthesis, curbing transepidermal water loss while the retinoid signals cellular turnover.",
        recommendedTextures: ["Barrier-restoring lipid emulsion or ceramide cream"],
      },
      {
        stepNumber: "04",
        title: "The 6-Week Progression Schedule",
        timing: "Weekly Cadence",
        instructions:
          "Weeks 1–2: Apply Tuesday and Friday evening only. Weeks 3–4: Apply Monday, Wednesday, Friday. Weeks 5+: Progress to alternate evenings if no flaking or persistent redness is present.",
        rationale:
          "Epidermal cellular turnover requires roughly 28 days to adapt. A staggered cadence allows corneocyte proliferation and desquamation to sync gracefully.",
        recommendedTextures: ["Staggered PM schedule"],
        watchOutFor: "If stinging occurs when applying plain water or gentle moisturizer, drop back one stage for a full week.",
      },
    ],
  },
  {
    id: "guide-pregnancy-audit",
    slug: "the-complete-pregnancy-skincare-audit",
    title: "The Complete Skincare Routine Audit for Pregnancy",
    seoTitle: "Pregnancy Skincare Routine & Ingredient Audit | Miko",
    description:
      "How to audit your bathroom shelf when pregnant: what ingredients to pause, which gentle actives to keep, and physician deferrals.",
    category: "Life-State",
    level: "Intermediate",
    publishedAt: "2026-08-25",
    updatedAt: "2026-09-08",
    readTime: "7 min read",
    summary:
      "Finding out you are pregnant shouldn't mean throwing away your entire bathroom shelf in panic. Most hydrators, antioxidants, and cleansers are completely fine to continue. This guide walks through the precise active ingredients that dermatologists and obstetricians recommend pausing, and the permitted alternatives to introduce.",
    keyTakeaways: [
      "All prescription and over-the-counter vitamin A derivatives (retinol, retinal, tretinoin, adapalene) must be paused.",
      "High-concentration salicylic acid peels (>2%) and hydroquinone carry systemic absorption concerns and should be suspended.",
      "Azelaic acid, hyaluronic acid, ceramides, and niacinamide are the gold-standard permitted alternatives.",
      "Physical mineral sunscreens (Zinc Oxide, Titanium Dioxide) provide non-systemic UV shielding.",
    ],
    recommendedActives: ["ceramides", "hyaluronic-acid", "niacinamide"],
    relatedPairs: [],
    commonMistakes: [
      "Discarding all moisturizers and cleansers because of generic fear of 'chemicals'.",
      "Treating pregnancy acne with high-dose benzoyl peroxide or oral supplements without obstetrician sign-off.",
      "Skipping daily sunscreen because of confusion over UV filters; daily UV defense prevents melasma ('mask of pregnancy').",
      "Assuming natural essential oils are benign (many aromatic plant oils contain contact allergens and volatile terpenes).",
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Audit and Quarantine Retinoids",
        timing: "Immediate Action",
        instructions:
          "Examine every night serum, eye cream, and treatment oil for INCI names: Retinol, Retinaldehyde, Hydroxypinacolone Retinoate, Retinyl Palmitate, Tretinoin, Adapalene, Tazarotene. Place these in storage.",
        rationale:
          "Systemic retinoids are documented teratogens. While topical absorption of OTC retinol is low, dermatological consensus (ACOG guidelines) unanimously recommends complete suspension out of an abundance of caution.",
        recommendedTextures: ["Move bottles to an off-shelf storage box"],
        watchOutFor: "Confirm anything medical with your doctor or OB-GYN.",
      },
      {
        stepNumber: "02",
        title: "Replace with Azelaic Acid for Blemishes and Tone",
        timing: "AM or PM Routine",
        instructions:
          "Introduce Azelaic Acid at 10% concentration. It normalizes follicular desquamation, curbs micro-bacterial flora, and down-regulates hyperactive melanocytes.",
        rationale:
          "Pharmacokinetic studies show systemic absorption is under 4%, with no teratogenicity observed in clinical literature. It is the dermatologist-recommended alternative for gestational acne and melasma.",
        recommendedTextures: ["Light gel or emulsion suspension"],
      },
      {
        stepNumber: "03",
        title: "Reinforce Barrier Lipids and Endogenous Hydrators",
        timing: "AM & PM",
        instructions:
          "Shift your core routine to barrier-replenishing ceramides, squalane, glycerin, and multi-molecular hyaluronic acid.",
        rationale:
          "Hormonal shifts during pregnancy often increase cutaneous sensitivity and transepidermal water loss. Endogenous physiological lipids reinforce barrier resilience without systemic absorption.",
        recommendedTextures: ["Aqueous hyaluronic serum followed by ceramide lipid cream"],
      },
      {
        stepNumber: "04",
        title: "Commit to Mineral UV Defense Daily",
        timing: "Every Morning as Final Step",
        instructions:
          "Apply a broad-spectrum mineral sunscreen formulated with pure Zinc Oxide (15% to 20%) every morning.",
        rationale:
          "Elevated estrogen and progesterone stimulate melanogenesis, making pregnant skin exceptionally prone to persistent chloasma / melasma. Mineral filters sit on the surface without transcutaneous absorption.",
        recommendedTextures: ["Fluid emulsion with Zinc Oxide"],
      },
    ],
  },
  {
    id: "guide-chemical-exfoliation",
    slug: "chemical-exfoliation-masterclass-aha-vs-bha-vs-pha",
    title: "Chemical Exfoliation Demystified: AHA vs BHA vs PHA",
    seoTitle: "AHA vs BHA vs PHA Chemical Exfoliation Guide | Miko",
    description:
      "The differences in molecular weight, lipid solubility, and skin tolerance between glycolic, salicylic, and polyhydroxy acids.",
    category: "Routine Architecture",
    level: "Intermediate",
    publishedAt: "2026-08-15",
    updatedAt: "2026-09-06",
    readTime: "7 min read",
    summary:
      "Physical scrubs cause irregular micro-tears on delicate stratum corneum surfaces. Chemical exfoliants loosen corneocyte desmosomes uniformly. However, choosing the wrong acid class or over-frequency causes severe acid mantle disruption.",
    keyTakeaways: [
      "AHAs (glycolic, lactic) are water-soluble and exfoliate the epidermal surface.",
      "BHA (salicylic acid) is lipid-soluble and penetrates deep into sebaceous follicular ducts.",
      "PHAs (gluconolactone, lactobionic acid) have larger molecular structures, offering slower, gentler surface renewal.",
      "Never layer direct chemical exfoliants concurrently with pure L-ascorbic acid or retinoids in the same slot.",
    ],
    recommendedActives: ["aha-bha", "centella", "ceramides"],
    relatedPairs: ["retinol-and-glycolic-acid", "vitamin-c-and-glycolic-acid", "peptides-and-acids"],
    commonMistakes: [
      "Using direct acid toners daily morning and evening like a standard hydrator.",
      "Combining AHA/BHA exfoliants with prescription retinoids on the same evening.",
      "Assuming high concentration percentage is superior without checking the formula pH.",
      "Failing to wear daily sunscreen (AHAs increase cutaneous photosensitivity by up to 50%).",
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Identify Your Target Cutaneous Pathway",
        timing: "Assessment Step",
        instructions:
          "For congested, oil-prone pores and blackheads: select Salicylic Acid (BHA). For sun-damaged, dull, or uneven surface texture: select Glycolic or Lactic Acid (AHA). For reactive, easily flushed skin: select Gluconolactone (PHA).",
        rationale:
          "Lipid solubility dictates duct penetration. Salicylic acid can diffuse through sebaceous sebum; glycolic acid operates strictly in the aqueous extracellular matrix.",
        recommendedTextures: ["Aqueous liquid toner or light gel solution"],
      },
      {
        stepNumber: "02",
        title: "Schedule on Alternate Evenings",
        timing: "PM Routine · 1 to 2 Evenings Weekly",
        instructions:
          "Apply your chemical exfoliant only 1 to 2 evenings per week. Reserve other evenings for barrier repair (ceramides, peptides) or retinoid acclimation.",
        rationale:
          "Desmosomal shedding takes 24 to 48 hours to complete. Daily application prevents new corneocytes from maturing, leading to an over-exfoliated, glass-like sensitized barrier.",
        recommendedTextures: ["Cotton-applied or fingertip-pressed aqueous fluid"],
      },
      {
        stepNumber: "03",
        title: "Follow Immediately with Soothing Humectants",
        timing: "PM Routine · Immediately Following",
        instructions:
          "Allow 60 seconds for the acid formulation to contact skin, then apply humectants (hyaluronic acid, panthenol) and soothing agents (centella, ectoin).",
        rationale:
          "Humectants cushion newly exposed corneocytes and restore surface osmolyte balance without interfering with the acid's desmosomal signaling.",
        recommendedTextures: ["Aqueous serum or light emulsion with Madecassoside"],
      },
    ],
  },
  {
    id: "guide-minimalist-routine",
    slug: "building-a-minimalist-skincare-routine",
    title: "The Minimalist Skincare Routine: Three Essential Steps",
    seoTitle: "Minimalist Skincare Routine: 3 Essential Steps | Miko",
    description:
      "How to assemble a functional, non-irritating 3-bottle routine before adding targeted active serums.",
    category: "Routine Architecture",
    level: "Beginner",
    publishedAt: "2026-08-05",
    updatedAt: "2026-09-04",
    readTime: "5 min read",
    summary:
      "The modern skincare market encourages ten-step routines that compound irritation and obscure which product is actually doing what. The biological truth is that skin requires only three physiological foundations: gentle cleansing, lipid barrier restoration, and broad-spectrum UV shielding. Everything else is optional optimization.",
    keyTakeaways: [
      "Master the core trio (cleanser, barrier moisturizer, broad-spectrum sunscreen) before introducing potent bioactives.",
      "A routine that does not irritate the skin is 100x more effective than an aggressive routine that causes frequent dermatitis pauses.",
      "Cleansing should never leave skin feeling 'squeaky clean' (squeak indicates stripped intercellular lipids).",
      "Sunscreen is the non-negotiable step that protects all other dermatological gains.",
    ],
    recommendedActives: ["ceramides", "hyaluronic-acid"],
    relatedPairs: [],
    commonMistakes: [
      "Buying five active serums simultaneously before having a reliable, gentle daily moisturizer.",
      "Switching products every two weeks before the 28-day epidermal renewal cycle can complete.",
      "Double-cleansing with harsh foaming washes that dissolve native ceramides.",
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Physiological Gentle Cleanser",
        timing: "AM (Optional Rinse) & PM (Strict)",
        instructions:
          "Use a surfactant system buffered to pH 5.0–5.5. In the morning, a plain lukewarm water splash is often sufficient if night products were light.",
        rationale:
          "High-pH alkaline soaps (pH 8–10) swell keratin and denature stratum corneum enzymes, leading to chronic dry desquamation.",
        recommendedTextures: ["Non-foaming cream, milk, or gentle gel cleanser"],
      },
      {
        stepNumber: "02",
        title: "Barrier-Restoring Lipid Moisturizer",
        timing: "AM & PM",
        instructions:
          "Apply an emulsion or cream formulated with physiological ceramides, fatty acids, and cholesterol. Smooth over slightly damp skin.",
        rationale:
          "Restores intercellular lamellar lipid sheets, curtails transepidermal water loss (TEWL), and prevents environmental particulate adhesion.",
        recommendedTextures: ["Lipid lotion in AM, richer cream in PM"],
      },
      {
        stepNumber: "03",
        title: "Daily Photoprotective Sunscreen",
        timing: "Every Morning · Year Round",
        instructions:
          "Apply 1/4 teaspoon (approx. 1.25ml) across face and ears as the absolute final step of your morning skincare routine.",
        rationale:
          "Solar UVA and UVB radiation is responsible for 80% of preventable premature cutaneous aging, elastin degradation, and irregular hyperpigmentation.",
        recommendedTextures: ["Fluid emulsion SPF 30 to SPF 50+"],
      },
    ],
  },
  {
    id: "guide-layering-actives",
    slug: "layering-active-serums-am-pm-schedule",
    title: "How to Layer Active Serums: AM vs PM Schedules",
    seoTitle: "How to Layer Active Skincare Serums: AM/PM | Miko",
    description:
      "The complete tactical protocol for layering Vitamin C, Niacinamide, Retinoids, and Peptides across your weekly schedule.",
    category: "Routine Architecture",
    level: "Intermediate",
    publishedAt: "2026-07-28",
    updatedAt: "2026-09-02",
    readTime: "7 min read",
    summary:
      "Having five active serums in your cabinet is useless if you don't know which slot they belong in. Layering incompatible chemistries can neutralize potency or cause sudden barrier collapse. This guide maps out the standard AM/PM active allocation schedule used by cosmetic chemists.",
    keyTakeaways: [
      "AM slot belongs to antioxidants (Vitamin C, Niacinamide) and daily UV protection.",
      "PM slot belongs to cellular renewal bioactives (Retinoids, AHA/BHA direct acids).",
      "Always apply from thinnest viscosity (watery essences) to thickest viscosity (lipid creams).",
      "Give low-pH serums 60 seconds to absorb before applying higher-pH emulsions.",
    ],
    recommendedActives: ["vitamin-c", "retinol", "niacinamide", "peptides"],
    relatedPairs: ["vitamin-c-and-niacinamide", "retinol-and-glycolic-acid", "retinol-and-niacinamide"],
    commonMistakes: [
      "Applying pure L-ascorbic acid and retinol at the exact same moment in the evening.",
      "Applying face oil before a watery active serum (oil forms an occlusive film that blocks aqueous actives).",
      "Applying sunscreen and immediately buffing a moisturizer over it (disrupts the uniform UV filter film).",
    ],
    steps: [
      {
        stepNumber: "01",
        title: "The Morning Antioxidant Shield",
        timing: "AM Routine · Post-Cleanse",
        instructions:
          "Cleanse, apply L-Ascorbic Acid or antioxidant serum, followed by Niacinamide, light hydrator, and finish with Sunscreen.",
        rationale:
          "Antioxidants scavenge reactive oxygen species generated by daylight UV radiation and particulate air pollution, complementing sunscreen filters.",
        recommendedTextures: ["Low-viscosity L-ascorbic fluid followed by light niacinamide gel"],
      },
      {
        stepNumber: "02",
        title: "The Midday Reapplication Anchor",
        timing: "Midday · SPF Only",
        instructions:
          "Do not apply serums or cleansers. Reapply broad-spectrum sunscreen if exposed to direct outdoor daylight.",
        rationale:
          "UV filters degrade under solar irradiation and sweat. Midday in Miko exists solely for reapplication.",
        recommendedTextures: ["Sunscreen stick, fluid emulsion, or mineral cushion"],
      },
      {
        stepNumber: "03",
        title: "The Evening Renewal Slot",
        timing: "PM Routine · Alternate Nights",
        instructions:
          "Evening A: Retinoid + Ceramide Moisturizer. Evening B: Barrier Hydration (Peptides, Centella, Ceramides). Evening C: Chemical Exfoliant (AHA/BHA) + Barrier Moisturizer.",
        rationale:
          "Nighttime is when cutaneous blood flow increases, transepidermal water loss peaks, and cellular repair signaling activates.",
        recommendedTextures: ["Viscous treatment serum followed by occlusive lipid cream"],
      },
    ],
  },
];

export function getGuideBySlug(slug: string): GuideArticle | undefined {
  return GUIDES_LIST.find((g) => g.slug === slug || g.id === slug);
}
