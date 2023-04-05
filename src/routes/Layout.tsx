import '../App.css';
import { Outlet, Link  } from "react-router-dom";
import React from 'react'; 
import Button  from '@mui/material/Button';


const Layout : React.FC = () =>{ 

    return ( 
        <div>
          <nav>
            <ul>
                <li>
                    <Button variant="outlined"> <Link to="/"></Link>HOME </Button>
                </li>
                <li>
                    <Button variant="contained" color="secondary"> <Link to="/"> Back </Link> </Button>
                </li>
            </ul>

          </nav>
          <Outlet />
        </div>
    )

}; 

export default Layout; 