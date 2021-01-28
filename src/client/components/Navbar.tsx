import * as React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return(
        <div className="d-flex navbar bg-success">
            <Link to='/' className="btn btn-lg btn-dark-outline">Home</Link>
        </div>
    )

}

export default Navbar;