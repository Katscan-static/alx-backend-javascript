process.stdin.setEncoding('utf8')

console.log("Welcome to Holberton School, what is your name?")

process.stdin.on('data', function(data) {
	const input = data.trim();

	if (input !== '') {
		console.log("Your name is: " + input);
	}
	else {
		console.log('This important software is now closing')
		process.exit()
	}
});
