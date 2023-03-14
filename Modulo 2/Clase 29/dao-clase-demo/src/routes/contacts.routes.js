import { Router } from "express";
import ContactDTO from "../dao/DTOs/contact.dto.js";
import { contactsService } from "../dao/repository/index.js";
const router = Router();

router.get("/", async (req, res) => {
  let result = await contactsService.getContacts();
  res.send({ status: "success", payload: result });
});

router.post("/", async (req, res) => {
  let { name, last_name, phone } = req.body;
  let contact = new ContactDTO({ name, last_name, phone });

  let result = await contactsService.createContact(contact);
  res.send({ status: "success", payload: result, contact });
});

export default router;
