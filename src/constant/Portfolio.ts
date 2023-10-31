import { PortfolioData } from 'models';

export const PORTFOLIO_DATA: PortfolioData[] = [
  {
    category: ['frontend'],
    image: require('assets/gif/react-company-website.gif'),
    video: null,
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
    image: require('assets/gif/howardMui-fetch-project.gif'),
    video: null,
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
  {
    category: ['backend'],
    image: require('assets/images/Portfolio/SocialMedia/restAPI.png'),
    video: null,
    url: 'https://api.howardmui-blog-portfolio.net/api',
    gitHubLink: 'https://github.com/HowardMui/social-media-nestjs',
    title: 'Social Media RestAPI',
    content:
      'This is a twitter-like social media application API which conducted with Nestjs, MySQL, Sequelize, Redis.  This restAPI is also deployed and hosting on AWS with EC2(via Docker), load balancer and route53.',
    tags: [
      {
        tag: 'Nestjs',
        color: '#db6e87',
      },
      {
        tag: 'Swagger',
        color: '#94d66d',
      },
      {
        tag: 'MySQL',
        color: '#91a8b3',
      },
      {
        tag: 'Sequelize',
        color: '#78bce3',
      },
      {
        tag: 'Docker',
        color: '#60bee6',
      },
      {
        tag: 'AWS',
        color: '#f5b453',
      },
    ],
  },
];
