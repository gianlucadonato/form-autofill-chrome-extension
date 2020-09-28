import React, { useEffect } from "react";
import { Actions } from "@src/components/actions";
import "./styles.scss";

export default function Popup() {
  useEffect(() => {
    chrome.runtime.sendMessage({ popupMounted: true });
  }, []);

  return (
    <div className="popup-container">
      <div className="container mx-4 my-4">
        <div className="row">
          <div className="col-lg-12 text-center">
            <p className="lead mb-0">Example Extension</p>
          </div>
        </div>

        <hr />

        <Actions />
      </div>
    </div>
  );
}
