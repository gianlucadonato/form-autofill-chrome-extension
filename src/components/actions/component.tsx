import React from "react";
import "./actions.scss";
import ChromeTabs from "../../chrome-tabs";
import { ACTIONS } from "../../constants";

async function sendCommand(action: string): Promise<Promise<void>> {
  const activeTab = await ChromeTabs.queryActiveTab();
  if (!activeTab) {
    return Promise.reject(new Error("no active tab"));
  }
  console.log("activeTab", activeTab);
  const tabs = new ChromeTabs(activeTab.id);

  await tabs.sendMessage({ action });
}

export function Actions() {
  return (
    <div className="row">
      <div className="col-lg-12">
        <button
          className="btn btn-block btn-outline-dark"
          onClick={() => sendCommand(ACTIONS.NEW_TEMPLATE)}
        >
          Generate Template
        </button>
      </div>
    </div>
  );
}
