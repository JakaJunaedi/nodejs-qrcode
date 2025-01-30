import { Router } from "express";
import { createInvoice, getInvoice, getInvoiceById } from "./invoice.controller";


const invoiceRoute = Router();

invoiceRoute.get("/", getInvoice);
invoiceRoute.get(`/:id`, getInvoiceById)
invoiceRoute.post("/add", createInvoice)

export default invoiceRoute;