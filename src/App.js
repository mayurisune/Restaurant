
import './App.css';
import {
  BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from './components/Home'
import RestaurantCreate from './components/RestaurantCreate'
import RestaurantDetail from './components/RestaurantDetail'
import RestaurantList from './components/RestaurantList'
import RestaurantSearch from './components/RestaurantSearch'
import RestaurantUpdate from './components/RestaurantUpdate'

function App() {
  return (
    
   <Router>
    <div className="App">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/list'>List</Link></li>
          <li><Link to='/create'>Create</Link></li>
          <li><Link to='/search'>Search</Link></li>
          <li><Link to='/detail'>Detail</Link></li>
          <li><Link to='/update'>Update</Link></li>
        </ul>
     
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/list' element={<RestaurantList />} />
        <Route path='/create' element={<RestaurantCreate />} />
        <Route path='/search' element={<RestaurantSearch />} />
        <Route path='/detail' element={<RestaurantDetail />} />
        <Route path='/update' element={<RestaurantUpdate />} />
       
      </Routes>
      </div>
     </Router>

  );
}

export default App;
