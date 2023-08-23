import React ,{useEffect,useContext}from 'react';
import './App.css';
import { BrowserRouter as Router ,Route} from 'react-router-dom/cjs/react-router-dom.min';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import Post from './Store/PostContext';
import { firebaseContext , AuthContext } from './Store/FirebaseContext';
function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(firebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <div>
  <Post>

     
      <Router>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/signup'>
          <Signup/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/create'>
          <Create/>
        </Route>
        <Route path='/view'>
          <View/>
        </Route>
      </Router>
  </Post>
    </div>
  );
}

export default App;
