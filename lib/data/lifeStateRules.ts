import { LifeStateMode } from "../types";

export const LIFE_STATE_MODES: LifeStateMode[] = [
  {
    id: "all",
    name: "Standard Mode",
    badge: "All products active",
    summary: "Evaluates standard ingredient layering and skin sensitivities across your full bathroom shelf.",
    deferralNotice: "Standard cosmetic guidance based on published formulation compatibility.",
    avoidedActives: [],
  },
  {
    id: "pregnancy",
    name: "Pregnancy",
    badge: "13 rules flagged",
    summary:
      "Greys out products containing retinoids, high-concentration salicylic acid, and hydroquinone. Reconstructs your weekly routine strictly from your remaining permitted products.",
    deferralNotice:
      "Commonly advised against during pregnancy. Confirm anything medical with your doctor.",
    avoidedActives: ["retinol", "aha-bha"], // Retinoids and high-strength BHAs
  },
  {
    id: "breastfeeding",
    name: "Breastfeeding",
    badge: "3 rules flagged",
    summary:
      "Flags systemic absorption actives commonly advised against during lactation, maintaining gentle barrier and hydration layers.",
    deferralNotice:
      "Commonly advised against during lactation. Confirm anything medical with your doctor.",
    avoidedActives: ["retinol"],
  },
  {
    id: "isotretinoin",
    name: "Isotretinoin (Oral)",
    badge: "4 rules flagged",
    summary:
      "Locks all chemical exfoliants, direct acids, retinoids, and drying astringents due to extreme cutaneous fragility and systemic sebaceous gland atrophy.",
    deferralNotice:
      "Commonly advised against while taking oral retinoids. Confirm anything medical with your doctor.",
    avoidedActives: ["retinol", "aha-bha", "fragrance-free"],
  },
  {
    id: "postProcedure",
    name: "Post-Procedure",
    badge: "5 rules flagged",
    summary:
      "Temporarily locks chemical peels, retinoids, and potent L-ascorbic acid after laser or microneedling. Re-routes focus exclusively to physiological barrier recovery.",
    deferralNotice:
      "Commonly advised against following ablative or needle procedures. Confirm anything medical with your doctor.",
    avoidedActives: ["retinol", "aha-bha", "vitamin-c", "fragrance-free"],
  },
];
