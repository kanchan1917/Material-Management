import React from 'react'


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

                        <h2 style={{textAlign:'center'}}>User Profile Card</h2>

                        <div className="card">
                            <img src="" alt="John" style={{ width: '100%' }} />
                            <h1>John Doe</h1>
                            <p className="title">CEO & Founder, Example</p>
                            <p>Harvard University</p>
                            <div style={{margin: "24px 0;"}}>
                                <a href="#"><i className="fa fa-dribbble"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                <a href="#"><i className="fa fa-facebook"></i></a>
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
