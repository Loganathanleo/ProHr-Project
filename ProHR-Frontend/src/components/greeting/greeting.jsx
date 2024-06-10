import React, { useState, useEffect } from "react";
import { wishes } from "../../assets/mockData/constant";

export const Greeting = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const calculateGreeting = () => {
      const currentHour = new Date().getHours();

      if (currentHour >= 5 && currentHour < 12) {
        setGreeting(wishes.morning);
      } else if (currentHour >= 12 && currentHour < 17) {
        setGreeting(wishes.afternoon);
      } else {
        setGreeting(wishes.evening);
      }
    };

    calculateGreeting();
  }, []);
  return <div>{greeting}</div>;
};
