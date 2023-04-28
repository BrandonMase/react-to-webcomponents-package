import React from "react";
import App from "./App";
import ReactDOMClient from 'react-dom/client';
import reactToWebComponent from 'react-to-webcomponent';
import { Header } from "./components/Header";

customElements.define(
  "rwc-header",
  reactToWebComponent(App, React, ReactDOMClient, {
    props: ["text"],
  })
);

customElements.define(
  "rwc-header-two",
  reactToWebComponent(Header, React, ReactDOMClient)
);