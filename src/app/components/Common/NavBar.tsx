import 'assets/scss/Components/Common/NavBar.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';
// IoCloseSharp

import { useMemo, useRef, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { NavBarType } from 'models';

const NavBarData = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

interface MyHTMLElement extends HTMLElement {
  classList: DOMTokenList;
}

interface Props {
  active: NavBarType | null;
  setActive: (value: NavBarType | null) => void;
}

export const NavBar = ({ active, setActive }: Props) => {
  const navRef = useRef<MyHTMLElement>(null);
  const [baseColor, setBaseColor] = useState<string>('#000');
  // const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [pageScrollY, setPageScrollY] = useState<number>(0);
  const { scrollY } = useScroll();
  // const [active, setActive] = useState<string | null>(null);

  useMotionValueEvent(scrollY, 'change', latest => {
    setPageScrollY(latest);
  });

  const showNavbar = () => {
    navRef.current?.classList.toggle('responsive_nav');
    if (navRef.current?.className.includes('responsive_nav')) {
      setBaseColor('#ffffff');
    } else {
      setBaseColor('#000');
    }
  };

  const homeTitleOnClick = () => {
    setActive(null);
    window.scrollTo(0, 0);
  };

  // const colorCondition = useMemo(
  //   () => (title: string) => {
  //     let color: string = '#000';
  //     if (active === title) {
  //       color = '#ffc107';
  //     } else if (pageScrollY > 0) {
  //       color = '#FFFFFF';
  //     } else if (navRef.current?.className.includes('responsive_nav')) {
  //       color = '#FFFFFF';
  //     } else {
  //       color = '#000';
  //     }
  //     return { color: color };
  //   },
  //   [active, pageScrollY],
  // );

  const navTitleOnClick = (id: string) => {
    navRef.current?.classList.remove('responsive_nav');
    setActive(id as NavBarType);
    // const executeScroll = () => myRef.current.scrollIntoView()
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className="navbar-container"
      style={{ background: pageScrollY > 0 ? 'rgba(0,0,0,0.5)' : '' }}
    >
      <Link
        to="/"
        className="navbar-brand fs-4"
        onClick={homeTitleOnClick}
        style={{
          color: pageScrollY > 0 ? '#FFFFFF' : '#000',
        }}
      >
        Howard Mui
      </Link>
      <nav className="navbar-wrapper" ref={navRef}>
        {NavBarData.map(({ title, id }, index) => (
          <div
            key={index}
            // href={`#${id}`}
            onClick={() => navTitleOnClick(id)}
            className="nav-title"
            style={{
              color:
                active === id
                  ? '#ffc107'
                  : pageScrollY > 0
                  ? '#FFFFFF'
                  : baseColor,
            }}
            // style={colorCondition(title)}
          >
            {title}
          </div>
        ))}
        <div className="nav-btn nav-close-btn fs-1" onClick={showNavbar}>
          <IoCloseSharp />
        </div>
      </nav>
      <div
        className="nav-btn menu-icon"
        onClick={showNavbar}
        style={{ color: pageScrollY > 0 ? '#FFFFFF' : '#000' }}
      >
        <GiHamburgerMenu />
      </div>
    </header>
  );
};
