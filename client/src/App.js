import 'materialize-css';
import { Chart } from './components/Chart';
import { TechnicalTask } from './components/TechnicalTask';
import { Navbar } from './components/Navbar';
import { DevelopmentDescription } from './components/DevelopmentDescription';
import { Result } from './components/Result';

function App() {
  return (
    <>
      <main>
        <section id="Navbar">
          <Navbar />
        </section >
        <section id="TechnicalTask">
          <TechnicalTask />
        </section >
        <section id="DevelopmentDescription">
          <DevelopmentDescription />
        </section >
        <section id="chart">
          <Chart />
        </section >
        <section id="Result" className="full-height">
          <Result />
        </section >
      </main>
    </>
  );
}

export default App;
