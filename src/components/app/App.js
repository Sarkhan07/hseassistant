import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.scss';
import Header from '../header/Header';
import MainPage from '../mainPage/mainPage';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/articles" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
