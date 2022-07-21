import React from "react";
import { render, fireEvent, screen } from "../../utils/test-utils";
import Overview from ".";


describe("Overview Component", function () {

    jest.mock("@ant-design/icons", () => jest.fn());
    
    it("Test Overview component snapshot", async () => {
        render(<Overview />)
        expect(screen).toMatchSnapshot();
      })
});
