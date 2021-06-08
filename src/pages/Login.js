import React, { useState } from 'react'
import images from '../images/Inventory spread.webp'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'



//callback
//events in react
//es6
//how to update array and object state in react
//react-router-dom  -> Redirect


const Login = () =>
{

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })  // formData -> initial value of state and setFormData -> update the state
    //React ka principle hai ki whenever state changes it renders the UI, otherwise render nahi hota
    //render means change in UI , matlab repaint the UI with changes

    const [isLogin, setIsLogin] = useState(false)  //initially user is not logged in

    const [usersData, setUsersData] = useState([])

    const { email, password } = formData  //destructing ES6

    //arrow function/ lambda function ES6
    const callbackSumbit = (e) =>
    {
        e.preventDefault()   //don't refresh my page on Submit of form, because form has property to refresh once gets submitted
        setUsersData([...usersData, formData]) //array update of state, ... -> spread operator
        //state update krni hai false to true kro
        setIsLogin(true)

    }
    console.log({ usersData })

    const callbackOnChange = (e) =>
    {
        const { name, value } = e.target  //destructing
        setFormData({ ...formData, [name]: value })   //[] attribute update, attribute-> name 
    }
    //ternary operator
    // if(isLogin === true){
    //     Redirect to dashboard
    // }
    // else{
    //     show me the login page
    // }
    return (

        isLogin === true ? (<Redirect to='dashboard' />) : (

            <div>



                <section className="w3l-workinghny-form">

                    <div className="workinghny-form-grid">
                        <div className="wrapper">
                            <div className="logo">
                                <h1 className="brand-logo">KOLENTORY </h1>

                            </div>
                            <div className="workinghny-block-grid">
                                <div className="workinghny-left-img align-end">
                                    <img src={images} className="img-responsive" alt="img" />
                                </div>
                                <div className="form-right-inf">

                                    <div className="login-form-content">
                                        <h2>Sign In Here..!</h2>
                                        <form className="signin-form" onSubmit={callbackSumbit}>
                                            <div className="one-frm">

                                                <label>Email</label>
                                                <input type="email" name="email" placeholder="" required={true} value={email} onChange={callbackOnChange} />
                                            </div>
                                            <div className="one-frm">
                                                <label>Password</label>
                                                <input type="password" name="password" placeholder="" required={true} value={password} onChange={callbackOnChange} />
                                            </div>
                                            <label className="check-remaind">
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                                <p className="remember">Remember Me</p>

                                            </label>
                                            <button className="btn btn-style mt-3" >Log In </button>
                                            <div className="login-forgot-password" ><Link to="/forgotpass"> <span className="span-login-forpass"> Forgot Password  </span> </Link></div>
                                            <p className="already">Don't have an account? <Link to="/register">Please Sign Up Here</Link></p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="copyright text-center">
                        <div className="wrapper">
                            <p className="copy-footer-29">Let's Manage Your Inventory With Us</p>
                        </div>
                    </div>

                </section>

            </div>)


    )
}
export default Login
