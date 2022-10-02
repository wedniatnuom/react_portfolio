import React from "react";

function Footer() {
    return (
<footer>
        <nav className="d-flex " >
            <div className="d-flex align-items-center col-12 justify-content-around" >
                <a href="https://github.com/wedniatnuom" style={{textDecoration: "none", color: "black"}}><div className="text-center" >GitHub</div></a>
                <a href="www.linkedin.com/in/jeremy-johnson-82606b237" style={{textDecoration: "none", color: "black"}}><div className="text-center" >LinkedIn</div></a>
                <a href="https://www.facebook.com/profile.php?id=1368658088" style={{textDecoration: "none", color: "black"}}><div className="text-center">Facebook</div></a>
            </div>
        </nav>
    </footer>
    )
}

export default Footer;