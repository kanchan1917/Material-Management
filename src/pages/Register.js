import React , { useState } from 'react'
import images from '../images/Inventory spread.webp'



const Register = () =>
{
    const [formData, setFormData] = useState({
        fullname :'',
        number: '',
        email: '',
        password: '',
        confirmpassword: ''
    })
    const [usersData, setUsersData] = useState([])

    const {fullname, number , email, password ,confirmpassword } = formData  //destructing ES6

  
    const callbackSumbit = (e) =>
    {
        e.preventDefault()   //don't refresh my page on Submit of form, because form has property to refresh once gets submitted
        setUsersData([...usersData, formData])
        //islogin->true
    }
    console.log({ usersData })

    const callbackOnChange = (e) =>
    {
        const { name, value } = e.target  
        setFormData({ ...formData, [name]: value })  
    }


    return (
        <div style={{ background: 'radial-gradient(#4361ee, transparent)' }}>
            <section className="w3l-workinghny-form">

                <div className="workinghny-form-grid">
                    <div className="wrapper">
                        <div className="logo">
                            <h1 className="brand-logo"> KOLENTORY </h1>

                        </div>
                        <div className="workinghny-block-grid">
                            <div className="workinghny-left-img align-end">
                                <img src={images} className="img-responsive" alt="img" />
                            </div>
                            <div className="form-right-inf">

                                <div className="login-form-content">
                                    <h2>Sign Up  Here..!</h2>
                                    <form className="signin-form" onSubmit={callbackSumbit}>
                                        <div className="one-frm">
                                            <label>Full-Name</label>
                                            <input type="text" name="fullname" placeholder="" required={true} value={fullname} onChange={callbackOnChange} />
                                        </div>
                                        <div className="one-frm">
                                            <label>Phone</label>
                                            <input type="number" name="number" placeholder="" required={true} value={number} onChange={callbackOnChange} />
                                        </div>  <div className="one-frm">
                                            <label>Email</label>
                                            <input type="email" name="email" placeholder="" required={true} value={email} onChange={callbackOnChange} />
                                        </div>
                                        <div className="one-frm">
                                            <label>Password</label>
                                            <input type="password" name="password" placeholder="" required={true} value={password} onChange={callbackOnChange} />
                                        </div>
                                        <div className="one-frm">
                                            <label>Confirm-Password</label>
                                            <input type="password" name="confirmpassword" placeholder="" required={true} value={confirmpassword} onChange={callbackOnChange} />
                                        </div>


                                        <button className="btn btn-style mt-3" >Register </button>

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

        </div>
    )
}

export default Register
