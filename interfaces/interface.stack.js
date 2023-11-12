const {
	stack_array,
	stack_linked_list,
} = require("../concepts/stack")

const __stack_array = new stack_array(10);

const IF_stack_array = {
	push: (value) => { return __stack_array.__push(value); },
	pop: () => { return __stack_array.__pop(); },
	peek: () => { return __stack_array.__peek(); },
	display: () => { return __stack_array.__display(); },
};

module.exports = {
	IF_stack_array,
}
