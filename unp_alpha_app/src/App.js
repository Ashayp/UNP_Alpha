import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Searchpage from './searchpage';
import Message from './components/message';
// import '../styles/global.css'

// import Layout from '../containers/Layout'
// import Home from '../pages/Home'
// import Login from '../containers/Login'
// import RecoveryPassword from '../containers/RecoveryPassword'
// import NotFound from '../pages/NotFound'

const App = () => {
  return (
    <Router>
      {/* <Layout> */}
        <Routes>
          <Route exact path="/" element={<Searchpage/>}/>
          <Route exact path="/message" element={<Message/>}/>
          {/* <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
          <Route path="*" element={<NotFound/>}/> */}
        </Routes>
      {/* </Layout> */}
    </Router>
  );
}

export default App;