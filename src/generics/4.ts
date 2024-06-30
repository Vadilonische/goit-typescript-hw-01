type User1 = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User1>): User1 {
  const defaultUser: User1 = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };
  return { ...defaultUser, ...initialValues } as User1;
}

const updUser1 = createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
