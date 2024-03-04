import './App.css';
import Home from './Home';
import AboutUs from './AboutUs';
import Contact from './Contact'
import { Route, Routes } from 'react-router-dom';
import BandejaMenu from './BandejaMenu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BandejaMenu></BandejaMenu>
        <Routes>
          <Route path='contact' element={<Contact></Contact>}></Route>
          <Route path='aboutus' element={<AboutUs></AboutUs>}></Route>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
