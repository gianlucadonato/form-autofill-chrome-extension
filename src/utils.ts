/* global chrome */

// Gets all tabs that have the specified properties, or all tabs if no properties are specified.
export function getTabs(info): Promise<any> {
  return new Promise((resolve, reject) => {
    chrome.tabs.query(info, tabs => {
      if (chrome.runtime.lastError) {
        return reject(new Error(chrome.runtime.lastError.message));
      }
      resolve(tabs);
    });
  });
}

// Get the tab that is active in the current window
export async function getActiveTab() {
  try {
    const tabs = await getTabs({
      active: true,
      currentWindow: true,
    });
    return tabs[0];
  } catch (err) {
    console.log("err", err);
    throw new Error("no active tab");
  }
}

// Send message to content script
export async function sendContent(message) {
  const activeTab = await getActiveTab();
  console.log("activeTab: ", activeTab);
  return new Promise((resolve, reject) => {
    chrome.tabs.sendMessage(activeTab.id, message, response => {
      console.log("response: ", response);
      if (chrome.runtime.lastError) {
        return reject(new Error(chrome.runtime.lastError.message));
      }
      resolve(response);
    });
  });
}
