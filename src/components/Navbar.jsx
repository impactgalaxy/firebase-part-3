import { useContext } from "react";
import { authContext } from "../globalProviders/AuthContext";
import { Link } from "react-router-dom";

export default function Navbar() {
    const { currentUser, userSignOut } = useContext(authContext);
    const navLinks = (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/my-orders">Orders</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
        </>
    );
    const handleSignOut = () => {
        userSignOut().then(() => {
            console.log("user sign out");

        }).catch(err => {
            console.log("Something wrong", err);
        })
    }
    return (
        <div>
            <nav>
                <div className="navbar bg-base-100 fixed top-0 w-full">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] px-2 py-3 shadow bg-base-100 rounded-box w-52">
                                {navLinks}
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl uppercase">Firebase part 3</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLinks}

                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            currentUser === null ?
                                (<Link to="/user-login" className="btn btn-ghost">Log In</Link>)
                                :
                                (<button className="btn" onClick={handleSignOut}>Sign out</button>)
                        }
                    </div>
                </div>
            </nav>

        </div>
    )
}
