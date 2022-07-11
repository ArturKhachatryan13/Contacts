export const numberGenerator = objKey => {
  let number = Math.floor(Math.random() * objKey.length);
  return number;
};

export const generateData = (newName, surname, num, image, count) => {
  const genereteNewArray = Array(count).fill(null);
  let generatedNewData = [];
  generatedNewData = genereteNewArray.map(element => {
    const randomindexforName = numberGenerator(newName);
    const randomindexforSurName = numberGenerator(surname);
    const ramdomIforNumber = numberGenerator(num);
    const randomIImg = numberGenerator(image);

    element = {
      name: newName[randomindexforName],
      surname: surname[randomindexforSurName],
      number: num[ramdomIforNumber],
      id: Math.random(),
      photo: image[randomIImg],
      favorate: true,
    };
    return element;
  });
  return generatedNewData;
};
export const changeDataStructure = contactsData => {
  let count = 0;
  return contactsData.reduce(
    (total, contact) => {
      if (contact.name[0] !== total[count].title) {
        total.push({ title: contact.name[0], data: [contact] });
        count++;
        return total;
      } else {
        total[count].data.push(contact);
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
