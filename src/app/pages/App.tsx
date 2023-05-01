import { ProgressBar } from 'app/components';
import { TimeLine } from 'app/components/Experience';
import { Button, Container } from 'react-bootstrap';
import { ExperienceContainer } from './ExperienceContainer';

function App() {
  return (
    <Container>
      <div style={{ height: '100vh' }}>Hello world</div>
      <Button variant="danger" size="lg">
        testbtn
      </Button>
      <ProgressBar value={95}></ProgressBar>
      <ExperienceContainer />
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
    </Container>
  );
}

export default App;
