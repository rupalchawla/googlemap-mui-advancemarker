import React from "react";
import { createRoot } from "react-dom/client";
import MultiplePin from "./components/multiplepin/MultiplePin";
import CustomPin from "./components/custompin/CustomPin";
import MenuIcon from "@mui/icons-material/Menu";

import {
  Box,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";
import PinInteraction from "./components/advancepininteraction/PinInteraction";
import { APIProvider } from "@vis.gl/react-google-maps";
import config from "../config";


const App = () => {
  const API_KEY = config.API_KEY;
  const [page, setPage] = React.useState("CustomPin");
  const handleClick = (page: string) => {
    setPage(page);
  };

  function renderPage() {
    switch (page) {
      case "MultiplePin":
        return <MultiplePin />;
      case "CustomPin":
        return <CustomPin />;
        case "Interaction":
        return <PinInteraction />;
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }} height="calc(100vh - 70px)">
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => handleClick("MultiplePin")}>
            Multiple Pins
          </Button>
          <Button color="inherit" onClick={() => handleClick("CustomPin")}>
            Custom Pins
          </Button>
          <Button color="inherit" onClick={() => handleClick("Interaction")}>
            Interaction
          </Button>
        </Toolbar>
      </AppBar>
      <APIProvider
    apiKey={API_KEY}
    onLoad={() => console.log("Maps API has loaded.")}
    libraries={['marker']}
  >
      {renderPage()}
      </APIProvider>
    </Box>
  );
};

const root = createRoot(document.getElementById("app"));
root.render(<App />);
