import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import NotFound from './components/notFound/NotFound';
import Home from './components/home/Home';
import ImageSelect from './components/imageSelect/ImageSelect';
import Header from './components/header/Header';
import ShowResults from './components/showResult/ShowResult';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/upload" element={<ImageSelect />} ></Route>
            <Route path="/show-result" element={<ShowResults />}></Route>
            <Route path="*" element = {<NotFound/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
