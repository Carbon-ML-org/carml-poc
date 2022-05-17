import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import AppLayout from "./components/AppLayout/AppLayout";
import MessageTypesView from "./views/MessageTypes/MessageTypes";
import MessageTypeView from "./views/MessageType/MessageType";
import AuthHeader from "./components/AuthHeader/AuthHeader";
import AuthFooter from "./components/AuthFooter/AuthFooter";
import SignInHeader from "./components/SignInHeader/SignInHeader";
import SignInFooter from "./components/SignInFooter/SignInFooter";

Amplify.configure(awsExports);

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="message-types">
          <Route index element={<MessageTypesView />} />
          <Route path=":id" element={<MessageTypeView />} />
        </Route>
        <Route index element={<Navigate replace to="message-types" />} />
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
