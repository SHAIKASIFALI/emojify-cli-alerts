/*
cli alerts package 

which shows different erorr messages on various cli alerts..like

success , error etc

*/
const chalk = require("chalk");
const sym = require("log-symbols");
const green = chalk.green;
const greenI = chalk.inverse.green;
const red = chalk.red.bold;
const redI = chalk.inverse.red.bold;
const orange = chalk.keyword("orange");
const orangeI = chalk.inverse.keyword("orange");
const blue = chalk.blue;
const blueI = chalk.inverse.blue;

module.exports = (opts, emojify = false) => {
  const defaultOptions = {
    type: "error",
    msg: "oh no ! you have enetered incorrect options ..",
    name: "",
  };

  const { type, msg, name } = { ...defaultOptions, ...opts };
  const printName = name ? name.toUpperCase() : type.toUpperCase();
  if (type === "success") {
    console.log(
      `\n${sym.success} ${greenI(` ${printName} `)}  ${green(msg)} ${
        emojify == true ? "😎 🎉 ✨ 🥳" : ""
      }\n`
    );
  }
  if (type === "info") {
    console.log(
      `\n${sym.info} ${blueI(` ${printName} `)}  ${blue(msg)}  ${
        emojify == true ? "🙂 🙂 🧐" : ""
      } \n `
    );
  }
  if (type === "warning") {
    console.log(
      `\n${sym.warning} ${orangeI(` ${printName} `)}  ${orange(msg)} ${
        emojify == true ? "😐 😶 😬" : ""
      }\n`
    );
  }
  if (type === "error") {
    console.log(
      `\n${sym.error}  ${redI(` ${printName} `)}   ${chalk.red.bold(msg)} ${
        emojify == true ? "🙄 🤐 😭 🤯" : ""
      }\n`
    );
  }
};
