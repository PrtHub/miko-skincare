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

export interface BlogSection {
  heading: string;
  body: string[];
  callout?: {
    type: "note" | "myth" | "takeaway";
    text: string;
  };
  inciList?: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  category: "Cosmetic Chemistry" | "Myth Busters" | "Privacy & Architecture" | "Formulation Science";
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  author: string;
  summary: string;
  featured?: boolean;
  sections: BlogSection[];
  relatedActives?: string[];
  relatedPairs?: string[];
  tags: string[];
}

export interface GuideStep {
  stepNumber: string;
  title: string;
  timing: string;
  instructions: string;
  rationale: string;
  recommendedTextures: string[];
  watchOutFor?: string;
}

export interface GuideArticle {
  id: string;
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  category: "Starting Actives" | "Routine Architecture" | "Life-State" | "Barrier Restoration";
  level: "Beginner" | "Intermediate" | "Advanced";
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  summary: string;
  keyTakeaways: string[];
  steps: GuideStep[];
  commonMistakes: string[];
  recommendedActives: string[];
  relatedGuides?: string[];
  relatedPairs?: string[];
}

export interface ConcernActiveMapping {
  activeName: string;
  activeSlug: string;
  role: string;
  mechanism: string;
}

export interface AvoidedIngredientForConcern {
  ingredient: string;
  reason: string;
}

export interface SkinConcern {
  id: string;
  slug: string;
  name: string;
  seoTitle: string;
  tagline: string;
  description: string;
  biologicalMechanism: string;
  primaryActives: ConcernActiveMapping[];
  secondaryActives: ConcernActiveMapping[];
  activesToAvoid: AvoidedIngredientForConcern[];
  amRoutineStrategy: string;
  pmRoutineStrategy: string;
  faqs: { question: string; answer: string }[];
  relatedPairs?: string[];
}

export interface RoutineStepItem {
  order: string;
  category: string;
  productType: string;
  purpose: string;
  texture: string;
}

export interface SkinTypeRoutine {
  id: string;
  slug: string;
  skinType: string;
  seoTitle: string;
  tagline: string;
  description: string;
  characteristics: string[];
  textureStrategy: string;
  amSteps: RoutineStepItem[];
  pmSteps: RoutineStepItem[];
  middayRule: string;
  weeklyActiveCadence: string;
  pitfallsToAvoid: string[];
  recommendedActives: string[];
}

export interface SkinSensitivity {
  id: string;
  slug: string;
  name: string;
  seoTitle: string;
  tagline: string;
  description: string;
  commonInci: string[];
  biologicalMechanism: string;
  reactionSymptoms: string[];
  toleratedAlternatives: string[];
  labelReadingTip: string;
  relatedActives?: string[];
}


