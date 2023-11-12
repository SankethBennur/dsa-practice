const {
	IF_stack_array,
	IF_stack_linked_list,
} = require("../interfaces/interface.stack");

// const execute = () =>
// {
	// IF_stack_array.display();

	// IF_stack_array.push(10);
	// // console.log(`Peek: ${(IF_stack_array.peek())? IF_stack_array.peek().__value: null}`);
	// IF_stack_array.peek();
	// IF_stack_array.display();

	// IF_stack_array.push(12);
	// IF_stack_array.push(15);
	// IF_stack_array.push(17);
	// IF_stack_array.push(21);
	// IF_stack_array.push(24);

	// // console.log(`Peek: ${(IF_stack_array.peek())? IF_stack_array.peek().__value: null}`);
	// IF_stack_array.peek();
	// IF_stack_array.display();

	// IF_stack_array.push(26);
	// IF_stack_array.push(27);
	// IF_stack_array.push(29);
	// IF_stack_array.push(32);
	// IF_stack_array.push(35);

	// IF_stack_array.push(38);
	// IF_stack_array.push(40);

	// IF_stack_array.display();
	// // console.log(`Peek: ${(IF_stack_array.peek())? IF_stack_array.peek().__value: null}`);
	// IF_stack_array.peek();

	// // console.log(`Pop: ${IF_stack_array.pop()}`);
	// IF_stack_array.pop();
	// IF_stack_array.display();

	// IF_stack_array.pop();
	// IF_stack_array.pop();
	// IF_stack_array.pop();
	// IF_stack_array.display();
	// IF_stack_array.peek();

// }

const execute = () =>
{
	IF_stack_linked_list.display();
	IF_stack_linked_list.pop();
	IF_stack_linked_list.peek();
	
	IF_stack_linked_list.push(1);
	IF_stack_linked_list.push(3);
	IF_stack_linked_list.push(5);
	IF_stack_linked_list.push(7);

	IF_stack_linked_list.display();
	IF_stack_linked_list.peek();

	IF_stack_linked_list.pop();
	IF_stack_linked_list.pop();
	IF_stack_linked_list.pop();
	
	IF_stack_linked_list.display();
	IF_stack_linked_list.peek();

	console.log(`\n---\n`);
	
	IF_stack_linked_list.push(2);
	IF_stack_linked_list.push(3);
	IF_stack_linked_list.push(5);

	IF_stack_linked_list.push(7);
	IF_stack_linked_list.push(9);
	IF_stack_linked_list.push(12);

	IF_stack_linked_list.push(14);
	IF_stack_linked_list.push(16);
	IF_stack_linked_list.push(18);

	IF_stack_linked_list.push(21);
	IF_stack_linked_list.push(23);
	IF_stack_linked_list.push(25);

	IF_stack_linked_list.push(27);
	IF_stack_linked_list.push(29);
	IF_stack_linked_list.push(32);

	IF_stack_linked_list.display();
	IF_stack_linked_list.peek();

}

module.exports = {
	execute,
};
