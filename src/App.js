/*jshint esversion: 6 */

import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner'
import Movies from './Components/Movies'
import Favourite from './Components/Favourite';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


function App() {
  return (
   
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<><Banner/><Movies/></>}/>
        <Route path='/favourites' element={<Favourite/>}/>
      </Routes>




       {/* <Banner/>
      <Movies/> */}
      

    </Router>
   
    
  );
}

export default App;
