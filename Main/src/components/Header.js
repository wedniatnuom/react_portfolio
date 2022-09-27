import React from "react";
import Nav from "./Nav";

function Header(props) {
    return (
    <header>
        <Nav page={props.page} setPage={props.setPage}/>
    </header>
    )
}

export default Header;