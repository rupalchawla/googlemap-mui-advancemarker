import React from "react";
import { createRoot } from "react-dom/client";
import MultiplePin from "./components/MultiplePin";
import CustomPin from "./components/custompin/CustomPin";
import MenuIcon from "@mui/icons-material/Menu";

import {
  Box,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";

const App = () => {
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
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }} height="calc(100vh - 70px)">
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => handleClick("MultiplePin")}>
            Multiple Pin & Circle
          </Button>
          <Button color="inherit" onClick={() => handleClick("CustomPin")}>
            Custom Pin & Ino Window
          </Button>
        </Toolbar>
      </AppBar>

      {renderPage()}
    </Box>
  );
};

const root = createRoot(document.getElementById("app"));
root.render(<App />);
