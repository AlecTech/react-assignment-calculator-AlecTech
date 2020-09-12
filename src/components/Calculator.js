import React, { useState } from 'react';

// We can try a fat arrow function as well (let's try to be consistent in the real world though!)
// If the component accepts a parameter, this is referred to as a "prop."
// Props allow us to pass values INTO our components from a parent document / component.
function Calculator (props)
{ // Every component should return JSX.
  const [new1Num, setNew1Num] = useState(0);
  const [new2Num, setNew2Num] = useState(0);
  const [newOper, setNewOper] = useState('add');

  
  // setNew1Num = value => {
  //   setInputs({ ...inputs, value1: parseFloat(value) });
  // };
  const onFormSubmit = event => {
    event.preventDefault();
    console.log('form submitted');
    console.log(newOper);
  }

  let heading = props.heading;
  let input1 = props.input1;
  let input2 = props.input2;
  let oper = props.oper;
  let result = props.result;
  //let empty = props.empty;

  
  
  // var oper = form.querySelector('.oper')
  return (
    <div>
      <h1> { heading } </h1>
      <h2> { input1 } </h2>
      
      <h2>Operator</h2>
      <form onSubmit = {onFormSubmit}>
      <input 
      type="number" min="0" step="1" 
      onChange={e => { setNew1Num( e.target.value ) }}
      value={new1Num}
      className='field' />
        <select 
        // name="version" onChange={handleChange} value={state.version}
        //2nd try = value={this.state.value} onChange={this.handleChange}
        onChange={e => { setNewOper( e.target.value ) }}
        value={newOper}
        className='oper' >
          
          <option value='add'>+</option>
          <option value='subtract'>-</option>
          <option value='divide'>/</option>
          <option value='multiply'>*</option>
        </select>
        <input 
      type="number" min="0" step="1" 
      onChange={e => { setNew2Num( e.target.value ) }}
      value={new2Num}
      className='field' />
      <input type='submit' className='submitBtn success' value='Submit'/>
      </form>
      <h2> {input2}</h2>
      
      <h2></h2>
      
      <h3>RESULT: {new1Num} {newOper} {new2Num} {result} </h3>
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