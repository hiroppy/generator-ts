const baseTasks = ['prettier --write'];

module.exports = {
  '*.{md,json,css}': baseTasks,
  '*.{js,ts,tsx}': ['npm run lint -- --fix', ...baseTasks],
};
