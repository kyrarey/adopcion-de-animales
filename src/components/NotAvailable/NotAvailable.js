import React from "react";
import "./NotAvailable.css";
import InfoIcon from '@mui/icons-material/Info';

const NotAvailable = (message) => {
  return (
    <div className="notAvailable">
      <h2>
        No existe información en esta sección <InfoIcon style={{ fontSize: 60 }} />
      </h2>
    </div>
  );
};

export default NotAvailable;
