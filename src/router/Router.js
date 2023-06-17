import { Routes, Route } from "react-router-dom"
import Dashboard from "../views/Pages/Dashboard"
import Login from "../views/Pages/Login"


function Router() {
    return (
        <div className="app-content">
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </div>
    )
}

export default Router