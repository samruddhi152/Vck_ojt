import { Link } from "react-router-dom";
const Header = () => {
 return(
    <div className="header1">
        <header>
            <nav>
                <Link to="/home">Home <em><em></em></em></Link>
                <Link to="/about">About <em><em></em></em></Link>
                <Link to="/contact">Contact <em><em></em></em></Link>
                <Link to="/courses">Courses <em><em></em></em></Link>
                <Link to="/admission">Admission <em><em></em></em></Link>
            </nav>
        </header> 
    </div>
 )
}

export default Header;