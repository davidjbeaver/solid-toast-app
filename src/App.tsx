import type { Component } from "solid-js";


import store from "./store";
import Toast from "./Toast";
import { ToastType } from "./types";

const App: Component = () => {
  return (
    <div class="app">
      My Toast App!<br/>
      <button onClick={() => store.addToast(ToastType.Success, "This is a success toast!")}>Success Toast</button><br/>
      <br/>
      <button onClick={() => store.addToast(ToastType.Error, "This is a success toast!")}>Error Toast</button><br/>
      <br/>
      <button onClick={() => store.addToast(ToastType.Warning, "This is a success toast!")}>Warning Toast</button><br/>
      <br/>
      <button onClick={() => store.addToast(ToastType.Info, "This is a success toast!")}>Info Toast</button><br/>
      <br/>
      <Toast />
    </div>
  );
};

export default App;
