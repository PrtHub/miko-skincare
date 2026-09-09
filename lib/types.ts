export type ActiveFamily =
  | "retinoid"
  | "ahaBha"
  | "vitaminC"
  | "barrier"
  | "hydrator"
  | "peptide"
  | "brightening"
  | "soothing"
  | "fragrance";

export type IngredientLevel = "good" | "neutral" | "watch" | "avoid";

export type VerdictType = "fine" | "separate" | "avoid";

export interface ActiveInfo {
  id: string;
  slug: string;
  name: string;
  family: ActiveFamily;
  familyDisplayName: string;
  color: string;
  bgLight: string;
  description: string;
  mechanism?: string;
  commonInci: string[];
  phRange?: string;
  bestUsedIn: "AM" | "PM" | "AM/PM";
  concerns?: string[];
  pairsWith?: string[];
  separateFrom?: string[];
}

export interface LayeringRule {
  id: string;
  slug: string;
  active1: string;
  active2: string;
  verdict: VerdictType;
  headline: string;
  reasoning: string;
  guidance: string;
  isMythBuster?: boolean;
  mythExplanation?: string;
}

export interface LifeStateMode {
  id: "all" | "pregnancy" | "breastfeeding" | "isotretinoin" | "postProcedure";
  name: string;
  badge: string;
  summary: string;
  deferralNotice: string;
  avoidedActives: string[];
}

export interface PregnancyIngredient {
  slug: string;
  name: string;
  commonInci: string[];
  status: "avoid" | "watch" | "permitted";
  statusLabel: string;
  summary: string;
  pharmacology: string;
  alternatives: string[];
  deferralNotice: string;
}

export interface ShelfProduct {
  id: string;
  name: string;
  category: "cleanser" | "toner" | "essence" | "serum" | "moisturizer" | "sunscreen" | "oil";
  stepOrder: number;
  texture: "water" | "light-gel" | "viscous-serum" | "emulsion" | "rich-cream";
  dominantActive: string;
  activeFamily: ActiveFamily;
  inciCount: number;
  sizeMl: number;
  remainingPercent: number;
  level: IngredientLevel;
  slots: ("AM" | "Midday" | "PM")[];
  days: ("Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun")[];
  blockedInModes?: ("pregnancy" | "breastfeeding" | "isotretinoin" | "postProcedure")[];
}

export interface FAQItem {
  id: string;
  question: string;
  shortAnswer: string;
  detailedAnswer: string[];
  category: "routine" | "conflicts" | "pregnancy" | "general";
  isMyth?: boolean;
}
