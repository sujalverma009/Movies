/*jshint esversion: 6 */

import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner'
import Movies from './Components/Movies'
import Favourite from './Components/Favourite';
function App() {
  return (
    
    <>
      <Navbar/>
      {/* <Banner/>
      <Movies /> */}
      <Favourite/>

    </>
    
  );
}

export default App;
