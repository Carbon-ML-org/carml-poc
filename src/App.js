import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import UILayout from "./components/UILayout/UILayout";
import ProductsView from "./views/Products/Products";
import ProductView from "./views/Product/Product";
import ProductSelection from "./components/ProductSelection/ProductSelection";
import AuthHeader from "./components/AuthHeader/AuthHeader";
import AuthFooter from "./components/AuthFooter/AuthFooter";
import SignInHeader from "./components/SignInHeader/SignInHeader";
import SignInFooter from "./components/SignInFooter/SignInFooter";

Amplify.configure(awsExports);

function App() {
  return (
    <Routes>
      <Route path="/" element={<UILayout />}>
        <Route path="products" element={<ProductsView />}>
          <Route index element={<ProductSelection />} />
          <Route path=":id" element={<ProductView />} />
        </Route>
        <Route index element={<Navigate replace to="products" />} />
      </Route>
    </Routes>
  );
}

export default withAuthenticator(App, {
  components: {
    Header: AuthHeader,
    Footer: AuthFooter,
    SignIn: {
      Header: SignInHeader,
      Footer: SignInFooter,
    },
  },
});
