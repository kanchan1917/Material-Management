import React from 'react'
import '../Stylesheet/dashboard.css'
import {Link} from 'react-router-dom'



const MainContent = () =>
{
    return (
        <div>
            <div className="main-content">
                <section className="section">
                    <div className="section-header">
                        <h1>Dashboard</h1>
                    </div>

                    <div className="section-body">
                        <div className="card-section row">
                            <div className="col">
                                <div className="card">
                                    <div className="card-body green-card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <Link to ="/"className="btn btn-success"> <i class="fas fa-boxes"></i> 
                                            Total Type of Item in Stock</Link>
                                    </div>
                                </div>

                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body blue-card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <Link to ="/"className="btn btn-primary"> <i class="fas fa-users"></i> 
                                            Total Type of Item in Stock</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body red-card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <Link to ="/"className="btn btn-danger"> <i class="fas fa-bell"></i> 
                                            Total Type of Item in Stock</Link>
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

export default MainContent
