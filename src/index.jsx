import React from "react";
import { createRoot } from "react-dom/client";
import AviasalesApp from "./components/AviasalesApp/AviasalesApp";

const container = document.getElementById("root");
const rootInstance = createRoot(container);

rootInstance.render(<AviasalesApp />);
