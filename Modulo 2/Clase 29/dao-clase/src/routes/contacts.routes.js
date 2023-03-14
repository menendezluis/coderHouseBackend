import { Router } from "express";
//import Contacts from "../dao/mongo/contacts.mongo.js";
import ContactDTO from "../dao/DTOs/contact.dto.js";
import Contacts from "../dao/factory.js";
const router = Router();
const contactsService = Contacts;

router.get("/", async (req, res) => {
  let result = await contactsService.get();
  res.send({ status: "success", payload: result });
});

router.post("/", async (req, res) => {
  let { name, last_name, phone } = req.body;
  let contact = new ContactDTO({ name, last_name, phone });
  let result = await contactsService.create(contact);
  res.send({ status: "success", payload: result });
});

export default router;
