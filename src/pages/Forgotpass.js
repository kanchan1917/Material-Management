import React from 'react'



const Forgotpass = () =>
{
    return (
        <div style={{}}>
            <div className="elelment">
                <h2>Reset Password Form</h2>
                <div className="element-main">
                    <h1>Forgot Password</h1>
                    <p> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut.</p>
                    <form>
                        <input type="text" value="Your e-mail address" onFocus="this.value = '';" onBlur="if (this.value == '') {this.value = 'Your e-mail address';}"  />
                        <input type="submit" value="Reset my Password" />
                    </form>
                </div>
            </div>
           


        </div>
    )
}

export default Forgotpass




