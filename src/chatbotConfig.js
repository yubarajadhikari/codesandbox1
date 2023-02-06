import Overview from "./widgets/Overview";
import GlobalStatistics from "./widgets/GlobalStatistics";
import LocalStatistics from "./widgets/LocalStatistics";
import Contact from "./widgets/Contact";
import MedicineDelivery from "./widgets/MedicineDelivery";
import CoBotAvatar from "./CoBotAvatar";
import Actions from "./widgets/Actions";

const config = {
  lang: "no",
  botName: "CoBot",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#04668a"
    },
    chatButton: {
      backgroundColor: "#0f5faf"
    }
  },
  initialMessages: [
  //   createChatBotMessage(
  //     `Hi, I'm here to provide you with latest COVID 19 data to keep you safe!`
  //   ),
  //   createChatBotMessage(
  //     "Here's a quick overview of what I can help you with. You can also type in.",
  //     {
  //       withAvatar: false,
  //       delay: 400,
  //       widget: "overview"
  //     }
  //   )
  ],
  state: {},
  customComponents: { botAvatar: (props) => <CoBotAvatar {...props} /> },
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
      mapStateToProps: ["messages"]
    },
    {
      widgetName: "globalStatistics",
      widgetFunc: (props) => <GlobalStatistics />
    },
    {
      widgetName: "localStatistics",
      widgetFunc: (props) => <LocalStatistics />
    },
    {
      widgetName: "emergencyContact",
      widgetFunc: (props) => <Contact />
    },
    {
      widgetName: "medicineDelivery",
      widgetFunc: (props) => <MedicineDelivery />
    },
    {
      widgetName: "actions",
      widgetFunc: (props) => <Actions {...props} />,
      mapStateToProps: ["messages"]
    } 
  ]
};

export default config;
