import { AboutSkillSetData } from 'models';

import ReactIcon from 'assets/icons/react.svg';
import CloudIcon from 'assets/icons/cloud.svg';
import ServerIcon from 'assets/icons/server.svg';
// import CubeIcon from 'assets/icons/cubes.svg';
import CubeIcon from 'assets/icons/cube-bg.svg';

export const MY_SKILL_FLIP_CARD_DATA: AboutSkillSetData[] = [
  {
    category: 'web & mobile',
    languages: ['HTML', 'CSS', 'TYPESCRIPT', 'REACT', 'REACT-NATIVE', 'NEXTJS'],
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
    languages: [
      'NODEJS',
      'NESTJS',
      'MYSQL',
      'SWAGGER',
      <div>
        ORM
        <br />
        <p className="mb-0">- SEQUELIZE</p>
        <p className="mb-0">- PRISMA</p>
      </div>,
      'REDIS',
    ],
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
    category: 'cloud',
    languages: [
      'DOCKER',
      <div>
        AWS
        <br />
        <p className="mb-0">- EC2</p>
        <p className="mb-0">- S3</p>
        <p className="mb-0">- LAMBDA</p>
        <p className="mb-0">- CLOUDFRONT</p>
        <p className="mb-0">- ROUTE53</p>
        <p className="mb-0">- ACM</p>
      </div>,
    ],
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
    languages: ['GIT', 'BITBUCKET', 'FIRGMA', 'ADOBE AI, Xd, PR', 'MS OFFICE'],
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
