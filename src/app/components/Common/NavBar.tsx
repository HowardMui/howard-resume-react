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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [pageScrollY, setPageScrollY] = useState<number>(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', latest => {
    setPageScrollY(latest);
  });

  const showNavbar = () => {
    navRef.current?.classList.toggle('responsive_nav');
    if (navRef.current?.className.includes('responsive_nav')) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const homeTitleOnClick = () => {
    setActive(null);
    window.scrollTo(0, 0);
  };

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
      <div
        className={`navbar-brand fs-4 ${
          pageScrollY > 0 ? 'white-color' : 'black-color'
        }`}
        onClick={homeTitleOnClick}
      >
        Howard Mui
      </div>
      <nav className="navbar-wrapper" ref={navRef}>
        {NavBarData.map(({ title, id }, index) => (
          <div
            key={index}
            onClick={() => navTitleOnClick(id)}
            className={`nav-title ${
              active === id
                ? 'yellow-color'
                : isOpen
                ? 'white-color'
                : pageScrollY > 0
                ? 'white-color'
                : 'black-color'
            }`}
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
