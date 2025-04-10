import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainLayout } from "@/layouts/main-layout";
import { PublicLayout } from "@/layouts/public-layout";
import HomePage from "@/routes/home";
import SignIn from "@/routes/signin";
import SignUp from "@/routes/signup";
import AuthenticationLayout from "./layouts/auth-layout";
import ProtectedRoutes from "./layouts/protected-routes";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* public routes */}
          <Route element={<PublicLayout />}>
            <Route index element={<HomePage />} />
          </Route>

          {/* authentication route */}
          <Route element={<AuthenticationLayout />}>
            <Route path="/signin/*" element={<SignIn />} />
            <Route path="/signup/*" element={<SignUp />} />
          </Route>

          {/* protected routes */}
          <Route
            element={
              <ProtectedRoutes>
                <MainLayout />
              </ProtectedRoutes>
            }
          >
            {/* add all protected routes */}
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
