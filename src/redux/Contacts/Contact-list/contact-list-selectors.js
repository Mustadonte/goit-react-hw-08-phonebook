export const getFilteredContacts = ({ contacts: { items }, filter }) => {
  const normalizedText = filter.toLowerCase();
  return items.filter(item =>
    item.name.toLocaleLowerCase().includes(normalizedText)
  );
};
