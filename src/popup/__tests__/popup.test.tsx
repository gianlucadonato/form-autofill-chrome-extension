import * as React from "react";
import Popup from "../popup";
import renderer from "react-test-renderer";

it("component renders", () => {
  const tree = renderer.create(<Popup />).toJSON();
  expect(tree).toMatchSnapshot();
});
