import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainPage() {
    return (
        <div>
            <div className="mt-20">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>

        </div>
    )
}
