import './App.css';
import Navigation from './components/Navigation';
import MoviesPresentation from './components/MoviesPresentation';
import Footer from  './components/Footer';
import Details from './components/Detail';
import Contacts from './components/Contact';
import News from './components/News';
import {Route, Routes,} from 'react-router-dom';

function App() {

  return (
           <div className='App'>
            <Navigation/>
            <Routes>
            <Route path='/' element={<MoviesPresentation/>}></Route>
            <Route path='/Detail/:id' element={<Details/>}></Route>
            <Route path='/Contact' element={<Contacts/>}></Route>
            <Route path='/News' element={<News/>}></Route>
            </Routes>
            <Footer/>
            </div>
 );
}
export default App;
