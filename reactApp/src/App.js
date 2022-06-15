import React from 'react';
import './App.css';
import Form from "./Form";
import MainPage from "./MainPage";

import axios from "axios";





class App extends React.Component {

 render() {
  return(
      <div>
      <MainPage/>
          <Form/>
      </div>
  );
 }
}
export default App