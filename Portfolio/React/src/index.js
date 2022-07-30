import React from "react";
import ReactDOM from "react-dom";
import { setupFirebase } from "./api/firebase";

import { App } from "./App";

setupFirebase();

ReactDOM.render(<App />, document.getElementById("root"))