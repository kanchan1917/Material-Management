import React from 'react'
import images from '../images/stock.png'


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
                                <li><a class="nav-link" href="index-0.html">Home</a></li>

                            </ul>
                        </li>
                   
                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link has-dropdown" data-toggle="dropdown"><i class="fas fa-columns"></i> <span>Stock-Section</span></a>
                            <ul class="dropdown-menu">
                                <li><a class="nav-link" href="">Stock</a></li>
                                <li><a class="nav-link" href="">Export data</a></li>
                                <li><a class="nav-link" href="">Import From File</a></li>
                                <li><a class="nav-link" href="">History</a></li>

                            </ul>
                        </li>



                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link has-dropdown"><i class="far fa-file-alt"></i> <span>Merchant User</span></a>
                            <ul class="dropdown-menu">
                                <li><a class="nav-link" href="forms-advanced-form.html">Add Merchant User</a></li>
                                <li><a class="nav-link" href="forms-editor.html">Merchant User List</a></li>

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
