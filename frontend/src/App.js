import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Dashboard from "./components/Dashboard";
import SubscriptionList from "./components/SubscriptionList";
import "./App.css";
import "./index.css";

function NotFound() {
  return <h1>Page Not Found</h1>;
}

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/subscriptions" component={SubscriptionList} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </SnackbarProvider>
  );
}

export default App;
