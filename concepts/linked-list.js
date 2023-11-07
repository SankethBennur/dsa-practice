/*
	LINKED LIST
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

	__display_linked_list = (from = 0, to = -1) =>
	{
		const node_value_arr_ = [];
		let current_index_ = 0;
		let current_node_ = this.__head;

		while(current_node_)
		{
			if(current_index_ >= from)
				node_value_arr_.push(current_node_.__value);

			current_node_ = current_node_.__next;
			++current_index_;

			if(
				to >= 0 && 
				current_index_ >= to
			)
				break;
		}

		console.log();
		console.log(` LINKED LIST `);
		console.log(`=============`);

		if(node_value_arr_.length <= 0)
			console.log(`Empty Linked list`);

		console.log(node_value_arr_.join(` -> `));
		console.log();

	}

	__get_node_at_index = (index = 0) =>
	{
		// current node <- head
		let current_node_ = this.__head;

		// if not current node || index < 0
		if(
			!current_node_ || 
			index < 0
		)
			// return null
			return null;

		// index_ = 0
		let index_ = 0;

		let prev_node_;
		
		// while current node
		while (current_node_)
		{
			prev_node_ = current_node_;

			// current_node = current_node.next
			current_node_ = current_node_.__next;

			// if index_++ === index
			if (++index_ === index)
				// return current node
				return current_node_;
		}
		
		// if (index > index_)
		if (index > index_)
		{
			console.log(`linked_list::get_node_at_index => Index out of bounds`);
			return prev_node_;
		}

		// return null
		return null;

	}

	__add_node_at_index = (value, index = 0) =>
	{
		// instantiate new node
		const new_node_ = new node(value);

		if (index === 0)
		{
			if (this.__head)
				new_node_.__next = this.__head;

			this.__head = new_node_;
			return this.__head;
		}

		// current node <- get node at index-1
		let current_node_ = this.__get_node_at_index(index-1);

		// if not current node
		if(!current_node_)
			// return null
			return null;
		
		new_node_.__next = current_node_.__next;
		current_node_.__next = new_node_;

		// return head
		return this.__head;

	}

}

module.exports = { linked_list };
