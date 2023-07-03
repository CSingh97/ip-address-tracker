import React from "react";
import "./DataCard.scss"

export default function DataCard({ ipData }) {
  return (
    <>
      { ipData ? (
        <>
          <div id="container">
            <div id="data-card">
              <div className="data-col" id="ip-address">
                <h1>IP ADDRESS</h1>
                <p><b>{ipData.ip}</b></p>
              </div>
              <div className="separator" />
              <div className="data-col" id="location">
                <h1>LOCATION</h1>
                <p><b>{ipData.location.city}, {ipData.location.region} <br></br> {ipData.location.postalCode}</b></p>
              </div>
              <div className="separator" />
              <div className="data-col" id="timezone">
                <h1>TIMEZONE</h1>
                <p><b>UTC {ipData.location.timezone}</b></p>
              </div>
              <div className="separator" />
              <div className="data-col" id="isp">
                <h1>ISP</h1>
                <p><b>{ipData.isp}</b></p>
              </div>
            </div>
          </div>
        </>
      ) : (<></>) }
    </>
  );
};
