import React from 'react';
import {Link, useLocation} from "react-router";

function BreadCrumb({className}) {
    const {pathname} = useLocation();

    const path = pathname.split("/")[1]

    return (
        <div className={`flex gap-2 text-gray-600 ${className}`}>
            <Link to={"/"}>Home</Link>
            <h2> / </h2>
            <Link to={`/${path}`} className={"capitalize"}>{path}</Link>
        </div>
    );
}

export default BreadCrumb;