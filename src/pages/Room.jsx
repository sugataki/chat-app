import React, { useState, useEffect } from "react";
import { auth, db } from "../config/firebase";

const Room = () => {
  const [messages, setMessages] = useState(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    db.collection("messages").onSnapshot((snapshot) => {
      const messages = snapshot.docs.map((doc) => {
        return doc.data();
      });
      setMessages(messages);
    });
  });

  const renderMessages = () => {
    if (messages === null) return;
    const messageContainer = messages.map((message, index) => {
      return (
        <li key={index}>
          {message.user} : {message.content}
        </li>
      );
    });
    return <ul>{messageContainer}</ul>;
  };

  return (
    <>
      <h1>Room</h1>
      {renderMessages()}
      <form>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">送信</button>
      </form>
      <button onClick={() => auth.signOut()}>Logout</button>
    </>
  );
};

export default Room;
