import Navbar from './components/Navbar';
import Cluster from './pages/cluster';
import DataPage from './pages/data';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
// Allowed extensions for input file

const App = () => {
  return (
    <>
      {' '}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data" element={<DataPage />} />
          <Route path="/app" element={<Cluster />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
