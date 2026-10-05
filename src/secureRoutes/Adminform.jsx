import {Navigate} from "react-router-dom"
export default function AdminRoutes({children}){

    let checkadmin = localStorage.getItem("role")

    return checkadmin ? children : <Navigate to="/effect"/>

}