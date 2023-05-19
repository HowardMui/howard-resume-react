export type SkillCardCategory =
  | 'web & mobile'
  | 'backend'
  | 'devops'
  | 'others';

export interface AboutSkillSetData {
  languages: string[];
  category: SkillCardCategory;
  icon?: React.ReactNode;
}
