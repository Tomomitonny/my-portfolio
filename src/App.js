import logo from './logo.svg';
import './index.css';
import Header from './component/header';
import Hero from './component/hero';
import Works from './component/works';
import About from './component/About'
import Footer from './component/footer';
import Cursor from './component/Cursor';
import Skills from './component/Skills';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Works/>
      <Skills/>
      <About/>
      <Footer/>
      <Cursor/>
    </div>
  );
}

export default App;
