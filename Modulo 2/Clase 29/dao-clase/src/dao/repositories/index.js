import { Contacts } from "../factory.js";
import ContactRepository from "./Contacts.repositorie.js";

export const contactRepository = new ContactRepository(new Contacts());
