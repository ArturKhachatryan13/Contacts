export const numberGenerator = objKey => {
  let number = Math.floor(Math.random() * objKey.length);
  return number;
};

export const generateData = ({ name, surname, numbers, img }, count) => {
  return Array(count)
    .fill(null)
    .map(() => ({
      name: name[numberGenerator(name)],
      surname: surname[numberGenerator(surname)],
      number: numbers[numberGenerator(numbers)],
      id: Math.random(),
      photo: img[numberGenerator(img)],
      favorate: Math.random() < 0.3,
    }));
};
export const changeDataStructure = contactsData => {
  return contactsData.reduce(
    (total, contact) => {
      if (contact.name[0] !== total[total.length - 1].title) {
        total.push({ title: contact.name[0], data: [contact] });
        return total;
      } else {
        total[total.length - 1].data.push(contact);
        return total;
      }
    },
    [{ title: contactsData[0].name[0], data: [] }],
  );
};

export const compare = (a, b) => {
  if (a.name > b.name) {
    return 1;
  } else if (a.name === b.name) {
    return 0;
  } else {
    return -1;
  }
};
export const getFavorateContacts = sectionList => {
  return sectionList.filter(contact => contact.favorate === true);
};
