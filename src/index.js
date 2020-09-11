import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Hello from './components/Hello'; // If we want to use a component in this file, we have to import it!
import Calculator from './components/Calculator';
import './calculator.css';

// import Button1 from './components/Button';

ReactDOM.render(
  <React.StrictMode>


    <Calculator heading="Welcome to my Calculator!" input1="Input 1:" input2="Input 2:"/>
    {/* <Calculator  heading="Welcome to my Calculator!"/>
    <Calculator  input="Input 1:"/> 
    <input type='text' class='field' />
    <Calculator input="Operators"/>
    <select class='where' >
      <option value='add'>+</option>
      <option value='subtract'>-</option>
      <option value='divid'>/</option>
      <option value='multiply'>*</option>
    </select>
    <Calculator  input="Input 2:"/>
    <input type='text' class='field' />
    <Calculator empty="" />
    <input type='submit' class='submitBtn success' value='Submit'/> */}
   
  </React.StrictMode>,
  document.getElementById('root')
);
