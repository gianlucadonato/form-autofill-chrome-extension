import { sendContent } from "./utils";

chrome.runtime.onMessage.addListener(onMessage);
chrome.commands.onCommand.addListener(onCommand);
enableAutofillSettings(false);

function onMessage(message, sender) {
  console.log("background onMessage", sender.tab, message);
  if (message.popupMounted) {
    console.log("Popup has mounted.");
  }
  if (message.hasOwnProperty("enableAutofillSettings")) {
    console.log("enableAutofillSettings: ", message.enableAutofillSettings);
    enableAutofillSettings(message.enableAutofillSettings);
  }
}

async function onCommand(command) {
  console.log("background onCommand", command);
  const cmd = await sendContent(command);
  console.log("cmd: ", cmd);
}

function enableAutofillSettings(value = true) {
  const settings = [
    "autofillAddressEnabled",
    "autofillCreditCardEnabled",
    "passwordSavingEnabled",
  ];

  settings.forEach(setting => {
    chrome.privacy.services[setting].set({ value }, function() {
      if (!chrome.runtime.lastError === undefined)
        console.log(`Set settings: ${setting}`);
      else
        console.log(
          `Unable to set settings: ${setting}`,
          chrome.runtime.lastError,
        );
    });
  });
}
