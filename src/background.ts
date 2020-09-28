import ChromeTabs from "./chrome-tabs";

chrome.runtime.onMessage.addListener(onMessage);
chrome.commands.onCommand.addListener(onCommand);

function onMessage(message, sender) {
  console.log("background onMessage", sender.tab, message);
  if (message.popupMounted) {
    console.log("Popup has mounted.");
  }
}

async function onCommand(command) {
  console.log("background onCommand", command);
  // all commands require active tab
  const activeTab = await ChromeTabs.queryActiveTab();
  if (!activeTab) {
    return Promise.reject(new Error("no active tab"));
  }
  console.log("activeTab", activeTab);
  const tabs = new ChromeTabs(activeTab.id);

  await tabs.sendMessage(command);
}
