
import { useRef, useState, useEffect } from 'react'
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from './axios';


const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register'

const Register = () => {
const userRef= useRef();
const errRef = useRef()

const [user, setUser] = useState('')
const [validName, setValidName] = useState(false);
const [userFocus, setUserFocus] = useState(false);

const [psw, setPsw] = useState('')
const [validPsw, setValidPsw] = useState(false);
const [pswFocus, setPswFocus] = useState(false);

const [matchPws, setmatchPsw] = useState('')
const [validMatch, setValidPswMatch] = useState(false);
const [macthFocus, setMatchFocus] = useState(false);


const [errMsg, setErrMsg] = useState('')
const [success, setSucess] = useState(false);


const handleSubmit = async (e) => {
    e.preventDefault();

    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(psw);
    if(!v1 || !v2){
        setErrMsg('invalid entry')
        return;
    }
    try {
        const response = await axios.post(REGISTER_URL,
            JSON.stringify({ user, psw }),
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            }
        );
        console.log(response?.data);
        console.log(response?.accessToken);
        console.log(JSON.stringify(response))
        setSucess(true);
        //clear state and controlled inputs
        //need value attrib on inputs for this
        setUser('');
        setPsw('');
        setmatchPsw('');
    } catch (err) {
        if (!err?.response) {
            setErrMsg('No Server Response');
        } else if (err.response?.status === 409) {
            setErrMsg('Username Taken');
        } else {
            setErrMsg('Registration Failed')
        }
        errRef.current.focus();
    }
}

useEffect(() => {
    userRef.current.focus();
},[])

useEffect(()=> {
    const result = USER_REGEX.test(user)
    console.log(result);
    console.log(user)
    setValidName(result)
},[user])


useEffect(()=> {
    const result = PWD_REGEX.test(psw);
    console.log(result);
    console.log(psw)
    setValidPsw(result)
    const match = psw === matchPws;
    setValidPswMatch(match)
},[psw, matchPws])

useEffect(() => {
    setErrMsg('');
},[user, psw, matchPws])
  return (

<>
    {
success ? (
    <section>
        <h1>success</h1> 
        
        <p>
            <a href='#'>
Sigh In
            </a>
        </p>
           </section>
) 
   :


    (<section>

<p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>{errMsg}</p>
<h1>Register</h1>
<form onSubmit={handleSubmit}>

    <label htmlFor='username'>UserName:
    
    <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
    </label>
    <input  type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}/>


                             <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>
                        <label htmlFor="password">
                            Password:
                            <FontAwesomeIcon icon={faCheck} className={validPsw ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPsw || !psw ? "hide" : "invalid"} />
                        </label>



                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPsw(e.target.value)}
                            value={psw}
                            required
                            aria-invalid={validPsw ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPswFocus(true)}
                            onBlur={() => setPswFocus(false)}
                        />
                        <p id="pwdnote" className={pswFocus && !validPsw ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>
                        
                        



                        <label htmlFor="confirm_pwd">
                            Confirm Password:
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPws ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPws ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setmatchPsw(e.target.value)}
                            value={matchPws}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={macthFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>

                        <button disabled={!validName || !validPsw || !validMatch ? true : false}>Sign Up</button>
                    </form>
                    <p>
                        Already registered?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="#">Sign In</a>
                        </span>
                    </p>

    </section>
    )}
    </>
  )
}

export default Register