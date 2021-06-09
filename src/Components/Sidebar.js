import React from 'react'
import images from '../images/stock.png'
import { Link } from 'react-router-dom'


const Sidebar = () =>
{
    return (
        <div>
            <div class="main-sidebar">
                <aside id="sidebar-wrapper">
                    <div class="sidebar-brand">
                        <img src={images} alt="stock-image" className="stock-image" />
                    </div>

                    <ul class="sidebar-menu sidebar-margin">
                        
                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link has-dropdown"><i class="fas fa-fire"></i><span>Dashboard</span></a>
                            <ul class="dropdown-menu">
                                <li><Link to="/dashboard" class="nav-link">Home</Link></li>

                            </ul>
                        </li>
                   
                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link has-dropdown" data-toggle="dropdown"><i class="fas fa-columns"></i> <span>Stock-Section</span></a>
                            <ul class="dropdown-menu">
                                <li><Link to="/stock" class="nav-link">Stock</Link></li>
                                <li><Link to="/export" class="nav-link">Export Data</Link></li>
                                <li><Link to="/import" class="nav-link">Import From File</Link></li>
                                <li><Link to="/history" class="nav-link">History</Link></li>

                            </ul>
                        </li>



                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link has-dropdown"><i class="far fa-file-alt"></i> <span>Merchant User</span></a>
                            <ul class="dropdown-menu">
                                <li><Link to="/merchantuser" class="nav-link">Add Merchant User</Link></li>
                                <li><Link to="/merchantList" class="nav-link">Merchant User List</Link></li>

                            </ul>
                        </li>


                    </ul>

                    <div class="mt-4 mb-4 p-3 hide-sidebar-mini">
                        <a href="" class="btn btn-primary btn-lg btn-block btn-icon-split">
                            <i class="fas fa-sign-out-alt"></i>Logout
                        </a>
                    </div>
                </aside>
            </div>

        </div>
    )
}

export default Sidebar
