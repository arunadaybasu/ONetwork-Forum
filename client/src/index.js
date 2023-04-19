import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

import {
  getChainOptions,
  WalletProvider,
} from '@terra-money/wallet-provider';

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

getChainOptions().then((chainOptions) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <WalletProvider {...chainOptions}>
      <Provider store={store}>
        <App />
      </Provider>
    </WalletProvider>
  );
});