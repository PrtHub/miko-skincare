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
      "Scrutinize the bottom 5 to 10 lines of the INCI declaration. Terms like 'Lavandula', 'Citrus', 'Pelargonium', or 'Eucalyptus' denote unrefined essential oils containing dozens of volatile allergenic terpenes even when labeled 'natural' or 'botanical'.",
    relatedActives: ["centella", "ceramides", "niacinamide"],
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
      "Pure 100% Squalane (a saturated triterpene hydrocarbon that Malassezia cannot metabolize)",
      "Caprylic/Capric Triglyceride (MCT oil containing pure C8 and C10 fatty acid esters)",
      "Mineral Oil and high-purity Petrolatum",
      "Active ketoconazole, zinc pyrithione, sulfur, and azelaic acid solutions",
    ],
    labelReadingTip:
      "Check all esters, emulsifiers, and fatty acids. Any ingredient ending in '-ate' (such as Ethylhexyl Palmitate or Glyceryl Stearate) contains a carbon backbone that may feed Malassezia lipases unless verified as pure C8/C10 or squalane.",
    relatedActives: ["aha-bha", "niacinamide"],
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
      "Organic filters absorb photon energy and convert UV radiation into thermal energy. Certain legacy aromatic ketones (especially Oxybenzone and un-stabilized Avobenzone) can photo-degrade under sunlight, creating free-radical intermediates and reactive haptens. Furthermore, low-molecular-weight filters migrate easily across the peri-orbital rim, causing transient receptor potential (TRPV1) excitation on ocular mucosal membranes.",
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
      "A pharmacological assessment of high-charge anionic detergents that disrupt the stratum corneum structure and alter the cutaneous acid mantle.",
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
      "Stripped, squeaky sensation immediately after washing, followed by severe tautness",
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
  {
    id: "sens-preservatives",
    slug: "preservatives-formaldehyde-releasers",
    name: "Isothiazolinones & Formaldehyde Releasers",
    seoTitle: "Preservative Sensitivity in Skincare: Guide | Miko",
    tagline: "Electrophilic haptenation, biocide sensitization, and gaseous formaldehyde kinetics.",
    description:
      "A pharmacological assessment of cosmetic biocides—including methylisothiazolinone and formaldehyde donors—responsible for acute allergic contact dermatitis and periorbital eczema.",
    commonInci: [
      "Methylisothiazolinone (MI)",
      "Methylchloroisothiazolinone (MCI)",
      "DMDM Hydantoin",
      "Diazolidinyl Urea",
      "Imidazolidinyl Urea",
      "Quaternium-15",
      "Bronopol (2-Bromo-2-Nitropropane-1,3-Diol)",
    ],
    biologicalMechanism:
      "Isothiazolinones and formaldehyde releasers act as potent low-molecular-weight electrophilic haptens. Methylisothiazolinone undergoes covalent addition with nucleophilic thiol (-SH) groups on epidermal cysteine residues, forming stable immunogenic neo-antigens. Formaldehyde releasers slowly hydrolyze in water-based formulations, liberating free gaseous formaldehyde (HCHO) at 100–300 ppm. This reactive gas cross-links lysine amino groups in skin proteins, activating Langerhans cells and driving memory T-lymphocyte proliferation (Type IV delayed hypersensitivity).",
    reactionSymptoms: [
      "Severe periorbital and eyelid dermatitis (erythema, scaling, and edema)",
      "Pruritic follicular papules and vesicular weeping plaques on the neck and jawline",
      "Delayed flare appearing 24 to 48 hours after application of leave-on creams or rinse-off masks",
      "Sensation of relentless itching and burning unresponsive to standard moisturizers",
    ],
    toleratedAlternatives: [
      "Formulations preserved with organic acids (Sodium Benzoate, Potassium Sorbate)",
      "Phenoxyethanol combined with Ethylhexylglycerin (at concentrations below 1%)",
      "Glycol-based preservation boosters (Caprylyl Glycol, Pentylene Glycol, Glyceryl Caprylate)",
      "Airless vacuum dispensers and single-dose sterile packaging",
    ],
    labelReadingTip:
      "Look for chemical suffixes ending in '-urea' (Diazolidinyl Urea), '-hydantoin' (DMDM Hydantoin), or names containing 'isothiazolinone'. Check both leave-on moisturizers and rinse-off cleansers, as aerosolized or wash-off residues readily provoke eyelid eczema.",
    relatedActives: ["centella", "ceramides", "hyaluronic-acid"],
  },
  {
    id: "sens-lanolin",
    slug: "lanolin-wool-wax-alcohols",
    name: "Lanolin & Wool Wax Alcohols",
    seoTitle: "Lanolin Sensitivity in Skincare: Diagnosis | Miko",
    tagline: "Complex ester-wax allergy, sterol sensitization, and recalcitrant cheilitis.",
    description:
      "A clinical evaluation of ovine sebaceous secretions and wool alcohols commonly formulated into intensive barrier ointments, lip balms, and post-procedure salves.",
    commonInci: [
      "Lanolin",
      "Lanolin Alcohol",
      "Wool Wax Alcohol",
      "Amerchol L-101",
      "Hydrogenated Lanolin",
      "Acetylated Lanolin",
      "Lanolin Oil",
    ],
    biologicalMechanism:
      "Lanolin is a polydisperse mixture of long-chain aliphatic esters, diesters, and free wool wax alcohols (such as cholesterol, cholestanol, and lanosterol). In individuals with impaired barrier integrity (atopic diathesis or chronic eczema), aliphatic alcohol fractions act as pro-haptens. They penetrate the fractured stratum corneum and conjugate with cell-surface proteins, eliciting a persistent Type IV cell-mediated allergic response frequently misattributed to product richness rather than true molecular allergy.",
    reactionSymptoms: [
      "Recalcitrant lip peeling, fissuring, and burning (allergic contact cheilitis) from soothing balms",
      "Paradoxical worsening of eczema or dermatitis in areas treated with heavy barrier creams",
      "Erythematous micro-papules along the vermilion border and nasolabial folds",
      "Pruritic lichenified plaques following occlusive ointment application",
    ],
    toleratedAlternatives: [
      "High-purity white petrolatum (USP 100% purified)",
      "Pure plant-derived Squalane and Hemisqualane",
      "Refined Shea Butter (Butyrospermum Parkii) and Murumuru Butter",
      "Bis-Diglyceryl Polyacyladipate-2 (synthetic plant-based lanolin substitute)",
    ],
    labelReadingTip:
      "If you develop chronic dry, cracking lips despite reapplying rich balms or ointments, check for 'Lanolin', 'Wool Alcohol', or 'Amerchol'. Discontinue all lanolin-bearing products for 14 days to differentiate product dependency from true contact cheilitis.",
    relatedActives: ["ceramides", "hyaluronic-acid", "centella"],
  },
  {
    id: "sens-propylene-glycol",
    slug: "propylene-glycol-penetration-enhancers",
    name: "Propylene Glycol & High-Dose Glycols",
    seoTitle: "Propylene Glycol Irritation: Skincare Guide | Miko",
    tagline: "Osmotic cell dehydration, lipid bilayer fluidization, and vehicle dermatitis.",
    description:
      "An analysis of low-molecular-weight glycols utilized as humectants, solvent vehicles, and penetration enhancers in active serums and topical gels.",
    commonInci: [
      "Propylene Glycol",
      "1,2-Propanediol",
      "Dipropylene Glycol",
      "High-percentage Butylene Glycol (>15%)",
      "Ethoxydiglycol",
      "PPG-26-Buteth-26",
    ],
    biologicalMechanism:
      "Propylene glycol (1,2-propanediol) possesses amphiphilic solvent properties that transiently fluidize the stratum corneum lipid bilayers to accelerate transdermal active penetration. However, at concentrations exceeding 10–20%, its intense hygroscopic capacity draws water osmotically out of viable keratinocytes faster than microcapillary flow can replenish it. This creates non-immunological chemical irritant contact dermatitis, disruption of membrane potentials, and direct activation of sensory nerve endings.",
    reactionSymptoms: [
      "Immediate warm stinging and prickling sensation upon serum contact",
      "Transient diffuse facial flushing without hives or wheals",
      "Pityriasis-like fine desquamation on the cheeks and paranasal creases",
      "Intolerance to active serums even when the primary active concentration is modest",
    ],
    toleratedAlternatives: [
      "Vegetable Glycerin (the dermatological reference non-irritating polyol humectant)",
      "Bio-fermented Propanediol (1,3-propanediol, exhibiting a markedly lower irritation profile)",
      "Betaine (trimethylglycine) and Trehalose osmolytes",
      "High-molecular-weight Sodium Hyaluronate solutions",
    ],
    labelReadingTip:
      "Distinguish between 1,2-Propanediol (Propylene Glycol, higher irritation index) and 1,3-Propanediol (Propanediol, corn-derived with lower skin irritation). Check if Propylene Glycol sits in the top 5 ingredients of liquid serums or sheet mask essences.",
    relatedActives: ["hyaluronic-acid", "ceramides", "centella"],
  },
  {
    id: "sens-citrus-photosensitizers",
    slug: "photosensitizing-citrus-botanicals",
    name: "Photoreactive Citrus Oils & Psoralens",
    seoTitle: "Photoreactive Citrus Oils in Skincare | Miko",
    tagline: "Furanocoumarin DNA cross-linking, photochemical reactivity, and phytophotodermatitis.",
    description:
      "A clinical assessment of cold-pressed Rutaceae citrus extracts containing linear psoralens that induce severe ultraviolet-mediated burns and hyperpigmentation.",
    commonInci: [
      "Citrus Aurantium Bergamia (Bergamot) Fruit Oil",
      "Citrus Limon (Lemon) Peel Oil",
      "Citrus Aurantifolia (Lime) Oil",
      "Citrus Grandis (Grapefruit) Peel Oil",
      "Angelica Archangelica Root Extract",
      "Ficus Carica (Fig) Leaf Extract",
    ],
    biologicalMechanism:
      "Cold-pressed citrus peel oils contain linear furanocoumarins, predominantly 5-methoxypsoralen (5-MOP / bergapten). When applied topically and exposed to UVA radiation (320–400 nm), bergapten molecules intercalate into double-stranded epidermal DNA. UVA photons excite the psoralen molecules, generating covalent monoadducts and bifunctional cross-links with pyrimidine bases. This photoreaction causes direct keratinocyte necrosis, membrane lysis, acute cutaneous erythema, and massive reactive melanogenesis (Berloque dermatitis).",
    reactionSymptoms: [
      "Irregular, streaky hyperpigmented staining appearing 48 to 72 hours after daytime sun exposure",
      "Erythematous blistering resembling a heat burn along droplet or drip patterns",
      "Persistent dermal hyperpigmentation that endures for months or years after resolution",
      "Acute solar sensitivity and edema restricted to sites of topical product contact",
    ],
    toleratedAlternatives: [
      "FCF-grade (Furanocoumarin-Free / Bergapten-Free) steam-distilled citrus extracts",
      "Purified non-photosensitizing antioxidants (Pure Vitamin C, Ferulic Acid, Ergothioneine)",
      "Niacinamide for brightening without phototoxic vulnerability",
      "Centella and peptide serums for cellular support",
    ],
    labelReadingTip:
      "Never apply products containing cold-pressed citrus peel oils (Bergamot, Lime, Lemon, Grapefruit) before daytime sun exposure. Look for 'FCF' or 'Bergapten-free' on labels, or choose stabilized vitamin C serums formulated without unrefined fruit peel extracts.",
    relatedActives: ["vitamin-c", "niacinamide", "ceramides"],
  },
  {
    id: "sens-menthol-cooling",
    slug: "menthol-camphor-cooling-agents",
    name: "Menthol, Camphor & Cooling Additives",
    seoTitle: "Menthol & Cooling Agents in Skincare | Miko",
    tagline: "TRPM8 cold-receptor excitation, vasodilation, and neurogenic flushing.",
    description:
      "A physiological review of sensory cooling monoterpenes and counter-irritants that mimic soothing sensations while triggering neurogenic inflammation and vascular dilation.",
    commonInci: [
      "Menthol",
      "Menthone",
      "Camphor",
      "Mentha Piperita (Peppermint) Leaf Oil",
      "Menthyl Lactate",
      "Mentha Viridis (Spearmint) Leaf Extract",
      "Eucalyptol / Cineole",
    ],
    biologicalMechanism:
      "Menthol and camphor are monoterpene counter-irritants that bind to and activate transient receptor potential melastatin 8 (TRPM8) ion channels on cutaneous A-delta and C sensory nerve fibers, causing calcium influx that mimics a physiological temperature drop. However, at higher concentrations, they concurrently activate TRPV1 nociceptors and trigger axon-reflex release of substance P and calcitonin gene-related peptide (CGRP). This neurogenic pathway elicits arterial vasodilation, rebound erythema, and accelerates transepidermal water loss.",
    reactionSymptoms: [
      "Immediate sharp stinging or freezing-cold sensation followed by intense warmth and redness",
      "Persistent central facial flushing and flare-ups in rosacea-prone skin",
      "Dry, cracked lip vermilion when formulated into medicated cooling lip salves",
      "Heightened cutaneous hypersensitivity to subsequent neutral water-based products",
    ],
    toleratedAlternatives: [
      "Physiological thermal-neutral soothing agents (Centella Asiatica, Madecassoside)",
      "Anti-inflammatory Bisabolol and Allantoin",
      "Chilled hydrogel formulations utilizing simple humectants rather than sensory terpenes",
      "Ceramide and panthenol barrier emollients",
    ],
    labelReadingTip:
      "Beware of products marketing a 'refreshing tingling sensation' or 'pore-tightening cool feeling'. Avoid leave-on toners, blemish spot treatments, and lip products listing 'Menthol', 'Camphor', or 'Menthyl Lactate' if you have rosacea or reactive skin.",
    relatedActives: ["centella", "ceramides", "niacinamide"],
  },
  {
    id: "sens-comedogenic-esters",
    slug: "comedogenic-esters-pore-occlusion",
    name: "Comedogenic Esters & Heavy Waxes",
    seoTitle: "Comedogenic Esters & Acne Cosmetica: Guide | Miko",
    tagline: "Follicular retention hyperkeratosis, sebum viscosity alteration, and acne cosmetica.",
    description:
      "A clinical analysis of low-viscosity branched fatty acid esters and synthetic waxes that penetrate the infundibulum, precipitating microcomedone formation and non-inflammatory congestion.",
    commonInci: [
      "Isopropyl Myristate",
      "Isopropyl Palmitate",
      "Ethylhexyl Palmitate",
      "Myristyl Myristate",
      "Isocetyl Stearate",
      "Butyl Stearate",
      "Theobroma Cacao (Cocoa) Seed Butter",
      "Cocos Nucifera (Coconut) Oil",
    ],
    biologicalMechanism:
      "Branched-chain synthetic esters possess low surface tension and high spreadability, allowing rapid penetration into the follicular infundibulum. Once within the pilosebaceous unit, they disrupt normal desquamation of ductal keratinocytes. Corneocytes become abnormally cohesive and adhere to the canal lining, altering sebum rheology into an inspissated lipid plug. This accelerates retention hyperkeratosis, forming microcomedones that evolve into closed comedones (acne cosmetica) independent of Cutibacterium acnes colonization.",
    reactionSymptoms: [
      "Sudden eruption of uniform, non-inflamed closed comedones (flesh-colored bumps) on cheeks and temples",
      "Stubborn follicular congestion appearing 2 to 6 weeks after introducing a new rich cream or oil cleanser",
      "Lack of improvement despite using salicylic acid while the comedogenic formulation remains in use",
      "Rough, cobblestone epidermal texture under tangential light",
    ],
    toleratedAlternatives: [
      "Pure 100% plant Squalane (a non-comedogenic triterpene identical to human sebum precursors)",
      "Caprylic/Capric Triglyceride (lightweight neutral medium-chain ester)",
      "Jojoba Oil (liquid wax ester with molecular structure mimicking sebum)",
      "Lightweight dimethicone emulsions providing slip without follicular compaction",
    ],
    labelReadingTip:
      "Check moisturizers and cleansing balms for the 'Isopropyl' and 'Myristate' or 'Palmitate' combinations. Isopropyl Myristate and Ethylhexyl Palmitate are common texture enhancers that frequently trigger closed comedones in congestion-prone skin.",
    relatedActives: ["aha-bha", "retinol", "niacinamide"],
  },
];

export function getSensitivityBySlug(slug: string): SkinSensitivity | undefined {
  return SENSITIVITIES_LIST.find((s) => s.slug === slug || s.id === slug);
}

