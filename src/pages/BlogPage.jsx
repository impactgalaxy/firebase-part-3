import { useContext } from "react"
import { authContext } from "../globalProviders/AuthContext";

export default function BlogPage() {
    const values = useContext(authContext);
    console.log(values);
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="border p-10 text-4xl">This is blog page</div>

        </div>
    )
}
