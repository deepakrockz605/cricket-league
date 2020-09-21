import React from "react";
import "./App.scss";
import RestrictedContainer from "./Components/RestrictedContainer";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <AmplifySignOut />
      <div className="container">
        <RestrictedContainer />
      </div>
      
    </div>
  );
}

export default withAuthenticator(App);
