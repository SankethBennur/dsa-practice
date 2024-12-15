const IF_linked_list = require("../interfaces/interface.linked_list");

const execute = () =>
{

	IF_linked_list.display_linked_list();

	IF_linked_list.add_node_at_index(5, 5);
	IF_linked_list.display_linked_list();

	IF_linked_list.add_node_at_index(5);
	IF_linked_list.display_linked_list();

	IF_linked_list.add_node_at_index(4);
	IF_linked_list.display_linked_list();

	IF_linked_list.add_node_at_index(3);
	IF_linked_list.display_linked_list();

	IF_linked_list.add_node_at_index(10, 10);
	IF_linked_list.display_linked_list();

	IF_linked_list.add_node_at_index(20, 20);
	IF_linked_list.display_linked_list();

	if (IF_linked_list.get_node_at_index(20))
		console.log(`node at index 20 => ${IF_linked_list.get_node_at_index(20).__value}`);
	else
		console.log(`node at index 20 => ${null}`);

	IF_linked_list.add_node_at_index(12, 4);
	IF_linked_list.display_linked_list();

	IF_linked_list.add_node_at_index(9, 3);
	IF_linked_list.display_linked_list();

	if (IF_linked_list.get_node_at_index(2))
		console.log(`node at index 2 => ${IF_linked_list.get_node_at_index(2).__value}`);
	else
		console.log(`node at index 2 => ${null}`);

	if (IF_linked_list.get_node_at_index(5))
		console.log(`node at index 5 => ${IF_linked_list.get_node_at_index(5).__value}`);
	else
		console.log(`node at index 5 => ${null}`);

	// console.log(`Creating new linked list`)
	// IF_linked_list.create_new_linked_list({__value: 5});
	// // IF_linked_list.create_new_linked_list();

	// IF_linked_list.add_node_at_index(20);
	// IF_linked_list.display_linked_list();

	// if (IF_linked_list.get_node_at_index(4))
	// 	console.log(`node at index 4 => ${IF_linked_list.get_node_at_index(4)}`);
	// else
	// 	console.log(`node at index 4 => ${null}`);

	// IF_linked_list.add_node_at_index(12,4);
	// IF_linked_list.display_linked_list();

	// IF_linked_list.add_node_at_index(9);
	// IF_linked_list.display_linked_list();

	// IF_linked_list.add_node_at_index(8,2);
	// IF_linked_list.display_linked_list();

	// IF_linked_list.add_node_at_index(19,3);
	// IF_linked_list.display_linked_list();

	// if(IF_linked_list.get_node_at_index(2))
	// 	console.log(`node at index 2 => ${IF_linked_list.get_node_at_index(2).__value}`);
	// else
	// 	console.log(`node at index 2 => ${null}`);

	console.log(``);
	const del_5 = IF_linked_list.delete_node_at_index(5);
	console.log(`Deleting element at index 5: ${(del_5)
		? del_5.__value
		: null}`);
	IF_linked_list.display_linked_list();

	console.log(``);
	const del_n2 = IF_linked_list.delete_node_at_index(-2)
	console.log(`Deleting element at index -2: ${(del_n2)
		? del_n2.__value
		: null}`);
	IF_linked_list.display_linked_list();

	console.log(``);
	const del_19 = IF_linked_list.delete_node_at_index(19)
	console.log(`Deleting element at index 19: ${(del_19)
		? del_19.__value
		: null}`);
	IF_linked_list.display_linked_list();

	console.log(``);
	const del_3 = IF_linked_list.delete_node_at_index(3)
	console.log(`Deleting element at index 3: ${(del_3)
		? del_3.__value
		: null}`);
	IF_linked_list.display_linked_list();

	const mid_ele_001 = IF_linked_list.find_middle_node();
	if (mid_ele_001)
		console.log(`Middle element: ${mid_ele_001.__value}`);
	else
		console.log(`Middle element: ${null}`);
	IF_linked_list.display_linked_list();

	console.log(`Cycle in Linked List exists: ${IF_linked_list.check_cycle()}`);

	const ele_003_ = IF_linked_list.get_node_at_index(3);
	const ele_last_ = IF_linked_list.get_node_at_index(5);

	ele_last_.__next = ele_003_;
	console.log(`Cycle in Linked List exists: ${IF_linked_list.check_cycle()}`);

};

module.exports = {
	execute,
};
