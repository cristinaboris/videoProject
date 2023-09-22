import { useRef, useState,useEffect, useContext} from 'react'
import AuthContext from '../../contex/AuthProvider';
import axios from './axios'

const LOGIN_URL = '/auth'

export const Login = () => {

  const {setAuth} = useContext(AuthContext)
    const userRef = useRef();
    const errRef = useRef();

const [user, setUser] = useState('')
const [pwd, setPwd] = useState('')
const [errMsg, setErrMag] = useState('')
const [success, setSucces] = useState(false)

useEffect(() => {
    userRef.current.focus();
},[])

useEffect(() => {
    setErrMag('')
},[user,pwd])

const handlesubmit = async (e) => {
  e.preventDeffault()
  try {
    const response = await axios.post(LOGIN_URL, JSON.stringify({user, pwd}),{
      headers: {'Content-Type': 'application/json'},
      withCredentials: true
    });
    console.log(user, pwd)
    const accessToken = response?.data?.accessToken;
    const roles = response?.data?.roles;
    setAuth({user, pwd, roles, accessToken})
    setUser('');
    setPwd('')
    setSucces(true)
  } catch (error) {
    if(!err?.response){
      setErrMag('No Server')
    } else if(err.response?.status === 400){
      setErrMag('missinf username or password');
    } else if(err.response?.status === 401){
   setErrMag('not in server')
    } else{
      setErrMag('LOGIN FAILED')
    }
    errRef.current.focus()
  }

}

  return (
    <>
{
  success ? (
    <section>
      <h1>You are logged in!</h1>
      <br/>
      <p>
        <a href='#'>Go to Home</a>
      </p>
    </section>
  ) : (

    
    <section>

<p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
<form onSubmit={handlesubmit}>
  <label htmlFor='username'>UserName:
  <input type='text' id='username' ref={userRef} autoComplete='off' onChange={(e) => setUser(e.target.value) } value={user} required/>
  </label>
  <label htmlFor='username'>Password:
  <input type='password' id='password'  autoComplete='off' onChange={(e) => setPwd(e.target.value) } value={pwd} required/>
  </label>
<button>sign in</button>
</form>
<p>Need an Acount<br/>
<span className='line'> <a href='#'>sign Up</a></span>
</p>
    </section> )}
    </>
  )
}
