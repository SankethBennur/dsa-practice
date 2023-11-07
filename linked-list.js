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

	insert_node = (value, index) =>
	{
		const new_node_ = new node(value);

		if(
			!(
				new_node_ && 
				new_node_.__value
			)
		)
		{
			console.log(`Could not insert node of value - ${value} at index - ${index}`);
			return this.__head;
		}

		const current_node_ = this.get_node_at_index(index);

		if(!current_node_)
		{
			this.__head = new_node_;
			return this.__head;
		}

		new_node_.__next = current_node_.__next
		current_node_.__next = new_node_;

		return this.__head;
	}

	get_node_at_index = (index) => 
	{
		let index_ = -1;

		let current_node_ = this.__head;

		while(current_node_)
		{			
			++index_;

			if(
				!current_node_.__next || 	// returns last element if index out of bounds
				index === index_
			)
				break;

			current_node_ = current_node_.__next;
		}

		return current_node_;
	}

	display_list = (from = -1, to = -1) =>
	{
		let current_node_ = this.__head;
		let index_ = from;

		const value_arr_ = [];

		while(
			!(to >= 0 && index_ > to) && 
			current_node_ && 
			current_node_.__value
		)
		{
			++index_;
			value_arr_.push(current_node_.__value);
			
			if(
				!current_node_.__next || 
				index_ === to
			)
				break;

			current_node_ = current_node_.__next;
		}

		console.log("");
		console.log("LINKED LIST");
		console.log("=====");
		console.log(value_arr_.join(' -> '));

	}

}

// ============

const LL = new linked_list();

LL.display_list();
LL.insert_node("5", 10);
LL.display_list();

LL.insert_node("7", 10);
LL.display_list();

LL.insert_node("9", 10);
LL.display_list();
