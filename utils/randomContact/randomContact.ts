export interface Contact {
  name: string;
  email: string;
  phoneNumber: string;
}

function generateAustralianPhoneNumber(): string {
  const areaCode = Math.floor(Math.random() * 9) + 1; //  area code
  const firstPart = Math.floor(Math.random() * 9000) + 1000; // Random 4-digit first part
  const secondPart = Math.floor(Math.random() * 9000) + 1000; // Random 4-digit second part

  return `${areaCode}${firstPart}${secondPart}`;
}

export const randomContact = (): Contact => {
  const nameList = [
    // Add your list of names here
    'John Barnes',
    'Rod Savage',
    'Mary Mumford',
    'July Davis',
    'Arnold Palmer',
    'Bryan Cox',
    'Amy Dawkins',
    'Jan Spam', // ...and so on
  ];
  const name = nameList[Math.floor(Math.random() * nameList.length)];
  const phoneNumber = generateAustralianPhoneNumber();
  return {
    name: `${name}`,
    email: `${name.replace(' ', '.')}` + '@example.com',
    phoneNumber: '+61' + `${phoneNumber}`,
  };
};
