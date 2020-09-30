import React, { useState, useEffect } from "react";
import "./actions.scss";
import { ACTIONS } from "../../constants";
import { sendContent } from "../../utils";

export function Actions() {
  const [enableAutofillSettings, setEnableAutofillSettings] = useState(false);

  const onClickSettings = () => {
    setEnableAutofillSettings(!enableAutofillSettings);
    chrome.runtime.sendMessage({
      enableAutofillSettings: !enableAutofillSettings,
    });
  };

  useEffect(() => {
    chrome.privacy.services.autofillAddressEnabled.get({}, details => {
      setEnableAutofillSettings(details.value);
    });
  }, []);

  return (
    <div className="row">
      <div className="col-lg-12">
        <button
          className="btn btn-block btn-outline-dark"
          onClick={() => sendContent({ action: ACTIONS.NEW_TEMPLATE })}
        >
          Generate Template
        </button>
        <button
          className="btn btn-block btn-outline-dark"
          onClick={onClickSettings}
        >
          Enable Autofill: {`${enableAutofillSettings}`}
        </button>
      </div>
    </div>
  );
}
