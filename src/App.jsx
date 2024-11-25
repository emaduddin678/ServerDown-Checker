import { useEffect } from "react";
import "./App.css";

import "preline/preline";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Test from "./pages/Test";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          // <PrivateRoute>
          <Outlet />
          // </PrivateRoute>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="/test" element={<Test />} />
      </Route>
      {/* <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route> */}
    </Routes>
  );
}

export default App;
