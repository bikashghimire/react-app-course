import './App.css';
import AllMeetUpsPage from './pages/AllMeetUps';
import NewMeetUpPage from './pages/NewMeetUp';
import FavouritesPage from './pages/Favourites';
import MainNavigation from './components/layout/MainNavigation';
import {  BrowserRouter as Router,

 
  Routes,
  Route,
  
} from "react-router-dom";
function App() {

  return (
    <div>
    <MainNavigation />
    <Routes>
    <Route path='/' exact element = {<AllMeetUpsPage />}/>
    <Route path='/favourites' element = {<FavouritesPage />}/>
    <Route path='/new-meetup' element = {<NewMeetUpPage />}/>
    </Routes>


    </div> 
  );
}

export default App;
