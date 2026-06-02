export interface DivergenceConfig {
  triggerInterval: number;
  entropyFloor: number;
  structuralSearch: boolean;
  maxNoveltyBudget: number;
}

export interface OutlierShieldConfig {
  anomalyThreshold: number;
  gracePeriod: number;
  investigationRoute: 'tribunal' | 'assertion-router' | 'manual';
  falsePositiveTolerance: number;
}

export interface ProtectedOutlier {
  id: string;
  content: string;
  anomalyScore: number;
  detectedAt: Date;
  graceExpiresAt: Date;
  status: 'protected' | 'investigating' | 'promoted' | 'archived';
  investigationNotes?: string;
}
