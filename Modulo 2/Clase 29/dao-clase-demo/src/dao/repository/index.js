import { Contacts, Products } from "../factory.js";
import ContactRepository from "./Contacts.repositorie.js";
import ProductRepository from "./Products.repositorie.js";

export const contactsService = new ContactRepository(new Contacts());
export const productsService = new ProductRepository(new Products());
