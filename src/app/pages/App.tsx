import { Container } from 'react-bootstrap';
import { ExperienceContainer } from './ExperienceContainer';
import SkillContainer from './SkillContainer/SkillContainer';
import { ContactContainer } from './ContactContainer';
import PortfolioContainer from './PortfolioContainer/PortfolioContainer';
import AboutContainer from './AboutContainer/AboutContainer';
import { Footer } from 'app/components/Common';

function App() {
  return (
    <>
      <Container>
        <div>
          <div style={{ height: '100vh' }}>Hello world</div>

          {/* <ProgressBar value={95}></ProgressBar> */}
          <AboutContainer />
          {/* <SkillContainer /> */}

          <ExperienceContainer />
          <PortfolioContainer />
          <ContactContainer />
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default App;
