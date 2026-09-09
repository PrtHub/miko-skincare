import { SkinConcern } from "../types";

export const CONCERNS_LIST: SkinConcern[] = [
  {
    id: "concern-hyperpigmentation",
    slug: "hyperpigmentation",
    name: "Hyperpigmentation & Dark Spots",
    seoTitle: "What Actives Work for Hyperpigmentation? | Miko",
    tagline: "Biological melanosome transfer inhibition and tyrosinase regulation.",
    description:
      "Post-inflammatory hyperpigmentation (PIH) and solar lentigines develop when melanocytes over-synthesize melanin in response to UV exposure or localized epidermal inflammation.",
    biologicalMechanism:
      "Tyrosinase converts L-tyrosine into dopaquinone, triggering eumelanin synthesis. Active melanocytes transfer mature melanosome packets into surrounding keratinocytes. Resolving hyperpigmentation requires combining tyrosinase inhibitors, melanosome transfer blockers, and cellular renewal accelerators concurrently with daily broad-spectrum UV shielding.",
    primaryActives: [
      {
        activeName: "Niacinamide (Vitamin B3)",
        activeSlug: "niacinamide",
        role: "Melanosome Transfer Blocker",
        mechanism: "Inhibits the physical transfer of melanosomes from melanocyte dendrites into surrounding keratinocytes by 35% to 68%.",
      },
      {
        activeName: "L-Ascorbic Acid (Vitamin C)",
        activeSlug: "vitamin-c",
        role: "Tyrosinase Interrupter & Reducer",
        mechanism: "Interacts with copper ions at the active site of tyrosinase while reducing dopaquinone back into dopa, halting melanogenesis.",
      },
      {
        activeName: "Azelaic Acid",
        activeSlug: "azelaic-acid",
        role: "Selective Abnormal Melanocyte Suppressor",
        mechanism: "Exerts competitive inhibition on tyrosinase specifically in hyperactive, abnormal melanocytes without bleaching normal basal skin tone.",
      },
    ],
    secondaryActives: [
      {
        activeName: "Retinoids",
        activeSlug: "retinol",
        role: "Keratinocyte Dispersion Accelerator",
        mechanism: "Accelerates epidermal transit time, promoting the upward desquamation of melanin-laden corneocytes.",
      },
      {
        activeName: "AHA & BHA Acids",
        activeSlug: "aha-bha",
        role: "Surface Melanin Exfoliation",
        mechanism: "Weakens calcium-dependent desmosomal links, shedding pigmented stratum corneum cells.",
      },
    ],
    activesToAvoid: [
      {
        ingredient: "Hydroquinone (unsupervised or long-term)",
        reason: "Carries substantial systemic absorption and risk of paradoxical exogenous ochronosis when used without medical supervision.",
      },
      {
        ingredient: "High-concentration unbuffered direct acids",
        reason: "Severe acid irritation can trigger secondary post-inflammatory hyperpigmentation, particularly in Fitzpatrick types III–VI.",
      },
    ],
    amRoutineStrategy: "Antioxidant photoprotection: L-Ascorbic Acid + Niacinamide followed by broad-spectrum sunscreen.",
    pmRoutineStrategy: "Cellular dispersion: Azelaic Acid or Retinoid alternating with gentle barrier lipids.",
    faqs: [
      {
        question: "How long does post-inflammatory hyperpigmentation take to fade?",
        answer: "Epidermal hyperpigmentation typically requires two to three complete cellular turnover cycles (8 to 12 weeks) under continuous daily UV shielding.",
      },
      {
        question: "Does sunlight reverse hyperpigmentation progress?",
        answer: "Yes. Minimal UV or visible blue light exposure immediately excites tyrosinase transcription, re-pigmenting fading spots within days.",
      },
    ],
    relatedPairs: ["vitamin-c-and-niacinamide", "retinol-and-niacinamide"],
  },
  {
    id: "concern-clogged-pores",
    slug: "clogged-pores-comedones",
    name: "Clogged Pores & Comedones",
    seoTitle: "Best Skincare Actives for Clogged Pores | Miko",
    tagline: "Intra-follicular desquamation and sebaceous duct clearing.",
    description:
      "Open comedones (blackheads) and closed comedones (whiteheads) form when desquamated keratinocytes mix with oxidized squalene and wax esters, forming dense follicular plugs.",
    biologicalMechanism:
      "Follicular retention hyperkeratosis prevents desquamated corneocytes from shedding normally. As sebum pools within the infundibulum, microbial microflora (Cutibacterium acnes) proliferate. Lipid-soluble actives are strictly required to diffuse through hydrophobic sebum and dissolve intra-pore cohesion.",
    primaryActives: [
      {
        activeName: "Salicylic Acid (BHA)",
        activeSlug: "aha-bha",
        role: "Lipophilic Intra-Duct Exfoliant",
        mechanism: "Lipid-soluble beta-hydroxy acid that diffuses directly through sebaceous sebum, solubilizing intercellular cement inside pore linings.",
      },
      {
        activeName: "Retinoids",
        activeSlug: "retinol",
        role: "Follicular Desquamation Normalizer",
        mechanism: "Normalizes keratinocyte differentiation inside the follicular canal, preventing abnormal adhesion of desquamated plugs.",
      },
    ],
    secondaryActives: [
      {
        activeName: "Niacinamide",
        activeSlug: "niacinamide",
        role: "Sebum Viscosity Modulator",
        mechanism: "Reduces total sebaceous excretion rate and down-regulates inflammatory free fatty acid formation.",
      },
    ],
    activesToAvoid: [
      {
        ingredient: "Heavy comedogenic plant butters (e.g. Cocoa Butter, Coconut Oil)",
        reason: "High concentration of myristic and lauric triglycerides that physically wedge into dilated infundibular ducts.",
      },
      {
        ingredient: "Aggressive physical walnut/apricot scrubs",
        reason: "Micro-scratches rupture the follicular wall internally, transforming simple retention comedones into inflammatory papules.",
      },
    ],
    amRoutineStrategy: "Sebum balance: Gentle low-pH cleanser + Niacinamide + fluid non-comedogenic sunscreen.",
    pmRoutineStrategy: "Follicular clearing: Salicylic acid 2 nights weekly; Retinoid 3 nights weekly; hydration on off nights.",
    faqs: [
      {
        question: "Can pore size be physically shrunk?",
        answer: "Pore diameter is determined by genetic follicle size and collagen scaffolding. Actives keep pores free of oxidized debris and sebum, minimizing visible appearance.",
      },
    ],
    relatedPairs: ["retinol-and-glycolic-acid", "retinol-and-benzoyl-peroxide"],
  },
  {
    id: "concern-compromised-barrier",
    slug: "compromised-barrier",
    name: "Compromised Barrier & Stinging",
    seoTitle: "How to Repair a Damaged Skin Barrier | Miko",
    tagline: "Lamellar lipid bilayer replenishment and transepidermal water loss reduction.",
    description:
      "An impaired stratum corneum with depleted ceramides, micro-fissures, and heightened sensitivity to ambient air and neutral water.",
    biologicalMechanism:
      "The stratum corneum operates like a brick wall: protein-rich corneocytes ('bricks') embedded in structured lipid lamellae ('mortar'). Over-exfoliation, harsh surfactants, or thermal stress depletes ceramides, cholesterol, and free fatty acids. Transepidermal water loss surges, nerve endings are exposed, and stinging occurs.",
    primaryActives: [
      {
        activeName: "Ceramides & Lipids",
        activeSlug: "ceramides",
        role: "Intercellular Lamellar Replenisher",
        mechanism: "Reconstitutes liquid-crystalline lipid bilayers between corneocytes, restoring the epidermal permeability seal.",
      },
      {
        activeName: "Centella & Ectoin",
        activeSlug: "centella",
        role: "Cytokine Suppressor & Extremolyte Buffer",
        mechanism: "Suppresses NF-kB and pro-inflammatory IL-1a signaling while stabilizing cell membrane hydration shells.",
      },
    ],
    secondaryActives: [
      {
        activeName: "Hyaluronic Acid & Polyols",
        activeSlug: "hyaluronic-acid",
        role: "Endogenous Osmolyte Reserve",
        mechanism: "Attracts water to swell dehydrated corneocytes, closing micro-fissures.",
      },
    ],
    activesToAvoid: [
      {
        ingredient: "All direct chemical exfoliants (Glycolic, Lactic, Salicylic Acid)",
        reason: "Direct acids degrade remaining intercellular junctions and compound acid mantle trauma.",
      },
      {
        ingredient: "High-concentration Retinoids and L-Ascorbic Acid",
        reason: "Accelerates desquamation before baseline lipid sheets have reformed, worsening barrier collapse.",
      },
    ],
    amRoutineStrategy: "Barrier shielding: Splash water or gentle milk + Centella essence + Ceramide moisturizer + Mineral SPF.",
    pmRoutineStrategy: "Restorative lipid seal: Gentle lipid cleanser + Hyaluronic buffer + Rich ceramide barrier balm.",
    faqs: [
      {
        question: "How long does an impaired skin barrier take to recover?",
        answer: "A complete stratum corneum lipid cycle takes 14 to 28 days of strict barrier restoration without active chemical irritants.",
      },
    ],
    relatedPairs: ["ceramides-and-retinol", "retinol-and-hyaluronic-acid"],
  },
  {
    id: "concern-facial-redness",
    slug: "facial-erythema-redness",
    name: "Facial Erythema & Redness",
    seoTitle: "Skincare Actives for Facial Redness | Miko",
    tagline: "Microvascular calming and anti-inflammatory cytokine downregulation.",
    description:
      "Persistent flushing, microvascular reactivity, and cutaneous erythema associated with skin sensitization or rosacea-prone skin.",
    biologicalMechanism:
      "Facial erythema involves superficial capillary dilation combined with an exaggerated neuro-inflammatory cascade (substance P, calcitonin gene-related peptide). Over-expressed cathelicidin LL-37 peptides trigger microvascular remodeling. Calming requires non-acidic anti-inflammatory agents and extreme thermal/chemical stability.",
    primaryActives: [
      {
        activeName: "Azelaic Acid",
        activeSlug: "azelaic-acid",
        role: "Cathelicidin & Inflammatory Modulator",
        mechanism: "Down-regulates kallikrein 5 and suppresses inflammatory cathelicidin LL-37 processing in epidermal keratinocytes.",
      },
      {
        activeName: "Centella & Ectoin",
        activeSlug: "centella",
        role: "Microvascular Stabilizer",
        mechanism: "Promotes microvascular circulation while suppressing pro-inflammatory cytokine expression (TNF-alpha).",
      },
    ],
    secondaryActives: [
      {
        activeName: "Niacinamide (Low Concentration 2–4%)",
        activeSlug: "niacinamide",
        role: "Vascular Permeability Barrier",
        mechanism: "Strengthens stratum corneum architecture to prevent environmental trigger ingress.",
      },
    ],
    activesToAvoid: [
      {
        ingredient: "Volatile aromatic fragrance & essential oils (limonene, linalool, menthol)",
        reason: "Triggers transient receptor potential (TRPV1) channels, provoking immediate neurovascular flushing.",
      },
      {
        ingredient: "Strong Glycolic Acid solutions (pH < 3.5)",
        reason: "Low molecular weight AHA rapidly diffuses into dermis, triggering histamine-like erythema.",
      },
    ],
    amRoutineStrategy: "Gentle defense: Soothing centella serum + Azelaic acid 10% + All-mineral Zinc Oxide sunscreen.",
    pmRoutineStrategy: "Anti-erythema recovery: Non-foaming cleanser + Centella + Ceramide cream.",
    faqs: [
      {
        question: "Why does Zinc Oxide calm facial redness?",
        answer: "Zinc possesses innate soothing anti-inflammatory properties and provides a physical reflective shield against infrared thermal heat.",
      },
    ],
    relatedPairs: ["retinol-and-niacinamide"],
  },
  {
    id: "concern-fine-lines",
    slug: "fine-lines-elasticity",
    name: "Fine Lines & Collagen Loss",
    seoTitle: "What Skincare Actives Support Collagen? | Miko",
    tagline: "Fibroblast receptor stimulation and dermal extracellular matrix maintenance.",
    description:
      "Structural cutaneous changes driven by chronological aging and solar elastosis, characterized by degraded collagen fibrils and reduced dermal turgor.",
    biologicalMechanism:
      "Solar radiation upregulates matrix metalloproteinases (MMPs) that cleave dermal type I and III collagen. Fibroblasts synthesize collagen and elastin at slower rates with age. Rebuilding extracellular matrix density requires retinoic acid receptor activation, biomimetic peptide signaling, and antioxidant enzyme defense.",
    primaryActives: [
      {
        activeName: "Retinoids",
        activeSlug: "retinol",
        role: "Nuclear Receptor Gene Transcription",
        mechanism: "Binds retinoic acid receptors (RAR), inhibiting collagenase MMPs while directly upregulating procollagen gene transcription.",
      },
      {
        activeName: "Signal Peptides & Copper",
        activeSlug: "peptides",
        role: "Matrikine Repair Signaling",
        mechanism: "Mimics extracellular matrix breakdown fragments, signaling dermal fibroblasts to synthesize new collagen and glycosaminoglycans.",
      },
    ],
    secondaryActives: [
      {
        activeName: "L-Ascorbic Acid (Vitamin C)",
        activeSlug: "vitamin-c",
        role: "Essential Collagen Co-Factor",
        mechanism: "Functions as an obligate co-factor for prolyl and lysyl hydroxylase enzymes, cross-linking collagen triple-helix fibrils.",
      },
    ],
    activesToAvoid: [
      {
        ingredient: "Concurrent direct acids with peptides",
        reason: "Extreme low pH can hydrolyze delicate peptide bonds and dissociate copper carrier ions.",
      },
    ],
    amRoutineStrategy: "Antioxidant preservation: Vitamin C + Peptides + High-UVA broad-spectrum sunscreen.",
    pmRoutineStrategy: "Cellular stimulation: Retinoid alternating with ceramide barrier replenishment.",
    faqs: [
      {
        question: "Can topically applied collagen replace human dermal collagen?",
        answer: "No. Collagen molecules have a molecular weight of ~300,000 Daltons — far too large to penetrate the 500 Dalton stratum corneum threshold. Signal peptides and retinoids stimulate endogenous collagen synthesis instead.",
      },
    ],
    relatedPairs: ["peptides-and-acids", "ceramides-and-retinol"],
  },
  {
    id: "concern-melasma",
    slug: "melasma",
    name: "Melasma & Hormonal Pigment",
    seoTitle: "Melasma Skincare Guide: Permitted Actives | Miko",
    tagline: "Non-irritating tyrosinase control and visible light defense.",
    description:
      "Bilateral symmetrical facial hyperpigmentation triggered by reproductive hormones (estrogen/progesterone), solar UV, and visible high-energy light.",
    biologicalMechanism:
      "Melasma involves hyperfunctional melanocytes with upregulated melanocortin 1 receptors and elevated microvascular density. Unlike simple sun spots, melasma flares in response to thermal heat and blue light. Aggressive peels cause rebound hyperpigmentation; gentle, continuous tyrosinase inhibition is necessary.",
    primaryActives: [
      {
        activeName: "Azelaic Acid 10–20%",
        activeSlug: "azelaic-acid",
        role: "Targeted Melanocyte Regulator",
        mechanism: "Selectively suppresses hyperactive melanocytes by inhibiting DNA synthesis and tyrosinase activity without affecting normal skin.",
      },
      {
        activeName: "Niacinamide (4–5%)",
        activeSlug: "niacinamide",
        role: "Melanosome Transport Blocker",
        mechanism: "Prevents dendrite-to-keratinocyte melanosome transfer, softening pigmented patches.",
      },
    ],
    secondaryActives: [
      {
        activeName: "L-Ascorbic Acid",
        activeSlug: "vitamin-c",
        role: "Redox Pigment Buffer",
        mechanism: "Scavenges daylight free radicals that trigger melanogenesis cascade.",
      },
    ],
    activesToAvoid: [
      {
        ingredient: "Aggressive chemical peels (>15% Glycolic Acid)",
        reason: "Thermal inflammatory response triggers acute rebound melasma worsening.",
      },
      {
        ingredient: "Prescription retinoids during pregnancy",
        reason: "Teratogenicity contraindication during gestational melasma periods.",
      },
    ],
    amRoutineStrategy: "Photoprotective shield: Niacinamide + Vitamin C + Tinted Iron Oxide mineral sunscreen (blocks visible blue light).",
    pmRoutineStrategy: "Tyrosinase control: Azelaic acid + Ceramide moisturizer.",
    faqs: [
      {
        question: "Why is tinted mineral sunscreen recommended for melasma?",
        answer: "Iron oxides present in tinted mineral sunscreens filter high-energy visible (HEV) blue light, which directly excites melasma melanogenesis beyond UV alone.",
      },
    ],
    relatedPairs: ["vitamin-c-and-niacinamide"],
  },
  {
    id: "concern-dehydration",
    slug: "skin-dehydration",
    name: "Epidermal Dehydration & Tightness",
    seoTitle: "How to Treat Dehydrated Skin: Actives | Miko",
    tagline: "Corneocyte water binding and natural moisturizing factor (NMF) replenishment.",
    description:
      "A temporary condition where the stratum corneum lacks adequate water content, leading to superficial micro-creasing, tight sensation, and dull light reflection.",
    biologicalMechanism:
      "Dehydration is distinct from dry skin (which lacks sebum lipids). Dehydrated skin lacks aqueous intracellular water and natural moisturizing factors (amino acids, PCA, urea, lactate). Corneocytes shrink and curl at the edges, disrupting uniform desquamation.",
    primaryActives: [
      {
        activeName: "Hyaluronic Acid & Polyols",
        activeSlug: "hyaluronic-acid",
        role: "Multi-Depth Humectant",
        mechanism: "Low-molecular weight fragments penetrate superficial layers; high-molecular weight polymers hold water on the surface.",
      },
      {
        activeName: "Ceramides & Lipids",
        activeSlug: "ceramides",
        role: "Occlusive Moisture Seal",
        mechanism: "Prevents humectant-bound moisture from evaporating through transepidermal water loss.",
      },
    ],
    secondaryActives: [
      {
        activeName: "Centella & Ectoin",
        activeSlug: "centella",
        role: "Cellular Hydration Shell",
        mechanism: "Ectoin forms water clusters around cell membrane proteins, defending against osmotic stress.",
      },
    ],
    activesToAvoid: [
      {
        ingredient: "Denatured Alcohol (Alcohol Denat) in high placement",
        reason: "Rapidly volatilizes surface water and extracts protective intercellular lipids.",
      },
      {
        ingredient: "Applying hyaluronic acid in arid environments without moisturizer",
        reason: "In low relative humidity (<30%), un-occluded humectants draw water upward from the dermis into ambient air.",
      },
    ],
    amRoutineStrategy: "Hydration stacking: Apply watery humectants to damp skin immediately followed by ceramide emulsion and sunscreen.",
    pmRoutineStrategy: "Overnight seal: Humectant essence + Barrier cream containing ceramides and squalane.",
    faqs: [
      {
        question: "Can oily skin be dehydrated?",
        answer: "Yes. Skin can produce excess sebum while simultaneously lacking intercellular water in the stratum corneum.",
      },
    ],
    relatedPairs: ["retinol-and-hyaluronic-acid"],
  },
  {
    id: "concern-rough-texture",
    slug: "uneven-rough-texture",
    name: "Rough Texture & Corneocyte Buildup",
    seoTitle: "Actives for Smooth Skin Texture | Miko",
    tagline: "Desmosomal shedding normalization and cellular transit optimization.",
    description:
      "A rough, tactilely uneven skin surface caused by un-shed corneocytes accumulating on the stratum corneum.",
    biologicalMechanism:
      "Normal skin sheds approximately 30,000 to 40,000 dead cells per minute. When desmosomal cadherins fail to detach, corneocytes stack in irregular layers, scattering ambient light and creating tactile roughness. Chemical exfoliants loosen desmosomes to restore uniform planar reflection.",
    primaryActives: [
      {
        activeName: "AHA & BHA Acids",
        activeSlug: "aha-bha",
        role: "Desmosomal Cohesion Disruptor",
        mechanism: "AHAs dissolve calcium bonds between corneocytes; BHA clears follicular duct margins.",
      },
      {
        activeName: "Retinoids",
        activeSlug: "retinol",
        role: "Keratinocyte Proliferation Stimulator",
        mechanism: "Accelerates basal layer proliferation, pushing fresh cells upward to create a uniform epidermal architecture.",
      },
    ],
    secondaryActives: [
      {
        activeName: "Niacinamide",
        activeSlug: "niacinamide",
        role: "Keratinocyte Envelope Stabilizer",
        mechanism: "Improves cellular cohesion and smooths appearance of follicular pores.",
      },
    ],
    activesToAvoid: [
      {
        ingredient: "Concurrent Retinoid and Glycolic Acid stacking",
        reason: "Simultaneous accelerated shedding outpaces lipid synthesis, causing severe peeling dermatitis.",
      },
    ],
    amRoutineStrategy: "Gentle hydration + Niacinamide + Sunscreen.",
    pmRoutineStrategy: "Staggered cadence: Glycolic acid on Monday/Thursday; Retinoid on Tuesday/Friday; barrier recovery on off days.",
    faqs: [
      {
        question: "Why do direct acids sting more than retinoids initially?",
        answer: "Direct acids work immediately by lowering surface pH and cleaving desmosomes; retinoids operate via nuclear gene transcription over days and weeks.",
      },
    ],
    relatedPairs: ["retinol-and-glycolic-acid"],
  },
  {
    id: "concern-excess-sebum",
    slug: "excess-sebum-oiliness",
    name: "Excess Sebum & Shiny T-Zone",
    seoTitle: "How to Regulate Excess Sebum in Skincare | Miko",
    tagline: "Sebaceous lipogenesis suppression and follicular drainage.",
    description:
      "Hyperactive sebaceous glands producing excessive liquid squalene, triglycerides, and wax esters across the forehead, nose, and chin.",
    biologicalMechanism:
      "Sebocytes are regulated by circulating dihydrotestosterone (DHT) binding to androgen receptors. Excess sebum oxidizes upon exposure to ambient air, contributing to follicular congestion and visible light reflection. Active management focuses on enzymatic sebum suppression and lipid dissolution without stripping native barrier lipids.",
    primaryActives: [
      {
        activeName: "Niacinamide",
        activeSlug: "niacinamide",
        role: "Sebum Excretion Rate Regulator",
        mechanism: "Down-regulates de novo sebaceous lipogenesis and reduces total surface lipid levels after 2 to 4 weeks of consistent application.",
      },
      {
        activeName: "Salicylic Acid (BHA)",
        activeSlug: "aha-bha",
        role: "Sebum Miscibility Exfoliant",
        mechanism: "Dissolves within sebum, preventing follicular duct blockages and clearing excess oil.",
      },
    ],
    secondaryActives: [
      {
        activeName: "Centella & Ectoin",
        activeSlug: "centella",
        role: "Non-Lipidic Hydration Shield",
        mechanism: "Provides essential moisture without adding triglycerides or heavy esters.",
      },
    ],
    activesToAvoid: [
      {
        ingredient: "Over-cleansing with high-pH sulfate foaming washes",
        reason: "Stripping native ceramides triggers compensatory rebound hyper-seborrhea.",
      },
    ],
    amRoutineStrategy: "Oil control: Gentle pH-balanced cleanser + Niacinamide 2–5% + Lightweight fluid gel SPF.",
    pmRoutineStrategy: "Pore clearing: Salicylic acid alternating with light oil-free hydrators.",
    faqs: [
      {
        question: "Does dehydrated skin produce more oil?",
        answer: "Yes. When the stratum corneum barrier is dehydrated, the skin often responds by pumping excess sebum to compensate for the missing water barrier.",
      },
    ],
    relatedPairs: ["vitamin-c-and-niacinamide"],
  },
  {
    id: "concern-dullness",
    slug: "dull-complexion",
    name: "Dullness & Surface Light Scatter",
    seoTitle: "How to Brighten a Dull Complexion | Miko",
    tagline: "Specular optical reflection restoration through cellular turnover and antioxidant protection.",
    description:
      "A flat, lackluster skin appearance caused by irregular micro-roughness scattering light, combined with oxidative stress and environmental particulate accumulation.",
    biologicalMechanism:
      "Radiance is an optical physics phenomenon: a smooth, well-hydrated stratum corneum reflects light in uniform specular beams (like glass). A rough, oxidized surface scatters light in chaotic diffuse directions. Exfoliating un-shed corneocytes and scavenging reactive oxygen species restores specular reflection.",
    primaryActives: [
      {
        activeName: "L-Ascorbic Acid (Vitamin C)",
        activeSlug: "vitamin-c",
        role: "Antioxidant Light Buffer",
        mechanism: "Neutralizes reactive oxygen species and suppresses oxidative protein carbonylation.",
      },
      {
        activeName: "AHA & BHA Acids",
        activeSlug: "aha-bha",
        role: "Reflective Planar Smoothing",
        mechanism: "Exfoliates dull corneocyte clusters, restoring a smooth planar surface for uniform light reflection.",
      },
    ],
    secondaryActives: [
      {
        activeName: "Niacinamide",
        activeSlug: "niacinamide",
        role: "Microvascular Tone Support",
        mechanism: "Enhances epidermal energy metabolism, improving overall cutaneous vitality.",
      },
    ],
    activesToAvoid: [
      {
        ingredient: "Oxidized, brown L-ascorbic acid serums",
        reason: "Oxidized ascorbic acid converts into dehydroascorbic acid and erythrulose, which can impart a yellowish dull stain.",
      },
    ],
    amRoutineStrategy: "Radiance shield: Fresh Vitamin C + Niacinamide + Broad-spectrum Sunscreen.",
    pmRoutineStrategy: "Gentle renewal: Mild AHA (Lactic or Mandelic Acid) 2 nights weekly + Barrier recovery.",
    faqs: [
      {
        question: "How does Vitamin C improve radiance?",
        answer: "It acts as a cellular antioxidant, prevents lipid peroxidation from daytime pollution, and cross-links collagen fibrils.",
      },
    ],
    relatedPairs: ["vitamin-c-and-niacinamide", "vitamin-c-and-glycolic-acid"],
  },
];

export function getConcernBySlug(slug: string): SkinConcern | undefined {
  return CONCERNS_LIST.find((c) => c.slug === slug || c.id === slug);
}
