/*
	STACK
	-----
	Using array and linked_list

	* Basic operations:
	1. Push
	2. Pop
	3. Peek

*/
class node
{
	constructor(value)
	{
		this.__value = value;
		this.__next = null;
	}
}

class stack_linked_list
{

}

class stack_array
{
	constructor(capacity)
	{
		this.__stack = [];
		// this.__top = null;
		this.__max_size = capacity;
	}

	__push = (value) =>
	{
		/*
			Pushes node with value into stack

			params: value for a node
			return: void
		*/
		const new_node_ = new node(value);

		// get length 
		let size_ = this.__stack.length;

		// add element at end (index - length)
		if(size_ < this.__max_size)
			this.__stack[size_] = new_node_;
		else
			console.log(`stack_array::__push => Stack Overflow!`);

	}

	__pop = () =>
	{
		/*
			removes and returns the last node in stack

			return: Node / null if stack underflow
		*/

		let size_ = this.__stack.length;

		if(size_ <= 0)
		{
			console.log(`stack_array::__pop => Stack Underflow`);
			return null;
		}

		let popped_node_ = this.__stack[size_-1];
		// delete(this.__stack[size_-1]);
		console.log(`Pop: ${popped_node_.__value}`);
		this.__stack.pop();		// trimming stack
		return popped_node_;

	}

	__peek = () =>
	{
		if(this.__stack.length <= 0)
		{
			console.log(`stack_array::__peek => Stack is empty`);
			return null;
		}


		console.log(`Peek: ${this.__stack[this.__stack.length-1].__value}`);
		return this.__stack[this.__stack.length-1];
	}

	__display = () =>
	{
		if (this.__stack.length <= 0)
		{
			console.log(`stack_array::__display => Stack is empty`);
			return;
		}

		console.log(``);
		console.log(`STACK`);
		console.log(`-`);

		// top to bottom
		for (let i = this.__stack.length-1 ; i >= 0 ; i--)
			console.log(this.__stack[i]);

		console.log(`===========`);
		console.log(``);
	}

}

module.exports = {
	stack_array,
	stack_linked_list,
}
