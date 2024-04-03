import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../globalProviders/AuthContext";

export default function RegistrationPage() {
    const { createUser } = useContext(authContext);
    const handleRegistration = (e) => {
        e.preventDefault();
        const username = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(username, email, password);
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            }).catch(err => {
                console.log(err);
            })
    }
    return (
        <div className="lg:w-1/2 m-auto">
            <div className="text-center p-5">
                <h1 className="text-4xl text-white">Please Registration</h1>
            </div>
            <form className="lg:w-1/2 m-auto space-y-4" onSubmit={handleRegistration}>

                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                    <input type="text" name="name" className="grow" placeholder="Username" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    <input type="text" name="email" className="grow" placeholder="Email" required />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                    <input type="password" name="password" className="grow" placeholder="password" required />
                </label>
                <label className="block mt-4">
                    <input type="checkbox" required /> Accept terms and <a href="#">condition</a>
                </label>
                <input type="submit" value="Register" className="btn input-success block m-auto" required />
                <div>
                    <span>Already have account? Please <em><Link to="/user-login" >Login</Link></em></span>
                </div>
            </form>

        </div>
    )
}
