import React from "react";
import ReactDOM from "react-dom";

import "./PromptModal.css";

export default function PromptModal(props) {
  return ReactDOM.createPortal(
    <>
      <div className="prompt">{props.children}</div>
    </>,
    document.getElementById("promptPortal")
  );
}
