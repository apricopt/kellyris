import React from "react";

function TopBlackBanner() {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "black",
        color: "white",
        padding: "6px",
        clear: "both",
        height: "57px",
      }}
      id="homeBanner"
    >
      <a href="make-an-appointment/kw_make_an_appointment.html">
        <font style={{ fontSize: 15 }} color="white">
          <b>VISIT OUR LOS ANGELES GALLERY VIRTUALLY</b>
        </font>
      </a>
      <br />{" "}
      <a href="">
        <font color="white">Schedule Your Appointment Now</font>
      </a>
      <span
        style={{
          float: "right",
          position: "absolute",
          top: "6px",
          right: "8px",
          cursor: "pointer",
        }}
        onclick="$('#homeBanner').slideUp()"
      >
        <font size={3}>X</font>
      </span>
    </div>
  );
}

export default TopBlackBanner;
