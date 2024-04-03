import { Outlet } from "react-router-dom";
import Home from "../components/Home";

export default function MainPage() {
    return (
        <div>
            <div className="mt-20">
                <Home></Home>
            </div>
            <Outlet></Outlet>

        </div>
    )
}
