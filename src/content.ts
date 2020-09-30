import { ACTIONS } from "./constants";

chrome.runtime.onMessage.addListener(message => {
  console.log("content msg", message);
  executeAction(message.action);
});

function executeAction(action: string) {
  switch (action) {
    case ACTIONS.NEW_TEMPLATE:
      return createTemplate();
    default:
      return;
  }
}

function createTemplate() {
  const inputs = document.querySelectorAll("input");
  const attributes: any = [];
  console.log("createTemplate: ", inputs);
  inputs.forEach(input => {
    const type = input.getAttribute("type");
    const name = input.getAttribute("name");
    const value = input.value;
    const checked = input.checked;
    if (type) {
      attributes.push({ type, name, value, checked });
    }
  });
  console.log("attributes: ", attributes);
}
