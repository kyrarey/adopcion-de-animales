import React from "react";
import "./NotFound.css";
import ErrorIcon from "@mui/icons-material/Error";

const NotFound = () => {
  return (
    <div className="notFound">
      <h2>
        404: ¡La página a la que está tratando de acceder no existe! <ErrorIcon style={{ fontSize: 60 }} />
      </h2>
    </div>
  );
};

export default NotFound;
