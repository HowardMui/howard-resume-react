import { Container } from 'react-bootstrap';
import { ExperienceContainer } from './ExperienceContainer';
import SkillContainer from './SkillContainer/SkillContainer';
import { ContactContainer } from './ContactContainer';
import PortfolioContainer from './PortfolioContainer/PortfolioContainer';
import AboutContainer from './AboutContainer/AboutContainer';

function App() {
  return (
    <Container>
      <div>
        <div style={{ height: '100vh' }}>Hello world</div>

        {/* <ProgressBar value={95}></ProgressBar> */}
        <AboutContainer />
        {/* <SkillContainer /> */}

        <ExperienceContainer />
        <div className="beforeExp">beforeExp</div>
        <PortfolioContainer />
        <ContactContainer />
        <div className="beforeExp">contactContainer</div>
        <div className="beforeExp">contactContainer</div>
        <div className="beforeExp">contactContainer</div>
        <div className="beforeExp">contactContainer</div>
        <div className="beforeExp">contactContainer</div>
        <div className="beforeExp">contactContainer</div>
        <div className="beforeExp">contactContainer</div>
      </div>
    </Container>
  );
}

export default App;
