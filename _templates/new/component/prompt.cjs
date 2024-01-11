module.exports = [
  {
    type: 'select',
    name: 'atomicType',
    message: "What's the component type?",
    choices: ['atoms', 'molecules', 'organisms', 'layouts'],
  },
  {
    type: 'input',
    name: 'name',
    message: "What's the component's name? (camelCase)",
  },
];
