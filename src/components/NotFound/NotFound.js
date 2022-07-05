import React from "react";
import "./NotFound.css";
import ErrorIcon from "@mui/icons-material/Error";

const NotFound = () => {
  return (
    <div class="notFound">
      <h2>
        404: Esta pagina no existe! <ErrorIcon style={{ fontSize: 60 }} />
      </h2>
    </div>
  );
};

export default NotFound;
