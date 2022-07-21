import React from "react";
import App from "./App";
import { render, fireEvent, screen } from "./utils/test-utils";


describe("App Component", function () {
    it("Test App component snapshot", async () => {
        render(<App />)
        expect(screen).toMatchSnapshot();
      })
});
