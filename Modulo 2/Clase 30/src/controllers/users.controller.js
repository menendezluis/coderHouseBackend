export const getUsers = async (req, res) => {
  res.send({ status: "success", message: "Getting Users" });
};

export const getUserByID = async (req, res) => {
  res.send({ status: "success", message: "Getting User by ID" });
};

export const saveUser = async (req, res) => {
  res.send({ status: "success", message: "Saving User" });
};
