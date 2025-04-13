import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainLayout } from "@/layouts/main-layout";
import { PublicLayout } from "@/layouts/public-layout";
import HomePage from "@/routes/home";
import SignIn from "@/routes/signin";
import SignUp from "@/routes/signup";
import AuthenticationLayout from "./layouts/auth-layout";
import ProtectedRoutes from "./layouts/protected-routes";
import { Generate } from "./components/generate";
import Dashboard from "./routes/dashboard";
import CreateEditPage from "./routes/create-edit-page";

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
            <Route element={<Generate />} path="/generate">
              <Route index element={<Dashboard />} />
              <Route path=":interviewId" element={<CreateEditPage />} />
              {/* <Route path="interview/:interviewId" element={<MockLoadPage />} />
              <Route
                path="interview/:interviewId/start"
                element={<MockInterviewPage />}
              />
              <Route path="feedback/:interviewId" element={<Feedback />} /> */}
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
