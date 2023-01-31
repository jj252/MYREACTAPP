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
import { NavLink } from "react-router-dom";

const Header = () => {
    
    
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            
            <NavbarBrand href='/'>
                <img src={NucampLogo} alt='nucamp logo' className="float-start" />
                <h1 className='mt-1'>JJ's Portfolio Page</h1> 
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