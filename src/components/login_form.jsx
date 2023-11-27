import * as React from 'react';
// import { useState } from 'react';

const LoginForm = () => {
//   const [count, setCount] = useState(0);

  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = emailRef.current.value
    const password = passwordRef.current.value
    
   
    

    if (email==='Admin' && password==='12345') 
        {
        localStorage.setItem('Access', 1);
        // console.log( localStorage.getItem('Access') ); // 1
        
        // setCount(count + 1);
        
        // console.log(count);

        // alert("Ураааа !!!!");


        } else {
        localStorage.setItem('Access', 0);  
        // setCount(count + 1);
        
        // console.log(count); 
        }
    console.log( localStorage.getItem('Access') ); // 1   

  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" ref={emailRef} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" ref={passwordRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export { LoginForm };