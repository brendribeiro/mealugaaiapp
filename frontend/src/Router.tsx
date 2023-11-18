import { Route, Routes } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

export function Router() {
    return (
        <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/auth">
                <Route path="login" element={<SignIn />} />
                <Route path="register" element={<SignUp />} />
            </Route>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    )
}