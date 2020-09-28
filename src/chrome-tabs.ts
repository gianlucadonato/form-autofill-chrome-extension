/* global chrome */

export default class ChromeTabs {
  tabId: number;

  constructor(tabId: number) {
    this.tabId = tabId;
  }

  // Gets all tabs that have the specified properties, or all tabs if no properties are specified.
  static query(info) {
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
  static async queryActiveTab() {
    const tabs: any = await ChromeTabs.query({
      active: true,
      currentWindow: true,
    });
    return tabs.length > 0 ? tabs[0] : null;
  }

  // Send message to content script
  sendMessage(message) {
    return new Promise((resolve, reject) => {
      chrome.tabs.sendMessage(this.tabId, message, response => {
        if (chrome.runtime.lastError) {
          return reject(new Error(chrome.runtime.lastError.message));
        }
        resolve(response);
      });
    });
  }
}
