export const formatCount = (todos) => {
    const count = todos.filter(({ completed }) => !completed).length;
    const formatted = count === 1 ? 'item' : 'items';
    return `${count} ${formatted} left`;
};

