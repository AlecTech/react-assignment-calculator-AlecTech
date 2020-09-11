import React, { useState } from 'react';

// We can try a fat arrow function as well (let's try to be consistent in the real world though!)
// If the component accepts a parameter, this is referred to as a "prop."
// Props allow us to pass values INTO our components from a parent document / component.
function Calculator (props)
{ // Every component should return JSX.
  const [new1Num, setNew1Num] = useState('0');
  const [new2Num, setNew2Num] = useState('0');







  let heading = props.heading;
  let input1 = props.input1;
  let input2 = props.input2;
  let oper = props.oper;
  let result = props.result;
  //let empty = props.empty;
 
  return (
    <div>
      <h1> { heading } </h1>
      <h2> { input1 } </h2>
      <input 
      type="number" min="0" step="1" 
      onChange={e => { setNew1Num( e.target.value ) }}
      value={new1Num}
      class='field' />
      <h2>Operator</h2>
      <select class='operator' >
         <option></option>
         <option value='add'>+</option>
         <option value='subtract'>-</option>
         <option value='divide'>/</option>
         <option value='multiply'>*</option>
      </select>
      <h2> {input2}</h2>
      <input 
      type="number" min="0" step="1" 
      onChange={e => { setNew2Num( e.target.value ) }}
      value={new2Num}
      class='field' />
      <h2></h2>
      <input type='submit' class='submitBtn success' value='Submit'/>
      <h3>RESULT: {new1Num} + {new2Num} {result} </h3>
    </div>
  );
}
export default Calculator

// const Calculator = props => {
//   return (
//     <div>
//       <h1>Welcome to my Calculator!</h1>
//       <h2>Input 1:</h2>
//       <input type='text' class='field' />
//       <h2>Operator</h2>
//       <select class='where' >
//         <option></option>
//         <option value='add'>+</option>
//         <option value='subtract'>-</option>
//         <option value='divid'>/</option>
//         <option value='multiply'>*</option>
//       </select>
//       <h2>Input 2:</h2>
//       <input type='text' class='field' />
//       <h2></h2>
//       <input type='submit' class='submitBtn success' value='Submit'/>
//   </div>
      
//   );
// }