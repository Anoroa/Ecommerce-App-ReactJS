import React from 'react';
import {Link, useLocation} from "react-router";

function BreadCrumb() {
    const {pathname} = useLocation();

    const path = pathname.split("/")[1]

    return (
        <div className={"flex gap-2 text-gray-600"}>
            <Link to={"/"}>Home</Link>
            <h2> / </h2>
            <Link to={`/${path}`}>{path}</Link>
        </div>
    );
}

export default BreadCrumb;