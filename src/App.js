import './App.css';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Home from './pages/Home';
import Search from './components/Search';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <div className="app">
    <Router>
        <Routes >
          <Route path="/search" element={<SearchPage/>} />
            {/* <SearchPage /> */}         
          <Route path="/"
            element={
            <>
            <Home/>
            <Search/>
            </>
            }
           />        
        </Routes >
      </Router>
    </div>
  );
}

export default App;
