const database = new Map();

export const saveUser = (email, password) => {
  database.set(email, password);
  console.log(database);
};

export const isValidUser = (email, password) => {
  return database.has(email) ? database.get(email) === password : false;
};
