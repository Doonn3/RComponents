import { Routes, Route } from 'react-router-dom';
import About from '../pages/About/About';
import './App.css';
import Header from '../components/Header/Header';
import Home from '../pages/Home/Home';
import NotFound from '../pages/404/404';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
