import { ExperienceContainer } from './ExperienceContainer';
import { ContactContainer } from './ContactContainer';
import PortfolioContainer from './PortfolioContainer/PortfolioContainer';
import AboutContainer from './AboutContainer/AboutContainer';
import { Footer, NavBar } from 'app/components/Common';
import HomeContainer from './HomeContainer/HomeContainer';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { NavBarType } from 'models';

const App = () => {
  const [active, setActive] = useState<NavBarType | null>(null);

  return (
    <BrowserRouter>
      <NavBar active={active} setActive={setActive} />
      <HomeContainer setActive={setActive} />
      <AboutContainer setActive={setActive} />
      <ExperienceContainer setActive={setActive} />
      <PortfolioContainer setActive={setActive} />
      <ContactContainer setActive={setActive} />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
