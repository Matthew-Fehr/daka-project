import { Routes, Route } from "react-router-dom";
import * as React from "react";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

/**
 * Component that contains the routes for the application,
 * so it shows the correct page when the user navigates to a specific path
 */
export default function PageRouter() {
  // const propertyID = "";
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFound />} />
      {/*<Route path='/details/${propertyID}' element={<PropertyDetailsPage propertyId={propertyID} />} />*/}
      <Route path={"/details/:id"} element={<PropertyDetailsPage />} />
    </Routes>
  );
}
