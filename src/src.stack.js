const { IF_stack_array } = require("../interfaces/interface.stack");

const execute = () =>
{
	IF_stack_array.display();

	IF_stack_array.push(10);
	// console.log(`Peek: ${(IF_stack_array.peek())? IF_stack_array.peek().__value: null}`);
	IF_stack_array.peek();
	IF_stack_array.display();
	
	IF_stack_array.push(12);
	IF_stack_array.push(15);
	IF_stack_array.push(17);
	IF_stack_array.push(21);
	IF_stack_array.push(24);

	// console.log(`Peek: ${(IF_stack_array.peek())? IF_stack_array.peek().__value: null}`);
	IF_stack_array.peek();
	IF_stack_array.display();

	IF_stack_array.push(26);
	IF_stack_array.push(27);
	IF_stack_array.push(29);
	IF_stack_array.push(32);
	IF_stack_array.push(35);

	IF_stack_array.push(38);
	IF_stack_array.push(40);

	IF_stack_array.display();
	// console.log(`Peek: ${(IF_stack_array.peek())? IF_stack_array.peek().__value: null}`);
	IF_stack_array.peek();

	// console.log(`Pop: ${IF_stack_array.pop()}`);
	IF_stack_array.pop();
	IF_stack_array.display();

	IF_stack_array.pop();
	IF_stack_array.pop();
	IF_stack_array.pop();
	IF_stack_array.display();
	IF_stack_array.peek();

}

module.exports = {
	execute,
};
