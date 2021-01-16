export const updateObjectInArray = (
  items,
  itemID,
  objPromName,
  newObjProps
) => {
  return items.map((u) => {
    if (u[objPromName] === itemID) {
      return { ...u, ...newObjProps };
    }
    return u;
  });
};
