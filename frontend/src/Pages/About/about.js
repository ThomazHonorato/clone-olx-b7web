import React from 'react';
import {Link} from 'react-router-dom';

const Page = () =>{
    return (
        <div>
            <h1>About Page</h1>
            <Link to="/">Home</Link>
        </div>
    );
}

export default Page;