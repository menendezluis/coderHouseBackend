export const getBusiness = async (req, res) => {
  res.send({ status: "success", message: "Getting business" });
};

export const getBusinessById = async (req, res) => {
  res.send({ status: "success", message: "Getting Business by ID" });
};

export const createBusiness = async (req, res) => {
  res.send({ status: "success", message: "Creating User" });
};

export const addProduct = async (req, res) => {
  res.send({ status: "success", message: "Adding Product" });
};
