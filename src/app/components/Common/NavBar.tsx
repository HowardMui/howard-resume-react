import { Container } from 'react-bootstrap';
import 'assets/scss/Components/Common/NavBar.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

const NavBarData = [
  {
    title: 'Home',
    href: '',
  },
  {
    title: 'Link',
    href: '',
  },
  {
    title: 'Portfolio',
    href: '',
  },
  {
    title: 'Contact',
    href: '',
  },
];

export const NavBar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className="navbar-container">
      <Container fluid>
        <div className="navbar-wrapper">
          <a className="navbar-brand text-white">Howard Mui</a>

          <ul>
            {NavBarData.map(({ title, href }, index) => (
              <li key={index}>
                <a className="text-white">{title}</a>
              </li>
            ))}
          </ul>

          <div className="menu-icon" onClick={() => setOpenMenu(!openMenu)}>
            <GiHamburgerMenu />
          </div>
        </div>
      </Container>
      {openMenu ? (
        <div className="open-menu-div">
          <ul>
            {NavBarData.map(({ title, href }, index) => (
              <li key={index}>
                <a className="text-white">{title}</a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};
