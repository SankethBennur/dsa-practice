/*
	Write a linked list class to perform the following
	1. Insert node at index
		b. if index < 0 or out of bounds, insert last
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
		this.__head = (
				head &&
				head.constructor &&
				head.constructor.name === "node"
			)
			? head
			: null;
	}

	__add_node_at_index = (value, index = -1) =>
	{
		// handle no head
		if (!this.__head)
		{
			this.__head = new node(value);
			return (this.__head);
		}

		let new_node_ = new node(value);
		
		// handle index === 0
		if (index === 0)
		{
			new_node_.__next = this.__head;
			this.__head = new_node_;
			return (this.__head);
		}
		
		let iterating_node_ = this.__head;

		let current_index_ = -1;

		// get previous node
		while(iterating_node_)
		{
			// increment current index
			++current_index_;
			
			// if current_index_ === index - 1 ; for previous node
			if (
				current_index_ === index-1 ||
				!iterating_node_.__next			// last element - no next element
			)
				// break
				break;		// break retaining last element

			// iterate
			iterating_node_ = iterating_node_.__next;
		}
		
		// add after previous node ; must also handle out of bounds
		new_node_.__next = iterating_node_.__next;
		iterating_node_.__next = new_node_;

		return this.__head;
	}

	__get_node_at_index = (index = -1) =>
	{
		/*
			return null if index < 0  or out of bounds
		*/
		if (index < 0 )
			return null;

		let current_node_ = this.__head;
		let current_index_ = -1;

		// while (current_node_)
		while (current_node_)
		{
			// ++current_index_
			++current_index_;

			// if current_index_ === index
			if (current_index_ === index)
				// return current_node_
				return current_node_;

			// iterate
			if (current_node_.__next)
				current_node_ = current_node_.__next;
			else
				break;
		}

		return null;		// null if out of bounds
	}

	__display_linked_list = (from = 0, to = -1) =>
	{
		// if to < 0, iterate till end
		// stop only if to > 0 and current index === to

		// current node <- this.__head
		let current_node_ = this.__head;
		
		// current_index <- -1
		let current_index_ = -1;
		// node_value_arr_ = []
		let node_value_arr_ = [];

		// while (current_node_)
		while (current_node_)
		{
			// ++current_index_
			++current_index_;
			
			// if current_index_ >= from
			if (current_index_ >= from)
				// append to value list
				node_value_arr_.push(current_node_.__value);
			
			// if current_index_ >= to
			if(to >= 0 && current_index_ >= to)
				// break
				break;
			
			if (current_node_.__next)
				current_node_ = current_node_.__next;
			else
				break;
		}
		
		// display values of list
		console.log(``);
		console.log(`Linked List`);
		console.log(`============`);
		console.log(node_value_arr_.join(` -> `));
		console.log(`============`);
		console.log(``);

	}

	__delete_node_at_index = (index = -1) =>
	{
		/*
			params: index to delete at,
			return: <node> / null if not found
		*/
		if (index < 0 )
		{
			console.log(`linked_list::__delete_node_at_index(${index}) => index less that zero.`);
			return null;
		}

		let current_node_ = this.__head;
		let deleted_node_ = null;
		let current_index_ = -1;

		if (index === 0)
		{
			this.__head = current_node_.__next;
			deleted_node_ = current_node_;
			// delete(current_node_);

			return deleted_node_;
		}

		// iterate
		while (current_node_)		// do not preserve last node
		{
			++current_index_;
			
			if (current_index_ === index - 1)		// getting previous node
				break;

			if (current_node_.__next)
				current_node_ = current_node_.__next;
			else
				break;		// breaks at last node

		}

		if (current_index_ < 0)
		{
			console.log(`linked_list::__delete_node_at_index(${index}) => Could not find head`);
			return null;
		}

		if (!current_node_.__next && index > current_index_)
		{
			console.log(`linked_list::__delete_node_at_index(${index}) => index out of bounds`);
			return null;
		}

		deleted_node_ = current_node_.__next;
		current_node_.__next = (deleted_node_)
			? deleted_node_.__next		// may be null or next element
			: null;

		// delete(current_node_);

		return(deleted_node_);

	}
	
	__find_middle_node = () =>
	{
		/*
			return: <node> / null if not found
		*/

		// rabbit and tortoise

		// rabbit moves twice as fast as tortoise

		// return tortoise node when rabbit is null or rabbit.__next is null

		if(!this.__head)
			return null;

		if(!this.__head.__next)
			return this.__head;

		let rabbit_node_ = this.__head;
		let tortoise_node_ = this.__head;

		while(rabbit_node_ && rabbit_node_.__next)
		{
			tortoise_node_ = tortoise_node_.__next
			rabbit_node_ = rabbit_node_.__next.__next;
		}

		return tortoise_node_;

	}
	
	__check_cycle = () =>
	{
		/*
			return: <node> / null if not found
		*/

		// rabbit and tortoise

		// rabbit moves twice as fast as tortoise

		// return tortoise node when rabbit is null or rabbit.__next is null

		if(!this.__head)
			return null;

		if(!this.__head.__next)
			return this.__head;

		let rabbit_node_ = this.__head;
		let tortoise_node_ = this.__head;

		while(rabbit_node_ && rabbit_node_.__next)
		{
			tortoise_node_ = tortoise_node_.__next
			rabbit_node_ = rabbit_node_.__next.__next;

			if(tortoise_node_ === rabbit_node_)
				return true;
		}

		return false;

	}

}

module.exports = { linked_list };
