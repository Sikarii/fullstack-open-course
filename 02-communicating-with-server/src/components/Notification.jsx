
import { createContext, useContext, useState } from "react";

const containerStyle = {
  background: "lightgrey",
  fontSize: "20px",
  borderStyle: "solid",
  borderRadius: "5px",
  padding: "10px",
  marginBottom: "10px",
};

const Context = createContext();

export const NotificationProvider = (props) => {
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");

  const [hideMsgTimer, setHideMsgTimer] = useState();

  const error = (msg, durationMs) => show("error", msg, durationMs);
  const success = (msg, durationMs) => show("success", msg, durationMs);

  const hide = () => {
    setMessage("");
  };

  const show = (type, msg, durationMs) => {
    clearTimeout(hideMsgTimer);

    const hideMessage = setTimeout(hide, durationMs ?? 5000);

    setType(type);
    setMessage(msg);
    setHideMsgTimer(hideMessage);
  };

  return (
    <Context.Provider value={{ type, message, error, success }}>
      {props.children}
    </Context.Provider>
  );
};

export const NotificationContainer = () => {
  const notification = useNotification();

  if (!notification.message) {
    return;
  }

  const color = notification.type === "error"
    ? "red"
    : "green";

  return (
    <div style={{ ...containerStyle, color: color }}>
      {notification.message}
    </div>
  );
};

export const useNotification = () => useContext(Context);
