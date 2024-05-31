import React from "react";
import { v4 as uuidv4 } from "uuid";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const createToast = (message, variant) => {
    const nextToasts = [
      ...toasts,
      {
        id: uuidv4(),
        message,
        variant,
      },
    ];

    setToasts(nextToasts);
  };

  const dismissToast = (id) => {
    const nextToasts = toasts.filter((toast) => toast.id !== id);

    setToasts(nextToasts);
  };

  return (
    <ToastContext.Provider value={{ toasts, createToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
