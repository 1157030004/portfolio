import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"

function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")} >
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">ariqshd.</a>
                    <div className="itemContainer">
                    <Person className="icon" />
                    <span>+62 857 4145 0513</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                    <span>ariqshd@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="humburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
