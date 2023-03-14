import { Router } from "express";
import { contactsService } from "../dao/repositories/index.js";

const router = Router();

router.get("/", async (req, res) => {
  let result = await contactsService.getContacts();
  res.send({ status: "success", payload: result });
});

router.post("/", async (req, res) => {
  let { name, last_name, phone } = req.body;
  let contact = { name, last_name, phone };
  let result = await contactsService.createContact(contact);
  res.send({ status: "success", payload: result });
});

export default router;
