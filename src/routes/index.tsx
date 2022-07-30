import { Navigate } from "react-router";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import HomeView from "../views/home";
import SignInView from "../views/signin";
import LoginView from "../views/login";
import StartView from "../views/start";
import StartRacesView from "../views/start/races";
import StartSizeView from "../views/start/sizes";
import StartLocationView from "../views/start/location";
import SearchView from "../views/search";

const Routes = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<HomeView />} />
        <Route path="/sign-in" element={<SignInView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/start/" element={<StartView />} />
        <Route path="/start/:category" element={<StartRacesView />} />
        <Route path="/start/:category/:race" element={<StartSizeView />} />
        <Route
          path="/start/:category/:race/:size"
          element={<StartLocationView />}
        />
        <Route path="/search" element={<SearchView />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </RouterRoutes>
    </BrowserRouter>
  );
};

export default Routes;
