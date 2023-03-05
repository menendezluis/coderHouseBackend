import AppRouter from "./router.js";

export default class UserRouter extends AppRouter {
  constructor() {
    super();
    this.init();
  }

  init() {
    this.get("/", (req, res) => {
      console.log(res);
      res.sendServerError("Hola, coders!");
    });
  }
}
