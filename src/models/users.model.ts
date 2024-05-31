const users = [
  {id: 1, name: "John Doe"},
  {id: 2, name: "Jane Doe"},
  {id: 3, name: "Jim Doe"},
  {id: 4, name: "Jack Doe"},
  {id: 5, name: "Jill Doe"}
];

export const findAllUsers = async()=>{
  return users;
};

export const findOneUser = async(id: number)=>{
  return users.filter(user => user.id === id)[0];
};

export const createUser = async(name: string)=>{
  const user = {id: users.length + 1, name};
  users.push(user);
  return user;
};

export const updateUser = async(id: number, name: string)=>{
  const user = users.filter(user => user.id === id)[0];
  user.name = name;
  return user;
};

export const deleteUser = async(id: number)=>{
  const user = users.filter(user => user.id === id)[0];
  users.splice(users.indexOf(user), 1);
  return user;
};
