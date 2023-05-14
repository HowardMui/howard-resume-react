import { ExperienceContainer } from './ExperienceContainer';
import { ContactContainer } from './ContactContainer';
import PortfolioContainer from './PortfolioContainer/PortfolioContainer';
import AboutContainer from './AboutContainer/AboutContainer';
import { Footer, NavBar } from 'app/components/Common';
import HomeContainer from './HomeContainer/HomeContainer';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <HomeContainer />
      <AboutContainer />

      <ExperienceContainer />
      <PortfolioContainer />
      <ContactContainer />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
