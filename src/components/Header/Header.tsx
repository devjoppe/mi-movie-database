import {Link} from "react-router-dom";
import {FaSearch} from "react-icons/fa";

const Header = () => {
    return (
        <div className="flex relative justify-between h-16 items-center bg-primary pl-4 pr-4">
            <div><Link to="/">HEADER LOGO</Link></div>
            <div><FaSearch /></div>
        </div>
    )
}

export default Header