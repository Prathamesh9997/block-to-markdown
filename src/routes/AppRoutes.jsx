import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "../components/Loading";
import Layout from "../components/Layout";
import PrivateRoute from "./PrivateRoute";

const LoginScreen = lazy(() => import("../features/auth/pages/LoginScreen"));
const HomeScreen = lazy(() => import("../features/home/pages/HomeScreen"));
const ApiKeysPage = lazy(() => import("../features/apiKeys/pages/ApiKeysPage"));
const ActivityLogsPage = lazy(() =>
  import("../features/activityLogs/pages/ActivityLogsPage")
);

const AppRoutes = () => (
  <Router>
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route
          path="/"
          element={
            <Layout>
              <HomeScreen />
              {/* <PrivateRoute component={HomeScreen} /> */}
            </Layout>
          }
        />
        <Route
          path="/api-keys"
          element={
            <Layout>
              <ApiKeysPage />
              {/* <PrivateRoute component={ApiKeysPage} /> */}
            </Layout>
          }
        />
        <Route
          path="/activity-logs"
          element={
            <Layout>
              <ActivityLogsPage />
              {/* <PrivateRoute component={ActivityLogsPage} /> */}
            </Layout>
          }
        />
      </Routes>
    </Suspense>
  </Router>
);

export default AppRoutes;
