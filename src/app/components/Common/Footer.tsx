// import GithubIcon from 'assets/icons/github.png';
// import { IoLogoLinkedin } from 'react-icons/io';
// import { TfiEmail } from 'react-icons/tfi';
// import { MdEmail } from 'react-icons/md';
// import { VscGithubInverted, VscGithub } from 'react-icons/vsc';

import 'assets/scss/Components/Common/Footer.scss';

type Props = {};

type LinkType = 'github' | 'linkedin' | 'email' | 'indeed';

export const Footer = (props: Props) => {
  const iconOnClick = (icon: LinkType) => {
    switch (icon) {
      case 'github':
        window.open('https://github.com/HowardMui', '_blank');
        break;
      case 'linkedin':
        window.open('https://www.linkedin.com/in/howardmui-resume/', '_blank');
        break;
      case 'indeed':
        window.open('https://www.linkedin.com/in/howardmui-resume/', '_blank');
        break;
      case 'email':
        window.open('mailto:howardmui.2020@gamil.com');
        break;
      default:
        console.log(`Sorry, we are out of.`);
    }
  };

  return (
    <div className="footer-container p-5 bg-dark">
      <p className="title">Howard Mui</p>
      <div className="link-div">
        <div className="link fw-bold" onClick={() => iconOnClick('github')}>
          Github
        </div>
        <div className="link fw-bold" onClick={() => iconOnClick('linkedin')}>
          Linked-in
        </div>
        <div className="link fw-bold" onClick={() => iconOnClick('indeed')}>
          Indeed
        </div>
        <div className="link fw-bold" onClick={() => iconOnClick('email')}>
          Email
        </div>
      </div>
      <p className="copyright-div">
        Copyright &copy; 2023 HowardMui. All Rights Reserved
      </p>
    </div>
  );
};
