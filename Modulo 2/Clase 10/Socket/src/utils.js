export const users = [
  {
    id: 1,
    name: "John",
    lastname: "Doe",
    age: 30,
    phone: "123456789",
    email: "john.doe@gmail.com",
  },
  {
    id: 2,
    name: "Jane",
    lastname: "Doe",
    age: 25,
    phone: "987654321",
    email: "jane.doe@gmail.com",
  },
  {
    id: 3,
    name: "Michael",
    lastname: "Smith",
    age: 35,
    phone: "123987456",
    email: "michael.smith@gmail.com",
  },
  {
    id: 4,
    name: "Sarah",
    lastname: "Connor",
    age: 40,
    phone: "456123789",
    email: "sara.conor@gmail.com",
  },
  {
    id: 5,
    name: "Emiliano",
    lastname: "Connor",
    age: 25,
    phone: "001001001",
    email: "emi@gmail.com",
  },
];

export const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

export const isEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
};

export default { users, getRandomInt };
