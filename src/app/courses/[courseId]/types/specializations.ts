export interface Reason {
  id: number;
  text: string;
  details?: string[];
}

export interface Specialization {
  id: number;
  title: string;
  description?: string;
  reasons: Reason[];
}
