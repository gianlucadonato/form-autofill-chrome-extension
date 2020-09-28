import React from "react";
import { storiesOf } from "@storybook/react";
import { Scroller } from "../component";
import "@src/scss/app.scss";

interface StoryProps {
  children: React.ReactNode;
}

const Story = (props: StoryProps) => {
  return (
    <div className="container mt-4">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-6">{props.children}</div>
      </div>
    </div>
  );
};

storiesOf("Scroller", module).add("renders", () => {
  return (
    <Story>
      <Scroller />
    </Story>
  );
});
