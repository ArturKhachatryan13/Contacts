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
    };
    return element;
  });
  return generatedNewData;
};
export const changeDataStructure = contactsData => {
  const sectionListArray = [{ title: '', data: [] }];
  sectionListArray[0].data.push(contactsData[0]);
  sectionListArray[0].title = contactsData[0].name[0];
  let count = 0;
  for (let i = 1; i < contactsData.length; i++) {
    if (contactsData[i].name[0] === sectionListArray[count].data[0].name[0]) {
      sectionListArray[count].data.push(contactsData[i]);
    } else {
      const newObj = { title: '', data: [] };
      sectionListArray.push(newObj);
      count++;
      sectionListArray[count].data.push(contactsData[i]);
      sectionListArray[count].title = contactsData[i].name[0];
    }
  }
  return sectionListArray;
};
// The function for the filter
export const compare = (a, b) => {
  if (a.name > b.name) return 1;
  if (a.name == b.name) return 0;
  if (a.name < b.name) return -1;
};
