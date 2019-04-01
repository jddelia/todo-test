export const formatCount = (todos) => {
    const count = todos.filter(({ isComplete }) => !isComplete).length;
    const formatted = count === 1 ? 'item' : 'items';
    return `${count} ${formatted} left`;
};
  
