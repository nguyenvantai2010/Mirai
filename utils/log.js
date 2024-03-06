const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[ ERR ] » ') + data);
			break;
		case "error":
			console.log(chalk.red('[ ERR ] » ') + data);
			break;
		default:
			console.log(chalk.magenta(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[ Zeiw ] » ') + data);
			break;
		case "error":
			console.log(chalk.red('[ Zeiw ] » ') + data);
			break;
		default:
			console.log(chalk.green(`[ Zeiw ] » `) + data);
			break;
	}
}