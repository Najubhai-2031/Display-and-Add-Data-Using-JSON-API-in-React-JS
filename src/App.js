// import logo from './logo.svg';
import React from 'react'
import './App.css';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import DisplayDataClassFetch from './DisplayDataClassFetch';
import AddDataClassFetch from './AddDataClassFetch';
import DisplayDataClassAxios from './DisplayDataClassAxios';
import AddDataClassAxios from './AddDataClassAxios';
import DisplayDataFunctionFetch from './DisplayDataFunctionFetch';
import AddDataFunctionFetch from './AddDataFunctionFetch';
import DisplayDataFunctionAxios from './DisplayDataFunctionAxios';
import AddDataFunctionAxios from './AddDataFunctionAxios';

function App() {
  return (
    <React.Fragment>
      <div className='App'>
      <Router>
        <h1>Display and Adding Data Using API</h1>
      <h1>Class Component</h1>
        <Link to='/ClassFetch'>Display Data Using Class-Fetch</Link> &nbsp;
        <Link to='/AddDataClassFetch'>Add Data Using Class-Fetch</Link>&nbsp;
        <Link to='/DisplayDataClassAxios'>Display Data Using Class-Axios</Link>&nbsp;
        <Link to='/AddDataClassAxios'>Add Data Using Class-Axios</Link>&nbsp;
        <h1>Function Component</h1>
        <Link to='/DisplayDataFunctionFetch'>Display Data Using Function-Fetch</Link>&nbsp;
        <Link to='/AddDataFunctionFetch'>Add Data Using Function-Fetch</Link>&nbsp;
        <Link to='/DisplayDataFunctionAxios'>Display Data Using Function-Axios</Link>&nbsp;
        <Link to='/AddDataFunctionAxios'>Add Data Using Function-Axios</Link>
      <Routes>
        <Route path='/ClassFetch' element={<DisplayDataClassFetch/>}/>
        <Route path='/AddDataClassFetch' element={<AddDataClassFetch/>}/>
        <Route path='/DisplayDataClassAxios' element={<DisplayDataClassAxios/>}/>
        <Route path='/AddDataClassAxios' element={<AddDataClassAxios/>}/>
        <Route path='/DisplayDataFunctionFetch' element={<DisplayDataFunctionFetch/>}/>
        <Route path='/AddDataFunctionFetch' element={<AddDataFunctionFetch/>}/>
        <Route path='/DisplayDataFunctionAxios' element={<DisplayDataFunctionAxios/>}/>
        <Route path='/AddDataFunctionAxios' element={<AddDataFunctionAxios/>}/>
      </Routes>
      </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
