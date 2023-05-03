import { useInView, useAnimate } from 'framer-motion';
import 'assets/scss/Components/Skills/ProgressBar.scss';
import { useEffect } from 'react';
import { SkillData } from 'models/SkillSet';

interface Props {
  skill: SkillData;
}

export const ProgressBar = ({ skill }: Props) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { width: `${skill.percentage}%` });
    }
  }, [animate, isInView, scope, skill.percentage]);

  return (
    <div className="container mb-5">
      <div className="label d-flex justify-content-between w-100 mb-2">
        <div className="language-name">{skill.language}</div>
        <div className="skill-percentage">{`${skill.percentage}%`}</div>
      </div>
      <div className="progress-bar-container">
        <div className="inner-bar bg-warning" ref={scope}></div>
      </div>
    </div>
  );
};
