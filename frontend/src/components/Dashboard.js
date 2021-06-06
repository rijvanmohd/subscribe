import React from "react";
import { withSnackbar } from "notistack";
import SubscriptionForm from "./SubscriptionForm";
import { SubscribeAPI } from "../api/subscribe";

function Dashboard(props) {
  const handleSubscribe = (email) => {
    const data = { email };
    SubscribeAPI.subscribe(data)
      .then((response) => {
        if (response.status === 201) {
          props.enqueueSnackbar("Subscribed Successfully", {
            variant: "success",
          });
        } else {
          props.enqueueSnackbar(response.data.message, { variant: "error" });
        }
      })
      .catch((err) => {
        props.enqueueSnackbar(err.response.data.message, { variant: "error" });
      });
  };

  return <SubscriptionForm handleClick={handleSubscribe} />;
}

export default withSnackbar(Dashboard);
