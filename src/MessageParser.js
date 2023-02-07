import SampleData from "./sample.json";
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    if (message.includes("hi") || message.includes("hi")) {
      return this.actionProvider.handleText({
        text: "Welcome, Let's get started",
      });
    }
    else if (message.includes("adapt")) {
      const { body, actions } = SampleData;
      const { items } = body[0];
      items.forEach((item, index) => {
        if (item.type === "TextBlock") {
          if (index === items.length - 1 && actions.length > 0) {
            return this.actionProvider.handleActionSubmit({
              actions,
              text: item.text,
            });
          } else {
            return this.actionProvider.handleText({ text: item.text });
          }
        }
      });
    }
    else if (
      message.includes("options") ||
      message.includes("help") ||
      message.includes("do for me")
    ) {
      return this.actionProvider.handleOptions({ withAvatar: true });
    }

    else if (
      message.includes("talk") ||
      message.includes("speak") ||
      message.includes("real person") ||
      message.includes("call") ||
      message.includes("emergency") ||
      message.includes("contact")
    ) {
      return this.actionProvider.handleContact();
    }

    else if (
      message.includes("stats") ||
      message.includes("statistics") ||
      message.includes("deaths")
    ) {
      return [
        this.actionProvider.handleGlobalStats(),
        this.actionProvider.handleLocalStats(),
      ];
    }

    else if (message.includes("medicine") || message.includes("delivery")) {
      return this.actionProvider.handleMedicine();
    }

    else if (
      message.includes("joke") ||
      message.includes("jokes") ||
      message.includes("funny")
    ) {
      return this.actionProvider.handleJoke();
    }

    else if (message.includes("thanks") || message.includes("thank you")) {
      return this.actionProvider.handleThanks();
    } else return this.actionProvider.handleOptions({ withAvatar: true });
  }
}

export default MessageParser;
