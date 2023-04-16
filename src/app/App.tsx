import { Routes, Route, BrowserRouter } from 'react-router-dom';
import About from '../pages/About/About';
import './App.css';
import Header from '../components/Header/Header';
import Home from '../pages/Home/Home';
import NotFound from '../pages/404/404';
import CreateCard from '../pages/CreateCard/CreateCard';
import { Provider } from 'react-redux';
import { store } from '../api/store/Store';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<CreateCard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
