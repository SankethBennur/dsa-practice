/*
	Write a linked list class to perform the following
	1. Insert node at index
		a. if index <= 0, insert in first index
		b. if index out of bounds, insert last
		c. return head
	2. Get node at index
		a. return node or null
	3. Display all nodes of linked list
*/

class node
{
	constructor(value)
	{
		this.__value = value;
		this.__next = null;
	}
}

class linked_list
{
	constructor(head)
	{
		this.__head = (head && head.__value)
			? head
			: null;
	}

	__add_node_at_index = (value, index = -1) =>
	{
		let current_node_ = this.__head;
		let new_node_ = new node(value);

		// handle no head
		if(!current_node_)
		{
			this.__head = new_node_;
			return this.__head;
		}

		// handle index <= 0
		if(index <= 0)
		{
			new_node_.__next = current_node_;
			this.__head = new_node_;
			return this.__head;
		}

		// iterate till index - 1, get previous node
		// current_node_ = this.__get_node_at_index(index-1);

		let current_index_ = -1;

		while(current_node_)
		{
			++current_index_;

			if(current_index_ === index - 1)
				// perform insertion
				break;

			if (current_node_.__next)
				current_node_ = current_node_.__next;
		}

		new_node_.__next = current_node_.__next;
		current_node_.__next = new_node_;
		return this.__head;

	}

	__get_node_at_index = (index) =>
	{
		let current_node_ = this.__head;
		let current_index_ = -1;

		if(index < 0) return null;		// negative index

		while(current_node_)
		{
			++current_index_;

			if(current_index_ === index)
				return current_node_;

			current_node_ = current_node_.__next;
		}

		return null;	// out of bounds
	}

	__display_linked_list = (from = 0, to = -1) =>
	{
		// current node <- head
		let current_node_ = this.__head;

		// if not current node
		if(!current_node_)
			// return
			return;

		// current index <- -1
		let current_index_ = -1;

		// node_value_arr <- []
		let node_value_arr = [];

		// while current node
		while(current_node_)
		{
			// increment current index
			++current_index_;

			// if current index === from
			if(current_index_ >= from)
				// insert into list node_value_arr_
				node_value_arr.push(current_node_.__value);
			
			// if current index >= to
			if(to > 0 && current_index_ >= to)
				// break
				break;
			
			// move node; current node <- current_node.__next
			current_node_ = current_node_.__next;
		}

		console.log();
		console.log('Linked List');
		console.log('===========');
		console.log(node_value_arr.join(` -> `));
		console.log('===========');
		console.log();

	}

}

module.exports = {linked_list};
