const cron = require("node-cron");
const snkrBot = require("./bot");

// Scheduled to run at 6:00 AM when Nike Canada usually releases a shoe.
cron.schedule("0 9 * * *", () => {
	snkrBot();
});
