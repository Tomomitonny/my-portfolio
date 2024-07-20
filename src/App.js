import logo from './logo.svg';
import './index.css';
import Header from './component/header';
import Hero from './component/hero';
import Works from './component/works';
import About from './component/About'
import Footer from './component/footer';
import Cursor from './component/Cursor';
import CircleText from './component/CircleText';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Works/>
      <About/>
      <div className="inline-block flex right-0 bg-gray-100 overflow-hidden">
        <CircleText />
      </div>
      <Footer/>
      <Cursor/>
    </div>
  );
}

export default App;
