import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import StarRating from "./components/StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "okay", "Good", "Amazing"]}
      defaultRating={3}
    />

    <StarRating size={24} color="green" className="test" /> */}
  </React.StrictMode>
);
