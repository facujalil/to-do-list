export const getItem = (key) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const setItem = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
