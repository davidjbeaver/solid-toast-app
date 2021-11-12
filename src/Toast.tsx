import { For } from "solid-js";
import store from "./store";
import { ToastObject, ToastType } from "./types";

const Toast = () => {
  return (
    <div class="toast-container">
      <For each={store.toastStore.toasts}>
        {(toast: ToastObject) => (
          <div class="toast" className={toast.toastType}>
            <i
              class="icon"
              classList={{
                "icon-check-circle": toast.toastType === ToastType.Success,
                "icon-x-circle": toast.toastType === ToastType.Error,
                "icon-alert-circle": toast.toastType === ToastType.Warning,
                "icon-info": toast.toastType === ToastType.Info,
              }}
            ></i>
            <span>{toast.message}</span>
            <button onClick={() => store.removeToast(toast.toastId)}>X</button>
          </div>
        )}
      </For>
    </div>
  );
};

export default Toast