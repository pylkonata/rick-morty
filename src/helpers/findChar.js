export const findChars = (arr, search) => {
  if (!search.trim()) {
    return arr;
  }
  return arr.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
};
