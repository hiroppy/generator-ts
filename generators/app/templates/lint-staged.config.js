const baseTasks = ['prettier --write', 'git add'];

module.exports = {
  '*.{md,json,css}': baseTasks,
  '*.{js,ts,tsx}': ['npm run lint -- --fix', ...baseTasks]
};
