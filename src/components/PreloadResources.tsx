"use client";

import ReactDOM from "react-dom";

export function PreloadResources() {
  ReactDOM.preconnect("https://embed.typeform.com");
  ReactDOM.preconnect("https://form.typeform.com");
  ReactDOM.prefetchDNS("https://embed.typeform.com");
  ReactDOM.prefetchDNS("https://form.typeform.com");
  ReactDOM.preload("https://embed.typeform.com/next/css/popup.css", { as: "style" });
  return null;
}
