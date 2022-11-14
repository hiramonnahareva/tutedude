import { Route, Routes } from 'react-router-dom';
import './App.css';
import Enrolled from './Component/Enrolled/Enrolled';
import Footer from './Component/Footer/Footer';
import NavBar from './Component/NavBar/NavBar';
import Referred from './Component/Referred/Referred';
import FriendsReferred from './Pages/FriendsReferred';
import ReferEarn from './Pages/ReferEarn';

function App() {
  return (
    <div className="App">
      <div className='Pages'>
      <NavBar/>
      <Routes>
      <Route path='/' element={<FriendsReferred/>}></Route>
      <Route path='/Refer&Earn' element={<ReferEarn/>}></Route>
      <Route path='/friendsReferred' element={<FriendsReferred/>}></Route>
     </Routes>
      </div>
    </div>
  );
}

export default App;
