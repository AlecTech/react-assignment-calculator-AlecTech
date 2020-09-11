import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './components/Hello'; // If we want to use a component in this file, we have to import it!
// import Calculator from './components/Calculator';
import './calculator.css';

// import Button1 from './components/Button';

ReactDOM.render(
  <React.StrictMode>

    <Hello  heading="Welcome to my Calculator!"/>
    <Hello  input="Input 1:"/> 
    <input type='text' class='field' />
    <Hello input="Operators"/>
    <select class='where' >
      <option value='add'>+</option>
      <option value='subtract'>-</option>
      <option value='divid'>/</option>
      <option value='multiply'>*</option>
    </select>
    <Hello  input="Input 2:"/>
    <input type='text' class='field' />
    <Hello empty="" />
    <input type='submit' class='submitBtn success' value='Submit'/>
   
  </React.StrictMode>,
  document.getElementById('root')
);
