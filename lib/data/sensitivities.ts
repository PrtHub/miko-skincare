import { SkinSensitivity } from "../types";

export const SENSITIVITIES_LIST: SkinSensitivity[] = [
  {
    id: "sens-fragrance",
    slug: "fragrance-essential-oils",
    name: "Fragrance & Essential Oils",
    seoTitle: "Fragrance Sensitivity in Skincare: Guide | Miko",
    tagline: "Cutaneous type IV contact allergy and volatile aromatic allergen pathways.",
    description:
      "A clinical analysis of volatile aroma compounds, terpenes, and synthetic perfumes that trigger delayed-type contact hypersensitivity and neurovascular flushing.",
    commonInci: [
      "Fragrance / Parfum",
      "Linalool",
      "Limonene",
      "Geraniol",
      "Citronellol",
      "Eugenol",
      "Lavandula Angustifolia (Lavender) Oil",
      "Melaleuca Alternifolia (Tea Tree) Leaf Oil",
      "Citrus Aurantium Dulcis (Orange) Peel Oil",
      "Eucalyptus Globulus Leaf Oil",
    ],
    biologicalMechanism:
      "Volatile aromatic constituents are low-molecular-weight haptens. When exposed to ambient air and skin surface sebum, terpenes (such as limonene and linalool) oxidize into reactive hydroperoxides. These hydroperoxides penetrate the stratum corneum and bond with endogenous carrier proteins, forming full antigens that trigger CD4+ and CD8+ T-lymphocyte activation (Type IV cell-mediated hypersensitivity).",
    reactionSymptoms: [
      "Perioral or periorbital erythematous patches and itchy micro-papules",
      "Subjective burning, stinging, or heat sensation within minutes of application",
      "Delayed contact dermatitis appearing 24 to 72 hours following exposure",
      "Exacerbation of underlying rosacea-like flushing and telangiectasia",
    ],
    toleratedAlternatives: [
      "100% Fragrance-free formulations (certified without masking fragrances)",
      "Soothing botanical extracts purified of volatile aromatic fractions (e.g., purified Madecassoside, Asiaticoside)",
      "Oat-derived colloidal beta-glucan and avenanthramides",
      "Pharmaceutical-grade synthetic barrier humectants (Glycerin, Ectoin, Panthenol)",
    ],
    labelReadingTip:
      "Scrutinize the bottom 5 to 10 lines of the INCI declaration. Terms like 'Lavandula', 'Citrus', 'Pelargonium', or 'Eucalyptus' denote unrefined essential oils containing dozens of volatile allergenic terpenes even when labeled 'natural' or 'clean'.",
    relatedActives: ["centella", "ceramides", "azelaic-acid"],
  },
  {
    id: "sens-alcohol",
    slug: "denatured-alcohol",
    name: "Denatured Alcohol & Simple Alcohols",
    seoTitle: "Denatured Alcohol in Skincare: When to Avoid | Miko",
    tagline: "Cutaneous lipid extraction and membrane protein denaturation dynamics.",
    description:
      "An evaluation of low-molecular-weight short-chain alcohols used for quick-drying finishes, penetration enhancement, and sebum stripping.",
    commonInci: [
      "Alcohol Denat.",
      "SD Alcohol 40-B",
      "Isopropyl Alcohol",
      "Ethanol",
      "Ethyl Alcohol",
      "Methanol",
    ],
    biologicalMechanism:
      "Short-chain simple alcohols possess high volatility and polar-nonpolar solvency. At concentrations exceeding 5–10%, they extract and solubilize the physiological intercellular lipids (ceramides, cholesterol, free fatty acids) that form the stratum corneum lamellae. This lipid leaching disrupts the permeability barrier, escalates transepidermal water loss (TEWL), and triggers compensatory sebaceous hyper-secretion.",
    reactionSymptoms: [
      "Immediate superficial skin tightness and dehydration crepe-lines",
      "Accentuated stinging upon subsequent application of mild water-based hydrators",
      "Paradoxical midday rebound oiliness as follicles attempt to replenish stripped lipids",
      "Accelerated desquamation and dry, flaky patches on thin facial zones",
    ],
    toleratedAlternatives: [
      "Long-chain fatty alcohols (Cetyl Alcohol, Cetearyl Alcohol, Stearyl Alcohol) which are emollient, non-drying barrier lipids",
      "Aqueous solvent bases using Propanediol, Butylene Glycol, or Isopentyldiol",
      "Glycerin-rich water fluids that evaporate smoothly without lipid extraction",
    ],
    labelReadingTip:
      "Do not confuse simple drying alcohols with fatty alcohols. Cetearyl Alcohol and Cetyl Alcohol are solid wax emollients that nourish the skin barrier. Avoid formulas where 'Alcohol Denat.' appears within the first 6 ingredients.",
    relatedActives: ["ceramides", "hyaluronic-acid"],
  },
  {
    id: "sens-malassezia",
    slug: "malassezia-fungal-acne",
    name: "Malassezia (Pityrosporum Folliculitis)",
    seoTitle: "Malassezia Fungal Acne Skincare Guide | Miko",
    tagline: "Lipid carbon-chain length restrictions and fungal biofilm management.",
    description:
      "A targeted formulation strategy for skin vulnerable to opportunistic Malassezia yeast overgrowth, commonly misdiagnosed as standard acne vulgaris.",
    commonInci: [
      "Polysorbate 20, 40, 60, 80",
      "PEG-40 Hydrogenated Castor Oil",
      "Glyceryl Stearate / Glyceryl Oleate",
      "Isopropyl Palmitate / Isopropyl Myristate",
      "Oleic Acid, Stearic Acid, Palmitic Acid, Lauric Acid",
      "Fermented Galactomyces / Saccharomyces Filtrates",
      "Triglyceride plant oils (Olive Oil, Rosehip Oil, Argan Oil, Jojoba Oil)",
    ],
    biologicalMechanism:
      "Malassezia species are lipid-dependent, dimorphic fungal yeasts that naturally colonize the human infundibulum. Because they lack fatty acid synthase enzymes, they secrete extracellular lipases to cleave external triglycerides containing carbon-chain lengths between C11 and C24. Exogenous lipids in this chain range fuel explosive yeast proliferation, prompting follicular inflammation and monomorphic itchy papulopustules.",
    reactionSymptoms: [
      "Monomorphic, dome-shaped papules or pustules clustered along the forehead, hairline, and jawline",
      "Pronounced pruritus (itching), particularly exacerbated by sweat, heat, or humidity",
      "Absence of open comedones (blackheads) typical of conventional bacterial acne",
      "Resistance or acute flare-ups when treated with traditional benzoyl peroxide or heavy moisturizers",
    ],
    toleratedAlternatives: [
      "Pure 100% Squalane (a saturated triterpene hydro-carbon that Malassezia cannot metabolize)",
      "Caprylic/Capric Triglyceride (MCT oil containing pure C8 and C10 fatty acid esters)",
      "Mineral Oil and high-purity Petrolatum",
      "Active ketoconazole, zinc pyrithione, sulfur, and azelaic acid solutions",
    ],
    labelReadingTip:
      "Check all esters, emulsifiers, and fatty acids. Any ingredient ending in '-ate' (such as Ethylhexyl Palmitate or Glyceryl Stearate) contains a carbon backbone that may feed Malassezia lipases unless verified as pure C8/C10 or squalane.",
    relatedActives: ["azelaic-acid", "aha-bha"],
  },
  {
    id: "sens-chemical-sunscreen",
    slug: "chemical-sunscreen-filters",
    name: "Organic (Chemical) Sunscreen Filters",
    seoTitle: "Chemical Sunscreen Sensitivity Guide | Miko",
    tagline: "Photochemical degradation, transient receptor excitation, and ocular stinging.",
    description:
      "A clinical breakdown of ocular stinging, photo-contact dermatitis, and heat sensations linked to older organic ultraviolet absorbers.",
    commonInci: [
      "Oxybenzone (Benzophenone-3)",
      "Avobenzone (Butyl Methoxydibenzoylmethane)",
      "Octinoxate (Ethylhexyl Methoxycinnamate)",
      "Homosalate",
      "Octocrylene",
      "Ensulizole (Phenylbenzimidazole Sulfonic Acid)",
    ],
    biologicalMechanism:
      "Organic filters absorb photon energy and convert UV radiation into thermal heat. Certain legacy aromatic ketones (especially Oxybenzone and un-stabilized Avobenzone) can photo-degrade under sunlight, creating free-radical intermediates and reactive haptens. Furthermore, low-molecular-weight filters migrate easily across the peri-orbital rim, causing transient receptor potential (TRPV1) excitation on ocular mucosal membranes.",
    reactionSymptoms: [
      "Intense lacrimation, burning, and ocular stinging when sunscreen migrates toward the eyes",
      "Sensation of heat and acute flushing across the cheeks within 20 minutes of sun exposure",
      "Photo-allergic papular eruptions occurring exclusively on sun-exposed zones",
      "Periorbital swelling and contact blepharitis",
    ],
    toleratedAlternatives: [
      "Non-nano Zinc Oxide (broad-spectrum physical reflector that calms cutaneous erythema)",
      "Titanium Dioxide (mineral filter offering high UVB and short-UVA scattering)",
      "Modern broad-spectrum photostable triazine/benzotriazole filters (Tinosorb S, Tinosorb M, Uvinul A Plus) where commercially available",
    ],
    labelReadingTip:
      "If you experience eye stinging or heat sensations from sunscreens, look for '100% Mineral' or 'Zinc Oxide only' on the front panel, and verify the absence of Avobenzone and Octocrylene in the active ingredient panel.",
    relatedActives: ["ceramides", "centella"],
  },
  {
    id: "sens-sulfates",
    slug: "sulfate-surfactants",
    name: "Sulfate Surfactants & Harsh Detergents",
    seoTitle: "Sulfate Surfactants & Skin Barrier Damage | Miko",
    tagline: "Protein denaturing, critical micelle concentration, and intercellular lipid wash-out.",
    description:
      "A toxicological assessment of high-charge anionic detergents that disrupt the stratum corneum structure and alter the cutaneous acid mantle.",
    commonInci: [
      "Sodium Lauryl Sulfate (SLS)",
      "Sodium Laureth Sulfate (SLES)",
      "Ammonium Lauryl Sulfate (ALS)",
      "Sodium Coco-Sulfate",
      "Sodium C14-16 Olefin Sulfonate",
    ],
    biologicalMechanism:
      "Anionic surfactants with small hydrophilic headgroups penetrate deep into the stratum corneum. Below and near their critical micelle concentration, monomeric surfactant molecules insert into the intercellular lipid lamellae, solubilizing ceramides and cholesterol. Simultaneously, they bind electrostatically to keratin filaments, causing protein denaturation, cellular swelling, and chronic barrier breakdown.",
    reactionSymptoms: [
      "Squeaky-clean sensation immediately after washing, followed by severe tautness",
      "Micro-flaking, peeling, and loss of skin elasticity within 15 minutes of cleansing",
      "Increased baseline skin pH (shifting from physiological 4.5–5.5 up to 7.0–8.5)",
      "Heightened susceptibility to bacterial colonization and irritant contact dermatitis",
    ],
    toleratedAlternatives: [
      "Non-ionic alkyl polyglucosides (Coco-Glucoside, Decyl Glucoside, Lauryl Glucoside)",
      "Amphoteric betaines (Cocamidopropyl Betaine)",
      "Amino-acid-based acyl taurates and glycinates (Sodium Cocoyl Glycinate, Sodium Methyl Cocoyl Taurate)",
      "Soap-free conditioning cleansing milks and hydrophilic cleansing oils",
    ],
    labelReadingTip:
      "Do not rely on 'sulfate-free' marketing claims without checking the INCI list. Some formulations replace SLS with 'Sodium C14-16 Olefin Sulfonate', which can exert comparable anionic drying potential on sensitive skin barriers.",
    relatedActives: ["ceramides", "centella", "hyaluronic-acid"],
  },
  {
    id: "sens-astringents",
    slug: "drying-clays-astringents",
    name: "Drying Clays & Tannin Astringents",
    seoTitle: "Astringents & Drying Clays: Barrier Effects | Miko",
    tagline: "Capillary dehydration, protein precipitation, and transepidermal water stripping.",
    description:
      "An analysis of high-tannin botanical distillates and mineral clay masks that induce superficial protein contraction and excessive surface moisture loss.",
    commonInci: [
      "Hamamelis Virginiana (Witch Hazel) Water",
      "Bentonite",
      "Kaolin (in high-concentration unbuffered clay masks)",
      "Alum (Potassium Alum)",
      "Mentha Piperita (Peppermint) Leaf Extract",
      "Melaleuca Alternifolia Leaf Distillate",
    ],
    biologicalMechanism:
      "Astringents contain polyphenolic tannins that cross-link and precipitate superficial stratum corneum proteins, causing an acute sensation of skin contraction or 'pore shrinking'. Concurrently, absorbent mineral clays exert strong capillary suction that extracts both unbound surface moisture and structured bound water from corneocytes. Prolonged contact dehydrates keratin bundles and fractures the lipid mantle.",
    reactionSymptoms: [
      "Immediate extreme tightness, cracking sensations, and superficial redness after clay dries completely",
      "Exaggerated sebum rebound within 3 to 6 hours as the sebaceous glands attempt barrier defense",
      "Intense burning when applying subsequent gentle serums or moisturizers",
      "Persistent dull, papery texture with micro-creping around mouth and eyes",
    ],
    toleratedAlternatives: [
      "Glycerin-buffered hydrating masks containing colloidal clay (<10%) combined with emollient oils",
      "Enzyme-based exfoliants (Papain, Bromelain) that dissolve dead corneocytes without moisture suction",
      "Low-strength Salicylic acid fluid serums that clear sebum without requiring physical clay absorption",
    ],
    labelReadingTip:
      "If using clay masks, never allow them to dry to the cracked, chalky stage. Wash off while the clay is still slightly pliable and damp, and immediately seal with a humectant and ceramide emulsion.",
    relatedActives: ["ceramides", "hyaluronic-acid", "aha-bha"],
  },
];

export function getSensitivityBySlug(slug: string): SkinSensitivity | undefined {
  return SENSITIVITIES_LIST.find((s) => s.slug === slug || s.id === slug);
}
