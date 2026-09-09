import { FAQItem } from "../types";

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-retinol-vitc",
    question: "Can I use retinol and vitamin C together?",
    shortAnswer: "Commonly advised to separate: Vitamin C in the morning, Retinol at night.",
    detailedAnswer: [
      "Pure L-ascorbic acid operates optimally at a low acidic pH (~3.0 to 3.5) and provides photoprotective antioxidant defense against daytime UV and environmental stressors.",
      "Retinoids (such as retinol, retinal, and tretinoin) function at a near-neutral physiological pH and promote cellular turnover. Applying both simultaneously increases cutaneous irritation without improving clinical outcomes.",
      "Miko automatically assigns Vitamin C serums to your AM slot and retinoids to your PM slot to maximize biological synergy while preventing barrier irritation.",
    ],
    category: "conflicts",
  },
  {
    id: "faq-vitc-niacinamide",
    question: "Do vitamin C and niacinamide cancel each other out?",
    shortAnswer: "No. That is an outdated myth from 1960s non-physiological laboratory experiments.",
    detailedAnswer: [
      "The belief originated from experiments conducted in the 1960s where unformulated ascorbic acid and niacinamide were combined at extreme, boiling temperatures (>120°C) under non-cosmetic conditions, producing nicotinic acid.",
      "In modern skincare formulations stored at ambient temperatures, niacinamide and ascorbic acid are chemically stable and can be layered without negative interaction.",
      "Niacinamide provides barrier support and anti-glycation benefits, which nicely complements the collagen-supporting and antioxidant properties of Vitamin C.",
    ],
    category: "conflicts",
    isMyth: true,
  },
  {
    id: "faq-pregnancy",
    question: "What skincare ingredients should I avoid while pregnant?",
    shortAnswer: "Prescription retinoids, OTC retinol/retinal, and high-strength salicylic acid are commonly advised against.",
    detailedAnswer: [
      "Retinoids (both oral isotretinoin and topical derivatives including retinol, retinaldehyde, and adapalene) are contraindicated or commonly advised against due to developmental teratogenicity concerns.",
      "High concentrations of salicylic acid (BHA peels) and skin lighteners like hydroquinone are also typically paused during pregnancy.",
      "When you toggle Pregnancy Mode in Miko, these ingredients are immediately locked out on your shelf, and your routine is rebuilt using gentle alternatives like azelaic acid, hyaluronic acid, and ceramide complexes.",
      "Important deferral: Confirm anything medical with your doctor or OB-GYN.",
    ],
    category: "pregnancy",
  },
  {
    id: "faq-application-order",
    question: "What order should I put my skincare products on in?",
    shortAnswer: "From thinnest texture to thickest texture, ending with sunscreen in the morning and oil/cream at night.",
    detailedAnswer: [
      "Water-based, low-viscosity solutions (cleanser, aqueous toners, light essences) must penetrate first. Lipid-rich formulations (emulsions, creams, face oils) form occlusive layers on the surface of the stratum corneum.",
      "If you apply a thick cream before a watery active serum, the lipid film severely restricts the aqueous active from contacting the epidermal surface.",
      "Sunscreen is always the final step of your morning routine: UV filters must form an undisturbed, uniform protective matrix across the skin surface.",
    ],
    category: "routine",
  },
  {
    id: "faq-start-retinol",
    question: "How do I introduce a retinoid without wrecking my skin barrier?",
    shortAnswer: "Start twice weekly, buffer with a ceramide moisturizer, and prioritize barrier recovery.",
    detailedAnswer: [
      "Retinoids accelerate desquamation faster than the stratum corneum can synthesize new intercellular lipids, frequently causing retinoid dermatitis (erythema, flaking, stinging).",
      "The recommended protocol is starting 2 evenings per week (e.g., Tuesday and Friday) separated by hydrating and barrier-restorative evenings.",
      "Buffering or the 'sandwich method' (moisturizer, retinoid, moisturizer) significantly attenuates micro-irritation while allowing cellular tolerance to develop.",
    ],
    category: "routine",
  },
  {
    id: "faq-run-out",
    question: "How does Miko calculate when a bottle will run out?",
    shortAnswer: "Based on standard dispenser dosages (0.2ml–1.0ml per use) and your scheduled weekly frequency.",
    detailedAnswer: [
      "A typical serum dropper dispenses approximately 0.25ml to 0.4ml per application. A standard 30ml bottle used once daily provides roughly 75–100 applications (approximately 2.5 to 3 months).",
      "Miko calculates this estimate locally using your bottle volume and scheduled slots. It is an honest mathematical estimate to help you avoid sudden gaps in your routine.",
    ],
    category: "general",
  },
  {
    id: "faq-order-matter",
    question: "Does the order of skincare actually matter?",
    shortAnswer: "Yes. Molecular weight, viscosity, and vehicle formulation dictate skin absorption.",
    detailedAnswer: [
      "Formulations are engineered with specific vehicles (water, alcohols, liposomes, heavy oils). Applying an occlusive petrolatum or silicone balm before an aqueous L-ascorbic acid serum prevents active penetration.",
      "Furthermore, pairing incompatible pH environments concurrently can impair efficacy.",
    ],
    category: "routine",
  },
  {
    id: "faq-data-privacy",
    question: "Where is my skincare and personal data stored?",
    shortAnswer: "Exclusively in a local database on your phone. There is no user account or remote profile.",
    detailedAnswer: [
      "Miko has no accounts, no sign-up, and no user rows in a database. Your shelf, product history, and life-state answers live in an encrypted SQLite database on your device.",
      "The single exception is when you take a photograph of a label: the image is sent to an OCR model to parse the INCI ingredient text. The image and text are not tied to an identity, and your life-state status is never sent across the network.",
    ],
    category: "general",
  },
];
