import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import HomeView from "../views/home";

const Routes = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<HomeView />} />
      </RouterRoutes>
    </BrowserRouter>
  );
};

export default Routes;
