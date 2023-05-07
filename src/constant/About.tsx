import { AboutSkillSetData } from 'models';

import ReactIcon from 'assets/icons/react.svg';
import CloudIcon from 'assets/icons/cloud.svg';
import ServerIcon from 'assets/icons/server.svg';
import CubeIcon from 'assets/icons/cubes.svg';

export const MY_SKILL_FLIP_CARD_DATA: AboutSkillSetData[] = [
  {
    category: 'web & mobile',
    languages: [
      'HTML',
      'CSS',
      'JAVASCRIPT',
      'TYPESCRIPT',
      'REACT.JS',
      'REACT-NATIVE',
    ],
    icon: (
      <img
        src={ReactIcon}
        alt={'react'}
        draggable={false}
        width={65}
        height={65}
      />
    ),
  },
  {
    category: 'backend',
    languages: ['NODE.JS', 'MONGODB', 'PROGREST SQL'],
    // icon: <img src="https://img.icons8.com/dusk/64/null/server.png" />,
    icon: (
      <img
        src={ServerIcon}
        alt={'react'}
        draggable={false}
        width={65}
        height={65}
      />
    ),
  },
  {
    category: 'devops',
    languages: ['DOCKER', 'KUBERNETES', 'ARGOCD', 'GRAFANA', 'MICROSERVICE'],
    icon: (
      <img
        src={CloudIcon}
        alt={'react'}
        draggable={false}
        width={65}
        height={65}
      />
    ),
  },
  {
    category: 'others',
    languages: [
      'FIRGMA',
      'ADOBE AI',
      'ADOBE XD',
      'ADOBE PR',
      'GIT',
      'BITBUCKET',
    ],
    icon: (
      <img
        src={CubeIcon}
        alt={'react'}
        draggable={false}
        width={65}
        height={65}
      />
    ),
  },
];
