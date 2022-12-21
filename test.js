const cli_alerts = require("./index.js");

//pass the relevant options like {type,name,msg} , emojify

// default call
cli_alerts({});
//✖  ERROR    oh no ! you have enetered incorrect options ..

// call with no emojify parameter deafult is false
cli_alerts({
  type: "success",
  msg: "hurrah !!! its done ..",
});
//✔  SUCCESS   hurrah !!! its done ..

//call with emojify parameter
cli_alerts(
  {
    type: "success",
    msg: "hurrah !!! its done ..",
  },
  true
);
//✔  SUCCESS   hurrah !!! its done .. 😎 🎉 ✨ 🥳

//call with name parameter

cli_alerts(
  {
    type: "success",
    msg: "hurrah !!! its done ..",
    name: "done",
  },
  true
);
//✔  DONE   hurrah !!! its done .. 😎 🎉 ✨ 🥳

cli_alerts(
  {
    type: "warning",
    msg: "you haven't added the required parameters kindly check ..",
    name: "parameter required",
  },
  true
);
//⚠  PARAMETER REQUIRED   you haven't added the required parameters kindly check .. 😐 😶 😬

cli_alerts(
  {
    type: "info",
    msg: "I am handsome..",
    name: "self obsession",
  },
  true
);
//ℹ  SELF OBSESSION   I am handsome..  🙂 🙂 🧐

cli_alerts(
  {
    type: "error",
    msg: "something went wrongg...",
  },
  true
);
//✖  ERROR    something went wrongg... 🙄 🤐 😭 🤯
