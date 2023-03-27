import { useState, useRef } from 'react';
import classes from './SignUp.module.css';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { AuthActions } from '../store/AuthSlice';

const SignUpForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch=useDispatch();



  const newUserName = useRef();
  const newUserPassword = useRef();
  const ReEnterPassword=useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);

  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = newUserName.current.value;
    const enteredPassword = newUserPassword.current.value;
    
    setIsLoading(true);

    if (isLogin) {
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDfaJjy3LS1PJdi1F6WXFp9vNutlkkdJwA',
        {
          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(async (res) => {
          setIsLoading(false)
          if (res.ok) {
            const data = await res.json();
            console.log(data);
            dispatch(AuthActions.login(data.idToken));
            
           
          }
          else {
            const data_1 = await res.json();
            let errorMessag = "Authentication failed";
            if (data_1 && data_1.error && data_1.error.message) {
              errorMessag = data_1.error.message;
            }
            alert(errorMessag)
          }
        })
     }

     else{
      const confirmedPassword=newUserPassword.current.value===ReEnterPassword.current.value;
      if(confirmedPassword) {
      
   
        
         fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDfaJjy3LS1PJdi1F6WXFp9vNutlkkdJwA',
             {
               method: 'POST',
               body: JSON.stringify({
                 email: enteredEmail,
                 password: enteredPassword,
                 returnSecureToken: true
               }),
               headers: {
                 'Content-Type': 'application/json'
               }
             }
           ).then((res) => {
             setIsLoading(false);
             if (res.ok) {
               console.log(res.status);
               console.log("sign up succesfull");
               
             }
             else {
               return res.json()
                 .then((data) => {
                   let errorMessage = "Authentication failed";
                   if (data && data.error && data.error.message) {
                     errorMessage = data.error.message;
                   }
                   alert(errorMessage);
                 });
             }
           });
       
           
         }
       else{
         alert("Password and Confirm Password should be same");
         setIsLoading(false);
       }
     }
   

  }
  return (
 
         <section className={classes.contain}>
      
   
      <Form className={classes.auth} onSubmit={submitHandler}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <>
        <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
          ref={newUserName}
          required
        />
       
        <label htmlFor="floatingInputCustom">Email address</label>
      </Form.Floating>
      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
          ref={newUserPassword}
          required
        />
        <label htmlFor="floatingPasswordCustom">Password</label>
      </Form.Floating>

     {!isLogin && <Form.Floating style={{marginTop:"15px"}}>
        <Form.Control
          id="floatingReEnterCustom"
          type="password"
          placeholder="Confirm Password"
          ref={ReEnterPassword}
          required
        />
        <label htmlFor="floatingReEnterCustom">Confirm Password</label>
      </Form.Floating>}
        </>




        <div className={classes.actions}>
          {!isLoading && <button type='submit' >{isLogin ? 'Login' : 'Sign Up'}</button>}
          {isLoading && <p>Sending request..</p>}
         


        </div>
      </Form>
      <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Dont have an account? SignUp' : ' Have an account, already? Login'}

          </button>
    </section>
    
   
  );
};

export default SignUpForm;