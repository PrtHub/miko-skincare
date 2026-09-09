import { BlogPost } from "../types";

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-vitc-niacinamide",
    slug: "the-vitamin-c-niacinamide-myth-explained",
    title: "Why the Vitamin C and Niacinamide Conflict Is a 1960s Laboratory Myth",
    seoTitle: "Vitamin C and Niacinamide: The Myth Debunked | Miko",
    description:
      "How 1960s non-physiological heating studies created a persistent skincare myth, and why modern ambient cosmetic formulations are stable together.",
    category: "Myth Busters",
    publishedAt: "2026-09-02",
    updatedAt: "2026-09-09",
    readTime: "5 min read",
    author: "Miko Formulation Science Team",
    featured: true,
    summary:
      "For decades, beauty advice has warned that L-ascorbic acid and niacinamide cancel each other out or produce painful facial flushing. The origin of this rule traces to a 1960s laboratory paper testing unbuffered compounds at extreme temperatures above 120°C. In ambient cosmetic formulations, the two actives are chemically stable and biologically compatible.",
    tags: ["Vitamin C", "Niacinamide", "Formulation Science", "Myth Busters"],
    relatedActives: ["vitamin-c", "niacinamide"],
    relatedPairs: ["vitamin-c-and-niacinamide"],
    sections: [
      {
        heading: "The 1960s Origin of the Conflict Rule",
        body: [
          "The claim that Vitamin C (L-ascorbic acid) and Vitamin B3 (niacinamide) cannot be layered traces back to non-cosmetic chemical stability assays conducted in the early 1960s. Researchers combined pure ascorbic acid and niacinamide in unbuffered aqueous solutions and heated them to temperatures exceeding 120°C for hours.",
          "Under those non-physiological thermal conditions, niacinamide underwent hydrolysis into nicotinic acid (niacin). When nicotinic acid is applied topically at high concentrations, it induces peripheral vasodilation — a temporary, harmless vascular reaction known clinically as the 'niacin flush'.",
          "Beauty lore simplified this finding into a universal prohibition: that layering the two cancels both out, or that applying them turns your skin bright red.",
        ],
        callout: {
          type: "myth",
          text: "Myth: Vitamin C and Niacinamide cancel each other out or form an irreversible neutralizing salt on the skin surface. Fact: Modern room-temperature formulations do not hydrolyze niacinamide into nicotinic acid.",
        },
      },
      {
        heading: "What Happens in Ambient Cosmetic Formulations",
        body: [
          "In modern skincare bottles stored at bathroom temperatures (18°C to 24°C), the rate of niacinamide hydrolysis into nicotinic acid is virtually imperceptible. Controlled pharmacokinetic stability trials confirm that L-ascorbic acid and niacinamide can co-exist in solution for weeks before negligible conversion occurs.",
          "While the two molecules can form a weak, reversible 1:1 hydrogen-bonded complex in solution at pH 3.0 to 3.5, this association dissociates rapidly upon topical application to the stratum corneum due to skin surface temperature and lipid solubility gradients.",
        ],
        inciList: ["Ascorbic Acid", "3-O-Ethyl Ascorbic Acid", "Niacinamide", "Nicotinamide"],
      },
      {
        heading: "The Synergistic Biological Reality",
        body: [
          "Rather than conflicting, these two bioactives target complementary cutaneous pathways. Pure L-ascorbic acid functions as a biological reducing agent, donating electrons to neutralize reactive oxygen species (ROS) induced by daytime solar radiation while stimulating collagen-producing fibroblasts.",
          "Niacinamide operates as a precursor to cellular NAD+/NADP+ energy cofactors, stabilizing intercellular lipid synthesis (ceramides, fatty acids) and suppressing the transfer of melanosomes from melanocytes to keratinocytes.",
          "Using them in the same routine delivers photoprotection, barrier support, and tone evening concurrently.",
        ],
        callout: {
          type: "takeaway",
          text: "Takeaway: You can layer Vitamin C and Niacinamide together in your AM routine. If you experience sensory tingling, allow the low-pH Vitamin C serum 60 seconds to absorb before applying your Niacinamide formulation.",
        },
      },
    ],
  },
  {
    id: "blog-formulation-ph",
    slug: "how-cosmetic-formulations-handle-ph",
    title: "The Cutaneous Acid Mantle and Active Formulation pH",
    seoTitle: "Skincare Formulation pH & The Acid Mantle | Miko",
    description:
      "How pH differentials dictate penetration for L-ascorbic acid and direct chemical exfoliants, and how vehicle buffers prevent destabilization.",
    category: "Cosmetic Chemistry",
    publishedAt: "2026-08-28",
    updatedAt: "2026-09-08",
    readTime: "6 min read",
    author: "Miko Formulation Science Team",
    featured: false,
    summary:
      "The outermost surface of human skin maintains a physiological acid mantle with a resting pH between 4.5 and 5.5. Certain cosmetic actives require low pH environments to penetrate, while others degrade if the formulation acid load is too intense. Understanding pH compatibility is why Miko separates certain routines.",
    tags: ["pH", "Acid Mantle", "AHAs", "Ascorbic Acid", "Direct Acids"],
    relatedActives: ["aha-bha", "vitamin-c", "peptides"],
    relatedPairs: ["vitamin-c-and-glycolic-acid", "peptides-and-acids"],
    sections: [
      {
        heading: "The Biological Role of the Skin's Acid Mantle",
        body: [
          "Healthy human skin maintains an acidic surface micro-environment generated by sebum breakdown, sweat-derived lactic acid, and endogenous sodium-hydrogen antiporter systems. This acidic pH (typically 4.7 to 5.5) regulates desquamative enzymes (kallikreins) and supports normal cutaneous microflora.",
          "When you apply a skincare product, the vehicle temporarily shifts this surface pH. Highly buffered formulations resist physiological neutralization longer, while lightweight aqueous solutions rapidly equilibrate to skin surface conditions.",
        ],
      },
      {
        heading: "Why Free Acid Value Matters More Than Total Percentage",
        body: [
          "A 10% glycolic acid serum at pH 4.5 has a drastically lower biological activity than a 5% glycolic acid serum at pH 3.2. This is governed by the Henderson-Hasselbalch equation and the pKa of the acid (3.83 for glycolic acid).",
          "Only un-ionized 'free acid' molecules can diffuse across the lipophilic stratum corneum. As pH rises above the active's pKa, the molecule dissociates into a charged salt that cannot easily penetrate cellular junctions.",
        ],
        inciList: ["Glycolic Acid", "Lactic Acid", "Salicylic Acid", "Citric Acid"],
      },
      {
        heading: "Why Peptides and Strong Direct Acids Separate",
        body: [
          "Signal peptides (such as palmitoyl pentapeptide-4 and copper tripeptide-1) consist of specific amino acid sequences folded into delicate signaling structures. Exposure to prolonged low-pH environments (pH < 3.8) can catalyze the hydrolysis of susceptible peptide amide bonds, splitting the signaling sequence.",
          "For copper peptides specifically, acidic media displaces the coordinated Cu2+ ion from its carrier matrix. This is why Miko recommends using direct acid exfoliants in the evening and delicate peptide complexes on alternate days or in the morning.",
        ],
        callout: {
          type: "takeaway",
          text: "Takeaway: Do not stack low-pH direct acids with delicate copper peptide serums. Separate them into AM vs PM slots to preserve molecular stability.",
        },
      },
    ],
  },
  {
    id: "blog-retinoid-pharmacokinetics",
    slug: "the-pharmacokinetics-of-retinoid-dermatitis",
    title: "The Pharmacokinetics of Retinoid Introduction and Desquamation",
    seoTitle: "Retinoid Acclimation & Epidermal Desquamation | Miko",
    description:
      "Why accelerated desquamation temporarily outpaces intercellular lipid synthesis, and how buffering attenuates erythema and barrier stress.",
    category: "Formulation Science",
    publishedAt: "2026-08-19",
    updatedAt: "2026-09-07",
    readTime: "7 min read",
    author: "Miko Formulation Science Team",
    featured: false,
    summary:
      "Retinoids are the most validated family in topical dermatology, but up to 80% of first-time users experience retinoid dermatitis: erythema, dryness, and barrier micro-fissuring. We examine the biological mechanism of desquamation mismatch and how buffering stabilizes tolerance.",
    tags: ["Retinoids", "Skin Barrier", "Desquamation", "Ceramides"],
    relatedActives: ["retinol", "ceramides", "hyaluronic-acid"],
    relatedPairs: ["retinol-and-glycolic-acid", "ceramides-and-retinol"],
    sections: [
      {
        heading: "How Retinoids Alter Keratinocyte Kinetics",
        body: [
          "Topical vitamin A derivatives (retinol, retinaldehyde, tretinoin) bind to nuclear retinoic acid receptors (RAR and RXR) inside epidermal keratinocytes. This triggers the transcriptional upregulation of cellular proliferation, accelerating epidermal transit time from the normal 28 days down to 14 to 18 days.",
          "Corneocytes detach from desmosomal junctions faster than normal. In an acclimated individual, this leads to a compacted, smooth stratum corneum.",
        ],
      },
      {
        heading: "The Desquamation vs Lipid Synthesis Lag",
        body: [
          "During the first 2 to 4 weeks of introducing a retinoid, an acute biological imbalance occurs: desquamation accelerates immediately, but the synthesis of replacement intercellular lamellar lipids (ceramides, cholesterol, and free fatty acids) lags behind by several days.",
          "With corneocytes shedding before new lipid lamellae can seal the interstices, transepidermal water loss (TEWL) surges. Ambient moisture evaporates rapidly, leading to dehydration, flaking, and heightened penetrability to irritants.",
        ],
        callout: {
          type: "note",
          text: "Clinical Note: Retinoid flaking is not an allergic reaction — it is a transient physiological lag between desquamation speed and lipid synthesis.",
        },
      },
      {
        heading: "The Science of Buffering and Lipid Co-Application",
        body: [
          "Applying a lipid-rich moisturizer containing physiological 3:1:1 equimolar ratios of ceramides, cholesterol, and fatty acids immediately prior to or following retinoid application acts as a synthetic barrier reserve.",
          "This buffering technique attenuates the peak concentration flux across the stratum corneum without reducing cumulative cellular receptor uptake, allowing tolerance to develop with minimal barrier disruption.",
        ],
        inciList: ["Retinol", "Retinal", "Hydroxypinacolone Retinoate", "Ceramide NP", "Phytosphingosine"],
      },
    ],
  },
  {
    id: "blog-sqlite-privacy",
    slug: "on-device-skincare-privacy-architecture",
    title: "Why Your Bathroom Shelf Lives in Local SQLite on Your Phone",
    seoTitle: "On-Device Skincare Privacy Architecture | Miko",
    description:
      "Why Miko stores routine and life-state data in local encrypted SQLite without cloud databases, remote user accounts, or tracking.",
    category: "Privacy & Architecture",
    publishedAt: "2026-08-10",
    updatedAt: "2026-09-05",
    readTime: "5 min read",
    author: "Miko Engineering & Security",
    featured: false,
    summary:
      "Skincare data is intimate health data: it reveals pregnancy status, medical treatments, dermatological conditions, and daily personal routines. Miko was architected without a user table, remote database, or account system. Everything is computed and stored locally on your device.",
    tags: ["Privacy", "SQLite", "On-Device Compute", "Data Architecture"],
    relatedActives: [],
    relatedPairs: [],
    sections: [
      {
        heading: "Skincare Is Intimate Health Telemetry",
        body: [
          "Most wellness applications treat bathroom shelf items as generic e-commerce products. In reality, a person's skincare roster is sensitive biometric telemetry. Scanning tretinoin indicates medical acne management; adding hydroquinone indicates hyperpigmentation or melasma treatment; toggling pregnancy flags indicates a reproductive event before even close relatives are told.",
          "Centralized user databases create an unnecessary surface for subpoena, corporate acquisition, and data brokerage.",
        ],
      },
      {
        heading: "The Zero-Database Architecture",
        body: [
          "Miko does not have a user table with your email or name on it — because there is no cloud database. Your products, sensitivities, and life-state answers reside in an encrypted SQLite database stored in your iOS sandbox.",
          "Conflict detection and weekly routine generation are pure algorithmic functions evaluated locally by your phone's processor using the onboard active database.",
        ],
        callout: {
          type: "note",
          text: "Architecture Principle: The most secure cloud database is the one you never build. Miko functions entirely on your device.",
        },
      },
      {
        heading: "The Single Stateless Exception: Label OCR",
        body: [
          "The sole network interaction in Miko occurs when you point your camera at a physical packaging label. The cropped image is transmitted over TLS to a stateless optical character recognition (OCR) model to extract the raw text of the 32 INCI names.",
          "The image and text are not tied to any user identity, are not logged into a profile, and are purged after parsing. Your shelf roster and pregnancy status are never transmitted across the network.",
        ],
      },
    ],
  },
  {
    id: "blog-inci-labels",
    slug: "why-skincare-labels-use-obscure-inci-names",
    title: "How to Read an INCI Label: The 1% Rule and Active Placement",
    seoTitle: "How to Read INCI Cosmetic Ingredient Labels | Miko",
    description:
      "How the International Nomenclature of Cosmetic Ingredients dictates ingredient ordering, what the 1% concentration threshold means, and active extraction.",
    category: "Cosmetic Chemistry",
    publishedAt: "2026-08-01",
    updatedAt: "2026-09-02",
    readTime: "6 min read",
    author: "Miko Formulation Science Team",
    featured: false,
    summary:
      "Cosmetic packaging uses the International Nomenclature of Cosmetic Ingredients (INCI), a global standardization that can obscure familiar active ingredients behind chemical Latin. We break down the legal rules governing ingredient lists, the 1% declaration line, and how to spot marketing fluff.",
    tags: ["INCI", "Label Reading", "Formulation", "Cosmetic Regulations"],
    relatedActives: ["niacinamide", "hyaluronic-acid", "aha-bha"],
    relatedPairs: [],
    sections: [
      {
        heading: "The Legal Mandate of INCI Formatting",
        body: [
          "Cosmetic ingredient declarations are strictly regulated across major jurisdictions (FDA in the United States, Regulation EC No 1223/2009 in the European Union). Manufacturers cannot simply write 'Vitamin C' or 'Green Tea Extract' — they must use standardized botanical and chemical names.",
          "For example, green tea extract appears as *Camellia Sinensis Leaf Extract*, and Vitamin B5 is declared as *Panthenol*. This prevents confusing marketing synonyms and enables universal allergy identification.",
        ],
      },
      {
        heading: "The 1% Line of Demarcation",
        body: [
          "Ingredients present in concentrations greater than 1% must be listed in descending order of predominance by weight. If water, glycerin, and niacinamide appear first, second, and third, those form the predominant vehicle mass.",
          "However, once an ingredient falls below 1% concentration, regulatory statutes allow manufacturers to list remaining ingredients in any arbitrary order. Brands frequently list prestigious plant extracts or peptides ahead of preservatives like phenoxyethanol (which is capped at 1%), giving the false impression of high concentration.",
        ],
        callout: {
          type: "takeaway",
          text: "Pro Tip: Look for Phenoxyethanol on a label. Anything listed after it is almost certainly formulated at less than 1% concentration.",
        },
      },
      {
        heading: "High-Potency Bioactives Do Not Need High Percentages",
        body: [
          "A common consumer misconception is that low placement on an INCI list equates to poor efficacy. For hydrating humectants like hyaluronic acid, 1% to 2% is a physical saturation limit that creates a thick gel; 5% pure hyaluronic acid would form an unusable solid rubber.",
          "Similarly, retinoids (0.025% to 0.3%) and copper peptides (0.05% to 0.1%) operate at cellular signaling thresholds far below the 1% mark. Miko identifies these biologically active thresholds based on pharmacology, not line position.",
        ],
        inciList: ["Sodium Hyaluronate", "Phenoxyethanol", "Retinol", "Copper Tripeptide-1"],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug || p.id === slug);
}
