import { useState } from "react";
import { createClientMessage } from "react-chatbot-kit";

const Actions = (props) => {
  const { actions, reply } = props.messages[props.messages.length - 1];
  const [hide, setHide] = useState(false);

  return hide ? (
    ""
  ) : (
    <div>
      {actions.map((action) => {
        return (
          <button
            style={{
              display: "block",
              marginTop: 10,
              backgroundColor: "teal",
              color: "white",
              width: "100%",
              padding: "10px 30px",
              borderWidth: 0,
              borderRadius: 100,
            }}
            key={action.title}
            onClick={() => {
              setHide(true);
              const replyMessage = createClientMessage(action.data.value);
              props.actionProvider.addMessageToState(replyMessage);
            }}
          >
            {action.title}
          </button>
        );
      })}
    </div>
  );
};

export default Actions;
