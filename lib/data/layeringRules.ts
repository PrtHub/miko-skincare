import { LayeringRule } from "../types";

export const LAYERING_RULES: LayeringRule[] = [
  {
    id: "vitc-niacinamide",
    slug: "vitamin-c-and-niacinamide",
    active1: "L-Ascorbic Acid (Vit C)",
    active2: "Niacinamide (Vit B3)",
    verdict: "fine",
    headline: "Myth debunked: compatible to use together",
    reasoning:
      "The persistent belief that niacinamide and ascorbic acid cancel each other out stems from 1960s laboratory studies conducted at extreme temperatures (>120°C) and highly non-physiological acidities. Modern clinical formulations at room temperature do not form irreversible complexes or cause flushing in normal usage.",
    guidance: "Layer either order or use in the same AM/PM slot. No wait time is strictly required.",
    isMythBuster: true,
    mythExplanation:
      "Myth: 'Vitamin C and Niacinamide cancel each other out or cause severe flushing.' Fact: Outdated 1960s laboratory heating experiments do not apply to modern ambient formulations.",
  },
  {
    id: "retinol-aha",
    slug: "retinol-and-glycolic-acid",
    active1: "Retinoids",
    active2: "AHA & BHA Acids",
    verdict: "separate",
    headline: "Separate routines: alternate evenings",
    reasoning:
      "Both ingredients increase epidermal cell transit time and exfoliation rates through independent pathways. Layering them simultaneously elevates transepidermal water loss (TEWL) and drastically increases the likelihood of irritant contact dermatitis.",
    guidance: "Use on alternate nights, or use AHA/BHA in the morning and your retinoid in the evening.",
  },
  {
    id: "retinol-bp",
    slug: "retinol-and-benzoyl-peroxide",
    active1: "Retinoids",
    active2: "Benzoyl Peroxide",
    verdict: "avoid",
    headline: "Avoid concurrent application",
    reasoning:
      "Benzoyl peroxide is a potent oxidizing agent that degrades traditional, non-encapsulated retinol and tretinoin molecules into inactive compounds, neutralizing efficacy while amplifying follicular irritation.",
    guidance: "Use Benzoyl Peroxide in the morning and Retinol in the evening, or alternate days entirely.",
  },
  {
    id: "retinol-hyaluronic",
    slug: "retinol-and-hyaluronic-acid",
    active1: "Retinoids",
    active2: "Hyaluronic Acid & Polyols",
    verdict: "fine",
    headline: "Highly compatible: ideal pairing",
    reasoning:
      "Hyaluronic acid and glycerin hydrate the stratum corneum without altering skin surface pH or enzymatic conversion of retinoids. Applying humectants before or after retinoids buffers against dry desquamation.",
    guidance: "Apply hyaluronic acid to damp skin, allow to dry down, then apply your retinoid.",
  },
  {
    id: "retinol-niacinamide",
    slug: "retinol-and-niacinamide",
    active1: "Retinoids",
    active2: "Niacinamide (Vit B3)",
    verdict: "fine",
    headline: "Synergistic: enhances barrier tolerance",
    reasoning:
      "Niacinamide promotes endogenous ceramide synthesis and stabilizes stratum corneum integrity, directly attenuating the initial erythema and flaking frequently triggered by retinoid introduction.",
    guidance: "Can be used simultaneously. Niacinamide works well applied directly prior to retinoid application.",
  },
  {
    id: "peptides-acids",
    slug: "peptides-and-acids",
    active1: "Signal Peptides & Copper",
    active2: "AHA & BHA Acids",
    verdict: "separate",
    headline: "Separate routines: pH sensitivity",
    reasoning:
      "Strong acid products (pH < 3.8) can cause hydrolysis of peptide bonds and dissociate copper ions from copper peptide carrier structures, impairing targeted cellular signaling.",
    guidance: "Use direct acids in the evening and peptides in the morning, or on alternate days.",
  },
  {
    id: "vitc-aha",
    slug: "vitamin-c-and-glycolic-acid",
    active1: "L-Ascorbic Acid (Vit C)",
    active2: "AHA & BHA Acids",
    verdict: "separate",
    headline: "Separate routines: excessive low-pH burden",
    reasoning:
      "Pure L-ascorbic acid requires an acidic pH (approx. 3.0) for cutaneous penetration. Stacking it with chemical exfoliants (glycolic or salicylic acid) compounds acid stress on the acid mantle.",
    guidance: "Dedicate Vitamin C to AM photoprotection routines and reserve AHA/BHA exfoliants for PM.",
  },
  {
    id: "ceramides-retinol",
    slug: "ceramides-and-retinol",
    active1: "Ceramides & Lipids",
    active2: "Retinoids",
    verdict: "fine",
    headline: "Ideal pairing: essential barrier support",
    reasoning:
      "Ceramides, cholesterol, and free fatty acids replenish intercellular lipids depleted during retinoid-induced epidermal turnover, preventing micro-fissuring and barrier breakdown.",
    guidance: "Layer moisturizer containing ceramides over retinoid (the sandwich technique can be used if sensitive).",
  },
];

export function getRuleByPairSlug(slug: string): LayeringRule | undefined {
  // Check exact slug or inverted format (e.g. niacinamide-and-vitamin-c)
  return LAYERING_RULES.find((r) => {
    if (r.slug === slug) return true;
    const parts = r.slug.split("-and-");
    if (parts.length === 2) {
      const inverted = `${parts[1]}-and-${parts[0]}`;
      if (inverted === slug) return true;
    }
    return false;
  });
}
