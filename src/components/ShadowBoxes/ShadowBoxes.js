import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
//data
import shadows from "../../data/shadows";
//styles
import "./shadow_boxes.scss";

const ShadowBoxes = () => {
  return (
    <main className="shadow-cards-wrapper">
      {shadows.map((shadowObject, index) => {
        const { name, shadow, border } = shadowObject;
        return (
          <ShadowCard
            shadow={shadow}
            border={border}
            name={name}
            shadowKey={index}
          />
        );
      })}
    </main>
  );
};

const ShadowCard = ({ name, shadow, border, shadowKey }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyButtonText = isCopied ? "Copied!" : "Copy";

  const onCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <div
      className="shadow-card"
      key={shadowKey}
      style={{
        boxShadow: shadow,
        border: border,
      }}
    >
      <div className="shadow-name">{name}</div>
      <CopyToClipboard
        text={`box-shadow:${shadow};border:${border};`}
        onCopy={onCopy}
      >
        <button className={`copy-code-button ${isCopied ? "copied" : ""}`}>
          {copyButtonText}
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default ShadowBoxes;
