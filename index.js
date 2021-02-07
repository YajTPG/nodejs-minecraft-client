var mineflayer = require('mineflayer');
const config = require('./config.json');
const chalk = require("chalk");
const figlet = require("figlet");
var bot = mineflayer.createBot({
  host: `${config.serverIP}`,
  port: `${config.port}`,
  username: `${config.username}`,
  password: `${config.password}`,
  version: `${config.minecraftVersion}`,
  auth: `${config.auth}`
});
function init() {
  console.log(
    chalk.green(
      figlet.textSync("NodeJS    MCC", {
        font: "Standard",
        horizontalLayout: "auto",
        verticalLayout: "auto"
      })
    )
  );
}
init();
bot.on("login", async => {
  console.log("Starting.");
  console.log("--------------------------");
  console.log(`Server host: ${config.serverIP}`);
  console.log(`Server port: ${config.port}`);
  console.log(`Email/username: ${config.username}`);
  console.log(`Minecraft Version: ${config.minecraftVersion}`);
  console.log("--------------------------");
  console.log("");
  console.log("");
  function init1() {
    console.log(
      chalk.red(
        "USE AT YOUR OWN RISK!"
      )
    );
  }
  init1();
  console.log("");
  console.log("");
  function cmd1() {
    bot.chat(`${config.cmd1}`)
  }
  function cmd2() {
    bot.chat(`${config.cmd2}`)
  }
  setTimeout(cmd1, 3000) // Sending command 1 on joining the server after 3 seconds
  setTimeout(cmd2, 5000) // Sending command 2 on joining the server after 5 seconds
});
bot.on("message", message => {
  console.log(`${message}`);
});
process.stdin.setEncoding('utf-8')
var stdin = process.openStdin();
stdin.on("data", function (d) {
  let msg = d.toString().trim();
  if (msg.length === 0) return;
  bot.chat(msg);
});