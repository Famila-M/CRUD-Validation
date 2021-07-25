import { Link } from "react-router-dom";

/* eslint-disable react/jsx-no-undef */
export default function Sidebar() {
    return <>
    
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

           
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

           
            <hr class="sidebar-divider my-0"/>

            
            <li class="nav-item active">
                <Link to="/dashboard" class="nav-link" >
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>

            
            <hr class="sidebar-divider"/>

           
            <div class="sidebar-heading">
                Interface
            </div>

           
            <li class="nav-item">
                <Link to="/users" class="nav-link collapsed" href="/#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>Users</span>
                </Link>
            </li>

           
            <li class="nav-item">
                <Link to="/products" class="nav-link collapsed" href="/#" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i class="fas fa-fw fa-wrench"></i>
                    <span>Products</span>
                </Link>
            </li>

            
            <hr class="sidebar-divider"/>

            
            

           
            <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

           
            <div class="sidebar-card d-none d-lg-flex">
                <img class="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..."/>
                <p class="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <a class="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
            </div>

        </ul>
        
    </>
}