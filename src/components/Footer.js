import React from "react";

function Footer() {
    return (
<footer>
        <nav className="d-flex  flex-row" >
            <div className="d-flex align-items-end justify-content-end w-100 " >
                <a href="https://github.com/wedniatnuom" style={{textDecoration: "none", color: "black"}}><div className="m-1 text-center rounded border border-dark" style={{backgroundColor: "lightgray"}} >-GitHub-</div></a>
                <a href="https://www.linkedin.com/in/jeremy-johnson-82606b237" style={{textDecoration: "none", color: "black"}}><div className="m-1 text-center rounded border border-dark" style={{backgroundColor: "lightgray"}} >-LinkedIn-</div></a>
                <a href="https://www.facebook.com/profile.php?id=1368658088" style={{textDecoration: "none", color: "black"}}><div className="m-1 text-center rounded border border-dark" style={{backgroundColor: "lightgray"}}>-Facebook-</div></a>
            </div>
        </nav>
    </footer>
    )
}

export default Footer;