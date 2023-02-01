import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem
    } from 'reactstrap';
import {  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NucampLogo from '../app/assets/img/logo.png';
import Newlogo from '../app/assets/img/logo2.png';
import { NavLink } from "react-router-dom";
import style from '../app/StudentList.module.css';

const Header = () => {
    
    
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            
            <NavbarBrand href='/' className={style.navBarBrand}>
                <img src={Newlogo} alt='nucamp logo' className="float-start" />
                 
             </NavbarBrand>
             <Nav className='ms-auto' navbar>
                <NavItem color='success'> 
                    <i className="fa fa-home fa-lg" /> Home
                </NavItem>
                
             </Nav>
             
        </Navbar>
        
    )
}

 
export default Header;