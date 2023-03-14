import { Router } from "express";
//import crypto from "crypto";
import { Contacts } from "../dao/factory.js";
import ContactDTO from "../dao/DTOs/contact.dto.js";
import { contactsService } from "../dao/repository/index.js";
//import Contacts from "../dao/mongo/contacts.mongo.js";
//import Contacts from "../dao/memory/contacts.memory.js";
const router = Router();
//const contactsService = new Contacts();

router.get("/", async (req, res) => {
  //let result = await contactsService.get();
  let result = await contactsService.getContacts();
  res.send({ status: "success", payload: result });
});

router.post("/", async (req, res) => {
  //console.log(req.body);
  let { name, last_name, phone } = req.body;
  // let contact = { name, last_name, phone };
  let contact = new ContactDTO({ name, last_name, phone });

  //let result = await contactsService.create(contact);
  let result = await contactsService.createContact(contact);
  res.send({ status: "success", payload: result, contact });
});

export default router;
