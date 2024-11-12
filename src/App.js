
import './App.css';
import {
  BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from './components/Home'
import RestaurantCreate from './components/RestaurantCreate'
import RestaurantDetail from './components/RestaurantDetail'
import RestaurantList from './components/RestaurantList'
import RestaurantSearch from './components/RestaurantSearch'
import RestaurantUpdate from './components/RestaurantUpdate'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function App() {
  return (
    
   <Router>
    <div className="App">
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
             <Nav.Link href="#home"><Link to='/'>Home</Link></Nav.Link>
             <Nav.Link href="#home">  <Link to='/list'>List</Link></Nav.Link>
             <Nav.Link href="#home">  <Link to='/create'>Create</Link></Nav.Link>
             <Nav.Link href="#home"> <Link to='/search'>Search</Link></Nav.Link>
             <Nav.Link href="#home"> <Link to='/update'>Update</Link></Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
       
     
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
