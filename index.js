const IF_linked_list = require("./interface/interface.linked_list");

IF_linked_list.display_linked_list();

IF_linked_list.add_node_at_index(5, 5);
IF_linked_list.display_linked_list();

IF_linked_list.add_node_at_index(5);
IF_linked_list.display_linked_list();

IF_linked_list.add_node_at_index(4);
IF_linked_list.display_linked_list();

IF_linked_list.add_node_at_index(3);
IF_linked_list.display_linked_list();

IF_linked_list.add_node_at_index(10,10);
IF_linked_list.display_linked_list();

IF_linked_list.add_node_at_index(20,20);
IF_linked_list.display_linked_list();

console.log(`node at index 4 => ${IF_linked_list.get_node_at_index(4).__value}`);

IF_linked_list.add_node_at_index(12,4);
IF_linked_list.display_linked_list();

IF_linked_list.add_node_at_index(9,3);
IF_linked_list.display_linked_list();

console.log(`node at index 2 => ${IF_linked_list.get_node_at_index(2).__value}`);
