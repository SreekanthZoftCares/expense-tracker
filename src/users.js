const users = [];

export function addUser(name, email) {
  const user = {
    id: users.length + 1,
    name,
    email,
  };
  users.push(user);
  return user;
}

export function getUserById(id) {
  return users.find((u) => u.id === id);
}

export function getAllUsers() {
  return users;
}
