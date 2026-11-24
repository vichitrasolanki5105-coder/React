// import React from 'react'

// export default function App() {
//   var num =0
//   var increment=()=>{
//     console.log(num);
//     num++;
//   }
//   var decrement=()=>{
//     console.log(num);
//     num--;
//   }
//   return(
//     <div>
//       <h1>Count Application</h1>
//       <p>{num}</p>
//       <button onClick={()=>increment()}>Increment</button>
//       <button onClick={()=>decrement()}>Decrement</button>
//     </div>
//   )
// }


import React from 'react'
import { useState } from 'react';
import ContactFrom from './components/ContactForm';
import LoginForm from './components/LoginForm';

export default function App() {
  var [count, updateCount]=useState(0);
  var [form, updateForm]=useState(true);
  return(
    <div>
      <h1>Counter Application</h1>
      <p>{count}</p>
      <button onClick={()=> updateCount(count+1)}>Increment</button>
      <button onClick={()=> updateCount(count-1)}>Decrement</button>
      
      {form ? <ContactFrom/> :<LoginForm/>}
      <button onClick={()=> updateForm(!form)}>Change Form</button>
    </div>
  )
}

