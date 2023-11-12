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
	constructor(capacity)
	{
		this.__stack_head = null;		// stack head points to top
		this.__size = 0;
		this.__capacity = capacity;
	}

	__push = (value) =>
	{
		/*
			Push operation is to add new node as the first
			in the linked list

			params:
				- value, to create the node
			
			return:
				- stack_head
		*/

		if (this.__size >= this.__capacity)
		{
			console.log(`stack_linked_list::__push => Stack Overflow!`);
			return this.__stack_head;
		}

		const new_node_ = new node(value);

		// if null stack head
		if (!this.__stack_head)
			// stack head <- new node
			this.__stack_head = new_node_;

		// else
		else
		{
			// new node.next <- stack_head
			new_node_.__next = this.__stack_head;
			// stack_head <- new_node
			this.__stack_head = new_node_;
		}
		
		// increment size
		++this.__size;
		// return stack_head
		return this.__stack_head;
	}

	__pop = () =>
	{
		/*
			Displays and removes top node / stack head

			return:
				- stack_head
		*/

		// handle stack underflow
		// if (!stack_head || size <= 0)
		if(!this.__stack_head || this.__size <= 0)
		{
			console.log(`stack_linked_list::__pop => Stack Underflow!`);
			// return null;
			return null;
		}

		// popped_node = stack_head
		const pop_node_ = this.__stack_head;
		const value_ = pop_node_.__value;
		// stack_head = stack_head.next
		this.__stack_head = this.__stack_head.__next;
		--this.__size;
		// log(popped value)
		console.log(`Pop: ${pop_node_.__value}\n`);
		// delete popped_node
		// delete(pop_node_);
		// return (new node(popped node value))
		return (new node(value_));
	}

	__peek = () =>
	{
		if(!this.__stack_head || this.__size <= 0)
		{
			console.log(`stack_linked_list::__peek => Stack Underflow!`);
			return null;
		}

		console.log(`Peek: ${this.__stack_head.__value}\n`);
		return this.__stack_head;
	}

	__display = () =>
	{
		// iterate from top to bottom
		let current_node_ = this.__stack_head;

		console.log(``);
		console.log(`STACK`);
		console.log(`-`);

		while(current_node_)
		{
			console.log(`${current_node_.__value}`);
			current_node_ = current_node_.__next;
		}

		console.log(`======`);
		console.log(``);
	}
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
