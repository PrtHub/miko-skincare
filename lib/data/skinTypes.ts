import { SkinTypeRoutine } from "../types";

export const SKIN_TYPES_LIST: SkinTypeRoutine[] = [
  {
    id: "routine-oily-skin",
    slug: "oily-skin",
    skinType: "Oily Skin",
    seoTitle: "Skincare Routine for Oily Skin: AM & PM | Miko",
    tagline: "Sebum regulation and non-comedogenic hydration architecture.",
    description:
      "A clinical AM/PM framework designed to normalize sebaceous lipogenesis, dissolve follicular congestion, and maintain hydration without occlusive film formers.",
    characteristics: [
      "Persistent shiny surface across forehead, nose, and cheeks within 2 hours of washing",
      "Enlarged, visible follicular pores prone to oxidation and comedones",
      "High tolerance to chemical exfoliants and lipid-soluble actives",
      "Tendency to feel congested under rich creams or heavy plant oils",
    ],
    textureStrategy:
      "Aqueous solutions, non-viscous essences, water-gel hydrators, and ultra-fluid chemical or hybrid sunscreens. Avoid petrolatum, shea butter, and dense wax esters.",
    amSteps: [
      {
        order: "Step 01",
        category: "Cleanser",
        productType: "Low-pH Gentle Gel Cleanser",
        purpose: "Removes oxidized nighttime sebum without stripping essential stratum corneum ceramides.",
        texture: "Water-based gel",
      },
      {
        order: "Step 02",
        category: "Active Treatment",
        productType: "Niacinamide 2–5% Solution",
        purpose: "Down-regulates daytime sebaceous excretion and reduces pore dilation appearance.",
        texture: "Lightweight fluid",
      },
      {
        order: "Step 03",
        category: "Moisturizer (Optional)",
        productType: "Oil-Free Gel Hydrator",
        purpose: "Replenishes hyaluronic acid and glycerin without adding exogenous fatty acids.",
        texture: "Aqueous gel",
      },
      {
        order: "Step 04",
        category: "Sunscreen",
        productType: "Matte Fluid SPF 50+",
        purpose: "Broad-spectrum UV protection with sebum-absorbing silica or starch microspheres.",
        texture: "Ultra-fluid lotion",
      },
    ],
    pmSteps: [
      {
        order: "Step 01",
        category: "First Cleanse",
        productType: "Gentle Micellar Water or Cleansing Oil",
        purpose: "Dissolves waterproof sunscreen and sebum plugs via lipophilic attraction.",
        texture: "Micellar fluid",
      },
      {
        order: "Step 02",
        category: "Second Cleanse",
        productType: "Foaming Amino-Acid Cleanser",
        purpose: "Rinses away dissolved impurities while maintaining physiological skin pH (5.0–5.5).",
        texture: "Light foam",
      },
      {
        order: "Step 03",
        category: "Exfoliant / Active",
        productType: "Salicylic Acid 1–2% (BHA) or Retinoid",
        purpose: "Diffuses into sebaceous ducts to dissolve intra-pore keratin plugs; alternated with retinol.",
        texture: "Liquid / light emulsion",
      },
      {
        order: "Step 04",
        category: "Moisturizer",
        productType: "Ceramide-Ectoin Barrier Fluid",
        purpose: "Locks in hydration overnight without heavy occlusive waxes.",
        texture: "Weightless lotion",
      },
    ],
    middayRule:
      "Blot excess surface sebum with unpowdered cellulose sheets. Avoid layering powder or repeated cleansing, which triggers rebound oiliness.",
    weeklyActiveCadence:
      "BHA 2 to 3 nights weekly. Retinoid 3 to 4 nights weekly on alternate evenings. At least 1 rest evening reserved exclusively for barrier replenishment.",
    pitfallsToAvoid: [
      "Using aggressive high-pH sulfate bar soaps that strip lipids and trigger compensatory hyper-seborrhea",
      "Skipping moisturizer completely, which leads to stratum corneum dehydration beneath an oily film",
      "Layering multiple alcohol-heavy astringents that cause micro-inflammation and irritation",
    ],
    recommendedActives: ["niacinamide", "aha-bha", "retinol", "centella"],
  },
  {
    id: "routine-dry-skin",
    slug: "dry-skin",
    skinType: "Dry Skin",
    seoTitle: "Skincare Routine for Dry Skin: AM & PM | Miko",
    tagline: "Lamellar lipid replacement and transepidermal water barrier sealing.",
    description:
      "A restorative lipid-replenishing protocol structured to reinforce the stratum corneum with ceramides, cholesterol, and physiological free fatty acids.",
    characteristics: [
      "Minimal to zero visible sebum production throughout the day",
      "Frequent sensation of tightness, roughness, or superficial flaking",
      "Invisible or very small follicular pores",
      "Prone to micro-fissures and immediate stinging when barrier is disturbed",
    ],
    textureStrategy:
      "Cream cleansers, milky essences, lipid-dense emulsions, and occlusive creams containing squalane, shea butter, and physiological ceramide complexes.",
    amSteps: [
      {
        order: "Step 01",
        category: "Cleanser",
        productType: "Tepid Water Splash or Conditioning Milk",
        purpose: "Cleanses without stripping delicate surface lipids synthesized overnight.",
        texture: "Lotion / cream milk",
      },
      {
        order: "Step 02",
        category: "Hydration",
        productType: "Multi-Weight Hyaluronic Acid Essence",
        purpose: "Damp-skin humectant reservoir that binds water into dehydrated corneocytes.",
        texture: "Viscous essence",
      },
      {
        order: "Step 03",
        category: "Moisturizer",
        productType: "Ceramide 3:1:1 Barrier Cream",
        purpose: "Delivers physiological ratios of ceramides, cholesterol, and fatty acids to reconstruct bilayers.",
        texture: "Emollient cream",
      },
      {
        order: "Step 04",
        category: "Sunscreen",
        productType: "Nourishing Cream SPF 50+",
        purpose: "High broad-spectrum UV shielding formulated in a comforting lipid base.",
        texture: "Hydrating cream",
      },
    ],
    pmSteps: [
      {
        order: "Step 01",
        category: "First Cleanse",
        productType: "Lipid-Rich Cleansing Balm",
        purpose: "Melts sunscreen and particulate grime without emulsifier-induced moisture depletion.",
        texture: "Melting balm",
      },
      {
        order: "Step 02",
        category: "Second Cleanse",
        productType: "Gentle Hydrating Cream Cleanser",
        purpose: "Purifies the cutaneous surface while depositing conditioning polyols.",
        texture: "Non-foaming cream",
      },
      {
        order: "Step 03",
        category: "Active Treatment",
        productType: "Encapsulated Retinoid or Lactic Acid (Gentle AHA)",
        purpose: "Encapsulated slow-release retinol or high-molecular AHA for gentle non-stripping renewal.",
        texture: "Emulsion",
      },
      {
        order: "Step 04",
        category: "Barrier Seal",
        productType: "Deep Replenishing Ceramide Balm + Squalane",
        purpose: "Forms a breathable semi-occlusive layer to reduce nocturnal transepidermal water loss to near zero.",
        texture: "Rich lipid balm",
      },
    ],
    middayRule:
      "Mist with an electrolyte-glycerin thermal spray followed by a gentle press of ceramide cream if environmental HVAC creates tight sensations.",
    weeklyActiveCadence:
      "Gentle AHA (e.g. 5% Lactic or Mandelic Acid) once weekly. Retinoid buffered over moisturizer 2 nights weekly. Remaining nights dedicated to barrier nourishment.",
    pitfallsToAvoid: [
      "Applying hyaluronic acid to dry skin in low-humidity environments without an occlusive cream seal",
      "Using hot water in the shower or sink, which accelerates lipid wash-out",
      "Employing high-strength glycolic or salicylic peels without adequate baseline lipid reserves",
    ],
    recommendedActives: ["ceramides", "hyaluronic-acid", "centella", "peptides"],
  },
  {
    id: "routine-sensitive-reactive-skin",
    slug: "sensitive-reactive-skin",
    skinType: "Sensitive & Reactive Skin",
    seoTitle: "Skincare Routine for Sensitive Skin | Miko",
    tagline: "Neuro-sensory calming and minimalist barrier preservation.",
    description:
      "A clinical minimalist framework prioritizing low-irritancy thresholds, non-fragrance formulations, and neurovascular cytokine stabilizers.",
    characteristics: [
      "Frequent subjective stinging, burning, or itchiness upon product application",
      "Readily flushed or erythematous in response to temperature shifts, touch, or active ingredients",
      "Thin, vulnerable stratum corneum with heightened baseline permeability",
      "History of contact sensitization to preservatives, fragrances, or botanical oils",
    ],
    textureStrategy:
      "Short ingredient lists (<15 INCI components), unfragranced, fluid emulsions and calming balms. Strictly avoid drying alcohols, essential oils, and tingling astringents.",
    amSteps: [
      {
        order: "Step 01",
        category: "Cleanser",
        productType: "Tepid Water or Non-Foaming Cleansing Lotion",
        purpose: "Preserves baseline microflora and minimizes shear stress on sensitive nerve endings.",
        texture: "Gentle lotion",
      },
      {
        order: "Step 02",
        category: "Soothing Treatment",
        productType: "Centella Asiatica & Ectoin Serum",
        purpose: "Suppresses pro-inflammatory cytokines and cushions cell membranes from environmental stress.",
        texture: "Lightweight fluid",
      },
      {
        order: "Step 03",
        category: "Moisturizer",
        productType: "Hypoallergenic Ceramide Emulsion",
        purpose: "Restores barrier integrity with zero fragrance, parabens, or essential oils.",
        texture: "Soothing cream",
      },
      {
        order: "Step 04",
        category: "Sunscreen",
        productType: "100% Mineral Zinc Oxide SPF 50+",
        purpose: "Reflects UV rays without the heat or stinging sensations sometimes reported with organic filters.",
        texture: "Calming mineral cream",
      },
    ],
    pmSteps: [
      {
        order: "Step 01",
        category: "Cleanser",
        productType: "Ultra-Gentle Emollient Cleanser",
        purpose: "Gently lifts sunscreen without requiring abrasive washcloths or vigorous rubbing.",
        texture: "Conditioning milk",
      },
      {
        order: "Step 02",
        category: "Targeted Treatment",
        productType: "Azelaic Acid 10% (Suspension or Gel)",
        purpose: "Calms cutaneous microvascular reactivity and reduces erythema without acid-stinging.",
        texture: "Light suspension",
      },
      {
        order: "Step 03",
        category: "Barrier Recovery",
        productType: "Panthenol 5% & Madecassoside Balm",
        purpose: "Intensely accelerates epidermal re-epithelialization and dampens neuro-sensory feedback.",
        texture: "Protective balm",
      },
    ],
    middayRule:
      "Do not rub or aggressively re-apply products. If flushing occurs, cool the skin with a thermal water spray and avoid physical friction.",
    weeklyActiveCadence:
      "Azelaic acid 3 nights weekly. Introduce any new active in isolation with a 72-hour patch test behind the ear. Never introduce multiple new products concurrently.",
    pitfallsToAvoid: [
      "Using products marketed as 'natural' that contain fragrant essential oils (lavender, tea tree, citrus peel)",
      "Layering low-pH direct acids (pH < 3.5) before baseline barrier recovery is established",
      "Using mechanical cleansing brushes, scrub beads, or abrasive washcloths",
    ],
    recommendedActives: ["centella", "ceramides", "azelaic-acid", "hyaluronic-acid"],
  },
  {
    id: "routine-combination-skin",
    slug: "combination-skin",
    skinType: "Combination Skin",
    seoTitle: "Skincare Routine for Combination Skin | Miko",
    tagline: "Zone-differentiated sebum regulation and dual-moisture balance.",
    description:
      "An architectural routine engineered to address hyperactive sebaceous secretion in the central T-zone while preventing lipid deficiency across peripheral cheeks.",
    characteristics: [
      "Sebum accumulation and enlarged pores across forehead, nose, and chin",
      "Normal to dry, flaky, or tight skin across lateral cheek zones and jawline",
      "Seasonal variability: oilier in summer humidity, drier during cold winter months",
      "Requires zone-targeted active application rather than uniform whole-face protocols",
    ],
    textureStrategy:
      "Lightweight layering: build hydration in thin, multi-molecular aqueous layers rather than one heavy cream. Spot-treat oily zones with light gels.",
    amSteps: [
      {
        order: "Step 01",
        category: "Cleanser",
        productType: "Balanced Gel-to-Foam Cleanser",
        purpose: "Clears T-zone oiliness while preserving cheek lipid integrity.",
        texture: "Gentle gel",
      },
      {
        order: "Step 02",
        category: "Universal Treatment",
        productType: "Niacinamide 3–4% + Hyaluronic Essence",
        purpose: "Regulates T-zone lipogenesis while delivering humectant water to lateral cheek zones.",
        texture: "Fluid essence",
      },
      {
        order: "Step 03",
        category: "Moisturizer",
        productType: "Lightweight Ceramide Gel-Cream",
        purpose: "Delivers essential barrier lipids in a non-congesting, weightless vehicle.",
        texture: "Gel-cream",
      },
      {
        order: "Step 04",
        category: "Sunscreen",
        productType: "Invisible Fluid Broad-Spectrum SPF 50+",
        purpose: "Non-greasy, satin-finish UV protection suitable for both oily and dry zones.",
        texture: "Satin fluid",
      },
    ],
    pmSteps: [
      {
        order: "Step 01",
        category: "First Cleanse",
        productType: "Lightweight Cleansing Oil",
        purpose: "Breaks down waterproof SPF and oxidized T-zone sebum plugs.",
        texture: "Rinseable oil",
      },
      {
        order: "Step 02",
        category: "Second Cleanse",
        productType: "Gentle Foaming Cleanser",
        purpose: "Ensures complete surface cleanliness without residue.",
        texture: "Soft foam",
      },
      {
        order: "Step 03",
        category: "Zone-Targeted Active",
        productType: "Salicylic Acid (T-Zone) / Retinol (Whole Face)",
        purpose: "Apply BHA strictly to nose and chin; use low-strength retinol across the entire face on alternating nights.",
        texture: "Liquid / fluid",
      },
      {
        order: "Step 04",
        category: "Moisturizer",
        productType: "Adaptive Barrier Emulsion",
        purpose: "Apply single layer to T-zone; apply secondary layer or squalane drop to dry cheeks.",
        texture: "Fluid emulsion",
      },
    ],
    middayRule:
      "Blot T-zone with oil-absorbing sheets around midday. Reapply fluid sunscreen across cheeks and nose with clean fingertips.",
    weeklyActiveCadence:
      "BHA on T-zone 2 nights weekly. Retinoid 3 nights weekly across entire face. 2 nights dedicated to universal barrier replenishment.",
    pitfallsToAvoid: [
      "Treating the entire face as oily by applying drying astringents to delicate cheek zones",
      "Treating the entire face as dry by slathering heavy occlusive ointments over congested pores",
      "Using two completely separate routine setups when zoned application of a unified routine is more effective",
    ],
    recommendedActives: ["niacinamide", "aha-bha", "retinol", "ceramides"],
  },
  {
    id: "routine-acne-prone-skin",
    slug: "acne-prone-skin",
    skinType: "Acne-Prone Skin",
    seoTitle: "Skincare Routine for Acne-Prone Skin | Miko",
    tagline: "Microbial bio-film suppression and follicular desquamation normalization.",
    description:
      "A clinical antimicrobial and keratolytic protocol designed to eradicate Cutibacterium acnes colonization and prevent microcomedone formation.",
    characteristics: [
      "Frequent appearance of inflammatory papules, pustules, and closed retention comedones",
      "Heightened follicular hyperkeratinization trapping sebum inside the sebaceous duct",
      "Post-inflammatory erythema (PIE) or hyperpigmentation (PIH) lingering after lesions heal",
      "Susceptible to irritation dermatitis from simultaneous over-treatment with harsh drying agents",
    ],
    textureStrategy:
      "Water-gel vehicles, lipid-free serums, and lightweight non-comedogenic lotions. Strictly avoid myristic acid, isopropyl palmitate, and heavy animal or plant waxes.",
    amSteps: [
      {
        order: "Step 01",
        category: "Cleanser",
        productType: "Gentle Salicylic Acid 1% Wash or Low-pH Cleanser",
        purpose: "Reduces follicular bacteria and exfoliates duct openings without damaging the surface barrier.",
        texture: "Foaming gel",
      },
      {
        order: "Step 02",
        category: "Active Defense",
        productType: "Azelaic Acid 10% or Niacinamide 4%",
        purpose: "Provides selective antimicrobial inhibition of C. acnes and down-regulates inflammatory erythema.",
        texture: "Light suspension",
      },
      {
        order: "Step 03",
        category: "Moisturizer",
        productType: "Oil-Free Hyaluronic & Ceramide Gel",
        purpose: "Maintains optimal stratum corneum hydration to facilitate smooth desquamation.",
        texture: "Aqueous gel",
      },
      {
        order: "Step 04",
        category: "Sunscreen",
        productType: "Non-Comedogenic Matte Fluid SPF 50+",
        purpose: "Prevents UV-induced oxidation of squalene, which triggers comedone formation and darkens post-acne marks.",
        texture: "Matte fluid",
      },
    ],
    pmSteps: [
      {
        order: "Step 01",
        category: "First Cleanse",
        productType: "Non-Comedogenic Cleansing Water or Gel",
        purpose: "Lifts SPF, airborne pollutants, and oxidized sebum without leaving a greasy lipid film.",
        texture: "Micellar water",
      },
      {
        order: "Step 02",
        category: "Second Cleanse",
        productType: "Gentle Balancing Amino-Acid Cleanser",
        purpose: "Purifies follicular openings at neutral epidermal pH.",
        texture: "Light foam",
      },
      {
        order: "Step 03",
        category: "Targeted Treatment",
        productType: "Retinoid (Adapalene or Encapsulated Retinol) / Benzoyl Peroxide",
        purpose: "Normalizes follicular keratinization and destroys anaerobic bacterial colonies; rotated on alternating evenings.",
        texture: "Treatment gel",
      },
      {
        order: "Step 04",
        category: "Moisturizer",
        productType: "Soothe-and-Repair Barrier Fluid",
        purpose: "Centella-infused ceramide lotion to prevent barrier breakdown from keratolytic actives.",
        texture: "Lightweight lotion",
      },
    ],
    middayRule:
      "Avoid touching or resting hands on the face. Do not pop, pick, or mechanically extract lesions, which spreads bacterial contamination and deepens dermal scarring.",
    weeklyActiveCadence:
      "Retinoid 4 to 5 nights weekly. Salicylic acid wash or topical BHA 2 mornings weekly. Benzoyl peroxide spot treatment used sparingly on active inflammatory papules.",
    pitfallsToAvoid: [
      "Simultaneously applying Benzoyl Peroxide and Retinoids in the same application slot (oxidative degradation occurs unless using formulated fixed combinations)",
      "Starving acneic skin of moisturizer, causing barrier peeling that traps deeper bacteria",
      "Using high-alcohol astringent pads that cause micro-trauma to inflamed follicular walls",
    ],
    recommendedActives: ["aha-bha", "azelaic-acid", "retinol", "niacinamide"],
  },
  {
    id: "routine-mature-skin",
    slug: "mature-skin",
    skinType: "Mature Skin",
    seoTitle: "Skincare Routine for Mature Skin | Miko",
    tagline: "Cellular renewal, extracellular matrix stimulation, and lipid replenishment.",
    description:
      "A comprehensive longevity and collagen-maintenance framework targeted at counteracting photo-aging, slow epidermal turnover, and declining sebum synthesis.",
    characteristics: [
      "Decreased dermal thickness, reduced elasticity, and dynamic-to-static fine lines",
      "Declining natural sebaceous lipid production, leading to persistent dryness",
      "Slower cellular transit time (~40–60 days vs. 28 days in youth), leading to dull light reflection",
      "Accumulation of actinic solar lentigines and localized melanin clumping",
    ],
    textureStrategy:
      "Silky multi-phase serums, peptide-dense emulsions, nourishing ceramide-cholesterol complexes, and high-protection hydrating sunscreens.",
    amSteps: [
      {
        order: "Step 01",
        category: "Cleanser",
        productType: "Hydrating Conditioning Cleanser",
        purpose: "Gently removes nighttime metabolites without stripping precious natural moisturizing factors.",
        texture: "Creamy lotion",
      },
      {
        order: "Step 02",
        category: "Antioxidant Defense",
        productType: "L-Ascorbic Acid 15% + Ferulic Acid Serum",
        purpose: "Neutralizes daylight reactive oxygen species and serves as an obligate co-factor for collagen synthesis.",
        texture: "Aqueous serum",
      },
      {
        order: "Step 03",
        category: "Peptide Signaling",
        productType: "Multi-Peptide Matrix Serum",
        purpose: "Delivers matrikine signaling peptides to stimulate fibroblast extracellular matrix synthesis.",
        texture: "Viscous serum",
      },
      {
        order: "Step 04",
        category: "Moisturizer & SPF",
        productType: "Rich Ceramide Cream + High-UVA SPF 50+",
        purpose: "Prevents UV-induced matrix metalloproteinases (MMPs) from breaking down existing dermal collagen.",
        texture: "Comfort cream",
      },
    ],
    pmSteps: [
      {
        order: "Step 01",
        category: "First Cleanse",
        productType: "Nourishing Cleansing Balm",
        purpose: "Effortlessly dissolves daytime SPF and pollutants without mechanical friction.",
        texture: "Emollient balm",
      },
      {
        order: "Step 02",
        category: "Second Cleanse",
        productType: "Gentle Hydrating Cleanser",
        purpose: "Leaves skin supple and receptive to active penetration.",
        texture: "Velvety milk",
      },
      {
        order: "Step 03",
        category: "Cellular Renewal",
        productType: "Retinoid (Retinol, Retinaldehyde, or Tretinoin)",
        purpose: "Binds nuclear retinoic acid receptors, suppressing collagenase enzymes and upregulating procollagen transcription.",
        texture: "Creamy emulsion",
      },
      {
        order: "Step 04",
        category: "Lipid Matrix Seal",
        productType: "Ceramide, Cholesterol & Fatty Acid Restorative Cream",
        purpose: "Replaces natural lipid fractions that decline sharply with chronological age.",
        texture: "Rich lipid cream",
      },
    ],
    middayRule:
      "Maintain consistent hydration with a peptide-infused mist or gentle moisturizer touch-up. Avoid intense direct solar exposure during peak UV index hours.",
    weeklyActiveCadence:
      "Retinoid 4 to 5 nights weekly. Peptides applied every morning. Gentle glycolic or lactic acid exfoliant once weekly on a non-retinoid evening to clear dull surface cells.",
    pitfallsToAvoid: [
      "Layering direct acids concurrently with copper peptides in the same slot (dissociates the peptide complex)",
      "Skipping daily sunscreen on cloudy or indoor days (UVA rays penetrate glass and destroy dermal elastin year-round)",
      "Over-exfoliating thinning mature epidermis with aggressive mechanical microdermabrasion scrubs",
    ],
    recommendedActives: ["retinol", "peptides", "vitamin-c", "ceramides"],
  },
];

export function getSkinTypeRoutineBySlug(slug: string): SkinTypeRoutine | undefined {
  return SKIN_TYPES_LIST.find((r) => r.slug === slug || r.id === slug);
}
