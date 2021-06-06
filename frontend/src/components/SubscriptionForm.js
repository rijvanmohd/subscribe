import React, { useState, useEffect } from "react";
import { withSnackbar } from "notistack";

function SubscriptionForm({ handleClick, enqueueSnackbar }) {
  const [email, setEmail] = useState("");

  useEffect(() => {
    return () => {
      setEmail("");
    };
  }, []);

  const validateEmail = (event) => {
    event.preventDefault();
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email.toLowerCase())) {
      handleClick(email);
    } else {
      enqueueSnackbar("Email Address is not valid", { variant: "error" });
    }
  };

  return (
    <form className="m-4 flex justify-center">
      <input
        className="rounded-l-xl p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
        placeholder="your@mail.com"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <button
        className="px-8 rounded-r-xl bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r"
        onClick={validateEmail}
      >
        Subscribe
      </button>
    </form>
  );
}

export default withSnackbar(SubscriptionForm);
