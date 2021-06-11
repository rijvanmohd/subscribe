import React, { useState, useEffect, useRef } from "react";
import { withSnackbar } from "notistack";

function SubscriptionForm({ handleClick, enqueueSnackbar }) {
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [checkTime, setCheckTime] = useState(false);
  const [time, setTime] = useState(60);
  const ref = useRef();

  useEffect(() => {
    addCounter();
    return () => {
      setEmail("");
      setAge(0);
    };
  }, []);

  useEffect(() => {
    if (time === 0) {
      console.log("disabled");
      setCheckTime(true);
      clearInterval(ref.current);
    }
  }, [time]);

  const addCounter = () => {
    ref.current = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
  };

  console.log("check email", email);

  const validateEmail = (event) => {
    event.preventDefault();
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email.toLowerCase())) {
      if (age <= 0) {
        enqueueSnackbar("Enter Valid Age", { variant: "error" });
      } else {
        handleClick(email, age);
        console.log("validation check");
        setEmail("");
        setAge(0);
      }
    } else {
      enqueueSnackbar("Email Address is not valid", { variant: "error" });
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <form className="m-4 flex justify-center">
        <input
          className="rounded-l-xl p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
          placeholder="your@mail.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          className="rounded-l-xl p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
          placeholder="enter your age"
          value={age}
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <button
          className="px-8 rounded-r-xl bg-red-400  text-white font-bold p-4 uppercase border-red-500 border-t border-b border-r disabled:opacity-50"
          onClick={validateEmail}
          disabled={checkTime}
        >
          Subscribe
        </button>
      </form>
      <div className="text-black text-center">{time}</div>
    </div>
  );
}

export default withSnackbar(SubscriptionForm);
