import './App.css';
import Enrolled from './Component/Enrolled/Enrolled';
import Footer from './Component/Footer/Footer';
import NavBar from './Component/NavBar/NavBar';
import Referred from './Component/Referred/Referred';

function App() {
  return (
    <div className="App">
      <div className='Pages'>
      <NavBar/>
     <Referred/>
     <Enrolled/>
     <Footer/>
      </div>
    </div>
  );
}

export default App;
