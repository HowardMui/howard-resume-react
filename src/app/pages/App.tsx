import { ExperienceContainer } from './ExperienceContainer';
import SkillContainer from './SkillContainer/SkillContainer';
import { ContactContainer } from './ContactContainer';
import PortfolioContainer from './PortfolioContainer/PortfolioContainer';
import AboutContainer from './AboutContainer/AboutContainer';
import { Footer, NavBar } from 'app/components/Common';
import HomeContainer from './HomeContainer/HomeContainer';

function App() {
  return (
    <>
      <NavBar />
      <HomeContainer />
      {/* <Container> */}
      <AboutContainer />
      {/* <SkillContainer /> */}

      <ExperienceContainer />
      <PortfolioContainer />
      <ContactContainer />
      {/* </Container> */}
      <Footer />
    </>
  );
}

export default App;
