import { PregnancyIngredient } from "../types";

export const PREGNANCY_INGREDIENTS: PregnancyIngredient[] = [
  {
    slug: "retinol",
    name: "Retinoids & Topical Vitamin A",
    commonInci: [
      "Retinol",
      "Retinaldehyde",
      "Tretinoin",
      "Adapalene",
      "Hydroxypinacolone Retinoate",
      "Tazarotene",
    ],
    status: "avoid",
    statusLabel: "Commonly Paused",
    summary:
      "All prescription and over-the-counter vitamin A derivatives are commonly advised against throughout pregnancy and lactation.",
    pharmacology:
      "Systemic retinoids (such as oral isotretinoin) are documented human teratogens known to cause retinoic acid embryopathy (craniofacial and cardiac anomalies). Although transdermal absorption of low-concentration over-the-counter retinol is relatively minimal, dermatological and obstetric consensus (including ACOG guidelines) unanimously recommends suspending all topical retinoids out of an abundance of caution.",
    alternatives: [
      "Bakuchiol (plant-derived meroterpene functional analog)",
      "Azelaic Acid 10%–15% (for cellular turnover and erythema)",
      "Glycolic Acid / Lactic Acid (in mild OTC concentrations)",
    ],
    deferralNotice:
      "Commonly advised against during pregnancy. Confirm anything medical with your doctor.",
  },
  {
    slug: "salicylic-acid",
    name: "Salicylic Acid (BHA)",
    commonInci: ["Salicylic Acid", "Beta-Hydroxy Acid", "Sodium Salicylate"],
    status: "watch",
    statusLabel: "Concentration Dependent",
    summary:
      "High-strength clinical chemical peels (>2%) and body-wide applications should be avoided. Rinse-off facial cleansers under 2% carry very low systemic absorption.",
    pharmacology:
      "Salicylic acid is chemically related to acetylsalicylic acid (aspirin). While high oral doses in late pregnancy carry risks of bleeding and premature closure of the ductus arteriosus, dermatological consensus distinguishes between high-percentage professional chemical peels (avoided) and daily low-concentration OTC face washes (minimal transcutaneous absorption).",
    alternatives: [
      "Azelaic Acid (clears follicular congestion with low systemic absorption)",
      "Lactic Acid (gentle alpha-hydroxy acid with larger molecular size)",
      "Mandelic Acid (lipophilic AHA with slow epidermal penetration)",
    ],
    deferralNotice:
      "Commonly advised against in high concentrations. Confirm anything medical with your doctor.",
  },
  {
    slug: "azelaic-acid",
    name: "Azelaic Acid",
    commonInci: ["Azelaic Acid", "Potassium Azeloyl Diglycinate"],
    status: "permitted",
    statusLabel: "Permitted & Recommended Alternative",
    summary:
      "The gold-standard active commonly recommended by dermatologists for managing pregnancy breakouts, rosacea, and melasma.",
    pharmacology:
      "Azelaic acid is a naturally occurring dicarboxylic acid produced by yeast on normal skin flora. Clinical pharmacokinetic data indicates systemic absorption is under 4%, with no teratogenicity observed in animal models. The American College of Obstetricians and Gynecologists (ACOG) considers it permitted for managing gestational acne and facial hyperpigmentation.",
    alternatives: [
      "Hyaluronic Acid (for moisture buffering)",
      "Centella Asiatica (for calming redness)",
    ],
    deferralNotice:
      "Generally considered compatible with pregnancy. Confirm anything medical with your doctor.",
  },
  {
    slug: "hyaluronic-acid",
    name: "Hyaluronic Acid & Polyols",
    commonInci: [
      "Sodium Hyaluronate",
      "Hydrolyzed Hyaluronic Acid",
      "Glycerin",
      "Polyglutamic Acid",
    ],
    status: "permitted",
    statusLabel: "Permitted & Endogenous",
    summary:
      "An endogenous humectant sugar molecule essential for maintaining skin hydration without systemic absorption.",
    pharmacology:
      "Hyaluronic acid is a native glycosaminoglycan naturally synthesized throughout human dermis and synovial fluid. Topically applied humectants act strictly in the superficial stratum corneum to bind atmospheric moisture. They carry zero systemic bioavailability and no developmental risks.",
    alternatives: [
      "Glycerin",
      "Ceramide complexes",
      "Squalane",
    ],
    deferralNotice:
      "Commonly permitted with non-systemic epidermal action. Confirm anything medical with your doctor.",
  },
  {
    slug: "benzoyl-peroxide",
    name: "Benzoyl Peroxide",
    commonInci: ["Benzoyl Peroxide"],
    status: "watch",
    statusLabel: "Consult Obstetrician",
    summary:
      "Topical preparations under 5% are frequently cleared by OB-GYNs for severe inflammatory acne, though cautious localized spot usage is favored.",
    pharmacology:
      "When applied to skin, benzoyl peroxide is almost entirely metabolized into benzoic acid (a normal, benign food additive) within the dermis and excreted unchanged via urine. Minimal systemic accumulation occurs. However, due to cutaneous irritation and individual sensitivities during pregnancy, many doctors recommend trialing azelaic acid first.",
    alternatives: [
      "Azelaic Acid (non-bleaching antimicrobial action)",
      "Sulfur ointments (gentle antimicrobial)",
      "Zinc PCA",
    ],
    deferralNotice:
      "Commonly advised to use under medical supervision. Confirm anything medical with your doctor.",
  },
  {
    slug: "hydroquinone",
    name: "Hydroquinone",
    commonInci: ["Hydroquinone", "Arbutin (derivative)"],
    status: "avoid",
    statusLabel: "Commonly Paused",
    summary:
      "A potent skin lightener that carries unusually high systemic absorption (up to 45%) through the cutaneous barrier.",
    pharmacology:
      "Unlike most topical cosmetics, hydroquinone demonstrates substantial transdermal bio-availability (approaching 35% to 45% absorption following topical application). Because substantial amounts enter maternal systemic circulation, obstetric and dermatological guidelines advise strict avoidance during pregnancy and lactation.",
    alternatives: [
      "Vitamin C (L-Ascorbic Acid)",
      "Niacinamide (Vitamin B3)",
      "Azelaic Acid (suppresses abnormal melanogenesis)",
    ],
    deferralNotice:
      "Commonly advised against during pregnancy. Confirm anything medical with your doctor.",
  },
];

export function getPregnancyIngredientBySlug(
  slug: string
): PregnancyIngredient | undefined {
  return PREGNANCY_INGREDIENTS.find((item) => item.slug === slug);
}
