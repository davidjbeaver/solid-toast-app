export type ToastObject = {
    toastId: string;
    toastType: ToastType,
    message: string
}

export enum ToastType {
    Success = "is-success",
    Error = "is-error",
    Warning = "is-warning",
    Info = "is-info"
}