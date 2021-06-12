import React from 'react'
import '../Stylesheet/merchantListUsers.css'
import { Link } from 'react-router-dom'

const MerchantUserContent = () =>
{
    return (
        <div>
            <div className="main-content">
                <section className="section">
                    <div className="section-header">
                        <h1>Add Merchant</h1>
                    </div>


                    <div className="section-body merchant-user-list-body">

                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12">
                                <div className="card">
                                    <div className="card-header merchant-user-header">
                                        <h2 className="merchant-user-heading">Merchant Users</h2>
                                    </div>
                                    <div className="card-body">
                                        <form method="post" encType="multipart/form-data">


                                            <div className="form-group">
                                                <label className="label-data">FirstName </label>
                                                <input type="text" name="profile_pic" id="profile_pic" className="form-control" />
                                            </div>

                                            <div className="form-group">
                                                <label className="label-data">LastName </label>
                                                <input type="text" name="profile_pic" id="profile_pic" className="form-control" />
                                            </div>

                                            <div className="form-group">
                                                <label className="label-data">Phone </label>
                                                <input type="text" name="profile_pic" id="profile_pic" className="form-control" />
                                            </div>

                                            <div className="form-group">
                                                <label className="label-data">Email address </label>
                                                <input type="text" name="profile_pic" id="profile_pic" className="form-control" />
                                            </div>

                                            <div className="form-group">
                                                <label className="label-data">Password </label>
                                                <input type="text" name="profile_pic" id="profile_pic" className="form-control" />
                                            </div>

                                            <div className="form-group">
                                                <label className="label-data">Username </label>
                                                <input type="text" name="profile_pic" id="profile_pic" className="form-control" />
                                            </div>



                                            <div className="form-group">
                                                <label className="label-data">Profile Image</label>
                                                <input type="file" name="profile_pic" id="profile_pic" className="form-control" />
                                            </div>

                                            <div className="form-group">
                                                <label className="label-data">Company</label>
                                                <input type="text" name="company_name" id="company_name" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label className="label-data">GST</label>
                                                <input type="text" name="gst_details" id="gst_details" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label className="label-data">Address</label>
                                                <input type="text" name="address" id="address" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label className="custom-switch mt-2 label-data">
                                                    <input type="checkbox" name="is_added_by_admin" className="custom-switch-input" />
                                                    <span className="custom-switch-indicator"></span>
                                                    <span className="custom-switch-description">Is Added By Admin?</span>
                                                </label>
                                            </div>



                                            <Link to="/"> 
                                            <button type="submit" className="btn btn-color btn-primary btn-block">SAVE MERCHANT USER</button>
                                            </Link>


                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </section>
            </div>




        </div>
    )
}

export default MerchantUserContent
