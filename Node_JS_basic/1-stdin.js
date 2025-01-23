console.log('Welcome to Holberton School, what is your name?');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  let input = process.stdin.read();
  if (input !== null) {
    input = input.trim();
    console.log(`Your name is: ${input}`);
    console.log('This important software is now closing');
    process.exit(0);
  }
});
