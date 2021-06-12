import React from 'react'
import { Link } from 'react-router-dom'



const MerchantListContent = () =>
{
    return (
        <div>
            <div className="main-content">
                <section className="section">
                    <div className="section-header">
                        <h1>Your Stock History</h1>
                    </div>


                    <div className="section-body">

                        <h2 style={{ textAlign: 'center' }}>User Profile Card</h2>

                        <div className="card">
                            <img src="" alt="John" style={{ width: '100%' }} />
                            <h1>John Doe</h1>
                            <p className="title">CEO & Founder, Example</p>
                            <p>Harvard University</p>
                            <div style={{ margin: "24px 0;" }}>
                                <Link><i className="fa fa-dribbble"></i></Link>
                                <Link><i className="fa fa-twitter"></i></Link>
                                <Link><i className="fa fa-linkedin"></i></Link>
                                <Link><i className="fa fa-facebook"></i></Link>
                            </div>
                            <p><button>Contact</button></p>
                        </div>

                    </div>


                </section>
            </div>





        </div>
    )
}

export default MerchantListContent
