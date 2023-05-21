// import { ExperienceContainer } from './ExperienceContainer';
// import { ContactContainer } from './ContactContainer';

import AboutContainer from './AboutContainer/AboutContainer';
import { Footer, NavBar } from 'app/components/Common';
// import HomeContainer from './HomeContainer/HomeContainer';
import { BrowserRouter } from 'react-router-dom';
import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { NavBarType } from 'models';
import { useInView } from 'framer-motion';
import useLazyLoad from 'hooks/useLazyload';
// import { PortfolioContainer } from './PortfolioContainer/loadable';

const Home = lazy(() => {
  return import('./HomeContainer/index');
});
const ExperienceContainer = lazy(() => import('./ExperienceContainer/index'));
const Portfolio = lazy(() => import('./PortfolioContainer/index'));
const Contact = lazy(() => import('./ContactContainer/index'));

// const wait = (promise, time) => {
//   return new Promise(resolve => {
//     setTimeout(resolve, time);
//   }).then(() => promise);
// };

const App = () => {
  const [active, setActive] = useState<NavBarType | null>(null);
  const abouttRef = useRef(null);
  const expRef = useRef(null);
  const portRef = useRef(null);
  const conRef = useRef(null);

  return (
    <BrowserRouter>
      <NavBar active={active} setActive={setActive} />
      <Home setActive={setActive} />
      <AboutContainer setActive={setActive} />
      {/* <ExperienceContainer setActive={setActive} /> */}
      {/* <PortfolioContainer setActive={setActive} /> */}
      {/* <div ref={ref}>
        {isInview ? (
          <Suspense fallback={<div>Loading...</div>}>
            <Portfolio setActive={setActive} />
          </Suspense>
        ) : null}
      </div> */}
      {/* {useLazyLoad(ExperienceContainer, { setActive })} */}
      {useLazyLoad(Portfolio, { setActive, ref: portRef })}
      {useLazyLoad(Contact, { setActive, ref: conRef })}
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Portfolio setActive={setActive} />
      </Suspense> */}
      {/* <ContactContainer setActive={setActive} /> */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
