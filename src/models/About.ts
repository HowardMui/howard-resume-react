export type SkillCardCategory = 'web & mobile' | 'backend' | 'cloud' | 'others';

export interface AboutSkillSetData {
  languages: React.ReactNode[];
  category: SkillCardCategory;
  icon?: React.ReactNode;
}
