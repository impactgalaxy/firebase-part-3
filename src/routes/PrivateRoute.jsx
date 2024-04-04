import { useContext, useEffect, useState } from "react"
import { authContext } from "../globalProviders/AuthContext"
// import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
// import SweetAlert from "react-bootstrap-sweetalert";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";




export default function PrivateRoute({ children }) {
    const { currentUser } = useContext(authContext);
    const location = useLocation()


    if (currentUser !== null) {
        return children;
    }
    return (
        <>
            {/* <Navigate to="/user-login" state={location.pathname}></Navigate> */}
            <ExampleComponent></ExampleComponent>

        </>

    );
}
const ExampleComponent = () => {
    const location = useLocation();
    // const [showAlert, setShowAlert] = useState(false)
    const [isShow, setIsShow] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/user-login", { state: location.pathname })
        }, 3000)
    }, [])

    // const handleConfirm = () => {
    //     // Redirect to another page
    //     window.location.href = "/user-login";
    //     console.log(location);
    // };
    return (
        <div>

            <SweetAlert
                show={isShow}
                title="Please login first"
                showCloseButton
                // onConfirm={handleConfirm}
                onCancel={() => {
                    console.log('cancel');
                    setIsShow(false);
                }}
                onEscapeKey={() => setIsShow(false)}
                onOutsideClick={() => setIsShow(false)}

            >
                You may need to login to proceed.

            </SweetAlert>
        </div>
    );
};
PrivateRoute.propTypes = {
    children: PropTypes.node
}