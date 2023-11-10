const { linked_list } = require("../concepts/linked-list");

let LL = new linked_list();

const interface_linked_list = {
	create_new_linked_list: (head) => { if(LL) delete LL ; LL = new linked_list(head); },
	add_node_at_index: (value, index) => { return LL.__add_node_at_index(value, index); },
	get_node_at_index: (index) => { return LL.__get_node_at_index(index); },
	display_linked_list: (from, to) => { return LL.__display_linked_list(from, to); },
	delete_node_at_index: (index) => { return LL.__delete_node_at_index(index); },
	find_middle_node: () => { return LL.__find_middle_node(); },
};

module.exports = interface_linked_list;
