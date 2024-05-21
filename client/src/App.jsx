import {BrowserRouter, Routes, Route}  from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';


function App() {
  return<BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/sign-in' element={<SignIn/>} />
    <Route path='/sign-up' element={<SignUp/>} />
    <Route path="/dashboard" element={<Dashboard/>}/>

   {/* <Route path='/about' element={<About/>} />
    <Route path='/search' element={<Search/>} />
    
    <Route path='/listing/:listingId' element={<Listing/>} />
    <Route element={< PrivateRoute/>} >
    <Route path='/profile' element={<Profile/>} />
    <Route path='/create-listing' element={<CreateListing />} />
    <Route path='/update-listing/:listingId' element={<UpdateListing />} />
    </Route>  */}

  </Routes>
  </BrowserRouter>
}

export default App;