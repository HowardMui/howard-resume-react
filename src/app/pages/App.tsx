import { Button, Container } from 'react-bootstrap';
import { ExperienceContainer } from './ExperienceContainer';
import SkillContainer from './SkillContainer/SkillContainer';
import { ContactContainer } from './ContactContainer';
import PortfolioContainer from './PortfolioContainer/PortfolioContainer';

function App() {
  return (
    <Container>
      <div style={{ height: '100vh' }}>Hello world</div>
      <Button variant="danger" size="lg">
        testbtn
      </Button>
      {/* <ProgressBar value={95}></ProgressBar> */}
      <SkillContainer />
      <div className="beforeExp">beforeExp</div>
      <div className="beforeExp">beforeExp</div>
      <div className="beforeExp">beforeExp</div>
      <div className="beforeExp">beforeExp</div>
      <div className="beforeExp">beforeExp</div>
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
    </Container>
  );
}

export default App;
