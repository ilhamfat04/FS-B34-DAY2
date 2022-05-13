import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/signin">SignIn</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar