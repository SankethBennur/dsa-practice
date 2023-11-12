const {
	stack_array,
	stack_linked_list,
} = require("../concepts/stack")

const __stack_array = new stack_array(10);
const __stack_linked_list = new stack_linked_list(12);

const IF_stack_array = {
	push: (value) => { return __stack_array.__push(value); },
	pop: () => { return __stack_array.__pop(); },
	peek: () => { return __stack_array.__peek(); },
	display: () => { return __stack_array.__display(); },
};

const IF_stack_linked_list = {
	push: (value) => { return __stack_linked_list.__push(value); },
	pop: () => { return __stack_linked_list.__pop(); },
	peek: () => { return __stack_linked_list.__peek(); },
	display: () => { return __stack_linked_list.__display(); },
};

module.exports = {
	IF_stack_array,
	IF_stack_linked_list,
}
