import { PortfolioData } from 'models';

export const PORTFOLIO_DATA: PortfolioData[] = [
  {
    category: ['frontend', 'backend'],
    image: null,
    // image: require('assets/images/Portfolio/MyWeb/CompanyWeb/home-page.png'),
    // video: null,
    video: require('assets/video/React-company-website.mp4'),
    url: 'https://howardmui-company.netlify.app/',
    gitHubLink: 'https://github.com/HowardMui/HowardMui-Company-ReactProject',
    title: 'My Company Website',
    content:
      'It is a demo static company website for the React and style showcase.  MongoDb is integrated into the contact form for the data storage. ',
    tags: [
      { tag: 'React', color: '#ADD8E6' },
      { tag: 'Nodejs', color: '#D2B4BC' },
      { tag: 'MongoDb', color: '#90EE90' },
    ],
  },
  {
    category: ['frontend'],
    image: null,
    // image: require('assets/gif/HowardMui-fetch-project.gif'),
    // video: null,
    video: require('assets/video/react-fetch-pexel.mp4'),
    url: 'https://howardmui-fetchpexels-project.netlify.app/',
    gitHubLink: 'https://github.com/HowardMui/Howard-fetchAPI-pexels',
    title: 'My Fetch Images Website',
    content:
      'Fetch the Pexel images via my Pexel token and integrate it to the website.  The user may search images via the search bar.  Press load more button for fetch more images. ',
    tags: [
      {
        tag: 'React',
        color: '#ADD8E6',
      },
      {
        tag: 'Nodejs',
        color: '#D2B4BC',
      },
    ],
  },
  // {
  //   category: 'appicidea',
  //   image: require('assets/images/Portfolio/Weave/event-calendar.png'),
  //   video: null,
  //   url: null,
  //   gitHubLink: null,
  //   title: 'SV Web Application',
  //   content:
  //     'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
  //   tags: ['React', 'Nodejs'],
  // },
  // {
  //   category: 'appicidea',
  //   image: require('assets/images/Portfolio/Weave/event-calendar.png'),
  //   video: null,
  //   url: null,
  //   gitHubLink: null,
  //   title: 'SV CMS',
  //   content:
  //     'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
  //   tags: ['Typescript', 'Reactjs', 'Nodejs'],
  // },
  // {
  //   category: 'appicidea',
  //   image: require('assets/images/Portfolio/Weave/event-calendar.png'),
  //   video: null,
  //   url: null,
  //   gitHubLink: null,
  //   title: 'Weave-living CMS',
  //   content:
  //     'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
  //   tags: ['Typescript', 'React', 'Nodejs'],
  // },
  // {
  //   category: 'appicidea',
  //   image: require('assets/images/Portfolio/Weave/event-calendar.png'),
  //   video: null,
  //   url: null,
  //   gitHubLink: null,
  //   title: 'Fader CMS',
  //   content:
  //     'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
  //   tags: ['Typescript', 'React', 'Nodejs'],
  // },
  // {
  //   category: 'appicidea',
  //   image: require('assets/images/Portfolio/Weave/event-calendar.png'),
  //   video: null,
  //   url: null,
  //   gitHubLink: null,
  //   title: 'Man Space Mobile App',
  //   content:
  //     'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
  //   tags: ['Typescript', 'React-Native', 'Nodejs'],
  // },
];
