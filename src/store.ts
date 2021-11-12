import { nanoid } from "nanoid";
import { createStore } from "solid-js/store"
import { ToastObject, ToastType } from "./types";

const [toastStore, updateToastStore] = createStore({
    toasts: [] as ToastObject[]
})

const addToast = (toastType: ToastType, message: string) => {
    const toastId = nanoid();
    updateToastStore("toasts", (t) => [{toastId, toastType, message}, ...t])
    setTimeout(() => {
        updateToastStore("toasts", (t) => t.filter((i) => i.toastId !== toastId));
    }, 5000)
}

const removeToast = (toastId: string) => {
    updateToastStore("toasts", (t) => t.filter((i) => i.toastId !== toastId));
}

export default {
    toastStore,
    addToast,
    removeToast
}