import React from 'react'

const MerchantUserContent = () =>
{
    return (
        <div>
            <div className="main-content">
                <section className="section">
                    <div className="section-header">
                        <h1>Add Merchant</h1>
                    </div>


                    <div className="section-body">

                        <div class="row">
                            <div class="col-12 col-md-12 col-lg-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h4>Merchant Users</h4>
                                    </div>
                                    <div class="card-body">
                                        <form method="post" enctype="multipart/form-data">


                                            <div class="form-group">
                                                <label> </label>
                                                <input type="" class="form-control" />

                                                <div class="alert alert-danger">
                                                
                                                </div>

                                            </div>

                                            <div class="form-group">
                                                <label>Profile Image</label>
                                                <input type="file" name="profile_pic" id="profile_pic" class="form-control choose-image" />
                                            </div>

                                            <div class="form-group">
                                                <label>Company</label>
                                                <input type="text" name="company_name" id="company_name" class="form-control" />
                                            </div>
                                            <div class="form-group">
                                                <label>GST</label>
                                                <input type="text" name="gst_details" id="gst_details" class="form-control" />
                                            </div>
                                            <div class="form-group">
                                                <label>Address</label>
                                                <input type="text" name="address" id="address" class="form-control" />
                                            </div>
                                            <div class="form-group">
                                                <label class="custom-switch mt-2">
                                                    <input type="checkbox" name="is_added_by_admin" class="custom-switch-input" />
                                                    <span class="custom-switch-indicator"></span>
                                                    <span class="custom-switch-description">Is Added By Admin?</span>
                                                </label>
                                            </div>



                                            <a href=" "><button type="submit" class="btn btn-color btn-primary btn-block">SAVE
                                                            MERCHANT USER</button></a>


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
