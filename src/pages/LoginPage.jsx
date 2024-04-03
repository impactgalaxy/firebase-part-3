import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../globalProviders/AuthContext";

export default function LoginPage() {
    const { signInUser } = useContext(authContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);


    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signInUser(email, password)
            .then(() => {
                navigate(location.state)


            }).catch(err => console.log(err))

    }
    return (
        <div className="lg:w-1/2 m-auto">
            <div className="text-center p-4">
                <h1 className="text-3xl text-white">Please Log in</h1>
            </div>

            <div className="flex flex-col w-full border-opacity-50">
                <div className="flex flex-col items-center justify-center gap-3">
                    <button className="btn text-white uppercase bg-gradient-to-r from-blue-500 to-green-500">with github</button>
                    <button className="btn text-white uppercase bg-gradient-to-r from-cyan-500 to-blue-500">with google</button>
                    <button className="btn text-white uppercase bg-gradient-to-r from-blue-500 to-cyan-500">with facebook</button>
                </div>
                <div className="divider">OR</div>
                <form className="lg:w-1/2 m-auto space-y-4" onSubmit={handleLogin}>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="text" name="email" className="grow" placeholder="Email" required />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input type="password" name="password" className="grow" placeholder="password" required />
                    </label>
                    <button type="submit" value="Login" className="btn input-success block m-auto" required >Login
                    </button>
                    <div>
                        <span>Do not have account? Please <em><Link to="/user-registration" >Register</Link></em></span>
                    </div>
                </form>
            </div>


        </div>
    )
}
