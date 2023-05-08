import { TimeLineData } from 'models';
import CityuIcon from 'assets/images/WorkAndEdu/cityu-old.png';
import HKBUIcon from 'assets/images/WorkAndEdu/hkbu.png';
import KTSSSIcon from 'assets/images/WorkAndEdu/Kts_ss_logo.png';
import LegoIcon from 'assets/images/WorkAndEdu/Legco-logo.png';
import ResolveIcon from 'assets/images/WorkAndEdu/resolve.jpeg';
import AppicideaIcon from 'assets/images/WorkAndEdu/appicidea.png';

export const WORK_SUMMARY = '';

export const MT_JOURNEY: TimeLineData[] = [
  {
    company: 'Appicidea IT Solutions Limited',
    title: 'Front-end developer',
    description: [
      'Developed and implemented CMS, web and moblie applications with React, React Native, Typescript',
      'Mainly responsible for frontend development using React and React Native',

      'Work closely with colleagues to develop business logic, system and design',

      'Participate in scrum activities and practice Agile methodologies',
    ],
    dateRange: 'Jun 2022 - Sep 2023',
    school: null,
    icon: <img src={AppicideaIcon} alt={'resolve'} width={30} height={30} />,
  },
  {
    company: 'Resolve Technology Limited',
    title: 'Digital Operation Center Engineer',
    description: [
      'Monitor the entire operation of virtual banks, including networks, performances of platforms and IT services',

      'Execute problem-shooting to review the error log via Rancher and Graylog',

      'Conduct and deploy change tasks and patches via AWS and CyberArt',
    ],
    dateRange: 'Aug 2021 - Apr 2022',
    school: null,
    icon: <img src={ResolveIcon} alt={'resolve'} width={30} height={30} />,
  },
  {
    company: 'Wu Chi Wai Legislative Councillor',
    title: 'Mr. Wu Chi Wai Legislative Councillor Assistant',
    description: [
      'Conducted administrative tasks, followed up with help-seeking cases and managed the social networking accounts',

      'Designed promotion materials, including leaflets, flyers and posters',

      'Arranged meetings with help-seekers',
    ],
    dateRange: 'Sep 2019 - Dec 2020',
    school: null,
    icon: <img src={LegoIcon} alt={'lego-hk'} width={30} height={30} />,
  },
  {
    company: null,
    description: null,
    school: 'Hong Kong Baptist University',
    dateRange: '2017 - 2019',
    title: 'Bachelor of Social Sciences (Honours) In Social Policy',
    icon: <img src={HKBUIcon} alt={'HKBU'} width={30} height={30} />,
  },
  {
    company: null,
    description: null,
    school: 'Community College of City University',
    dateRange: '2015 - 2017',
    title: 'Associate of Business Administration in Marketing',
    icon: <img src={CityuIcon} alt={'cityu'} width={40} height={40} />,
  },
  {
    company: null,
    description: null,
    school: 'Kowloon Tong School (Secondary Section)',
    dateRange: '2009 - 2015',
    title: 'Secondary Graduation',
    icon: <img src={KTSSSIcon} alt={'KTSSS'} width={40} height={40} />,
  },
];
