import { usersList } from "./data.js";
import { userModel } from "./models/users.model.js";

const Loader = async () => {
  try {
    userModel.insertMany(usersList, (error, docs) => {
      if (error) {
        console.log("Error al insertar datos, puede que ya existan");
      } else {
        console.log("Datos insertados");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export default Loader;
