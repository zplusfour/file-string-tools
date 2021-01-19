const tools = require('./');
const constr = new tools("hello.txt");

console.log(`${constr.ext()} and ${constr.name()}`);