import { PortfolioData } from 'models';

export const PORTFOLIO_DATA: PortfolioData[] = [
  {
    category: 'my-work',
    image: null,
    // image: require('assets/images/Portfolio/MyWeb/CompanyWeb/home-page.png'),
    // video: null,
    video: require('assets/video/React-company-website.mp4'),
    url: 'https://howardmui-company.netlify.app/',
    gitHubLink: 'https://github.com/HowardMui/HowardMui-Company-ReactProject',
    title: 'My Company Website',
    content:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: ['React', 'Nodejs', 'MongoDb'],
  },
  {
    category: 'my-work',
    image: null,
    // image: require('assets/images/Portfolio/MyWeb/FetchWeb/fetch-page.png'),
    // video: null,
    video: require('assets/video/HowardMui-fetch-project.mp4'),
    url: 'https://howardmui-fetchpexels-project.netlify.app/',
    gitHubLink: 'https://github.com/HowardMui/Howard-fetchAPI-pexels',
    title: 'My Fetch Images Website',
    content:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: ['React', 'Nodejs'],
  },
  {
    category: 'appicidea',
    image: require('assets/images/Portfolio/Weave/event-calendar.png'),
    video: null,
    url: null,
    gitHubLink: null,
    title: 'SV Web Application',
    content:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: ['React', 'Nodejs'],
  },
  {
    category: 'appicidea',
    image: require('assets/images/Portfolio/Weave/event-calendar.png'),
    video: null,
    url: null,
    gitHubLink: null,
    title: 'SV CMS',
    content:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: ['Typescript', 'Reactjs', 'Nodejs'],
  },
  {
    category: 'appicidea',
    image: require('assets/images/Portfolio/Weave/event-calendar.png'),
    video: null,
    url: null,
    gitHubLink: null,
    title: 'Weave-living CMS',
    content:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: ['Typescript', 'React', 'Nodejs'],
  },
  {
    category: 'appicidea',
    image: require('assets/images/Portfolio/Weave/event-calendar.png'),
    video: null,
    url: null,
    gitHubLink: null,
    title: 'Fader CMS',
    content:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: ['Typescript', 'React', 'Nodejs'],
  },
  {
    category: 'appicidea',
    image: require('assets/images/Portfolio/Weave/event-calendar.png'),
    video: null,
    url: null,
    gitHubLink: null,
    title: 'Man Space Mobile App',
    content:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: ['Typescript', 'React-Native', 'Nodejs'],
  },
];
