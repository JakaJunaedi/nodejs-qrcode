import { Response, Request } from "express";
import { asyncHandler } from "../../middlewares/asyncHandler";
import { HTTPSTATUS } from "../../config/http.config";
import InvoiceModel from "../../database/models/invoice.model";

// Read All Invoice
export const getInvoice = asyncHandler(async (req: Request, res: Response) => {
    try {
        const invoices = await InvoiceModel.find().populate('user');
        return res.status(HTTPSTATUS.OK).json({
            message: "invoice successfully",
            invoices
        });
    } catch (error) {
        res.status(HTTPSTATUS.INTERNAL_SERVER_ERROR).json({
            message: "Server Error"
        })
    }
});

// Read Invoice By ID
export const getInvoiceById = asyncHandler(async (req: Request, res: Response) => {
   
    try {
        const invoices = await InvoiceModel.findById(req.params.id).populate('user');
        res.status(HTTPSTATUS.OK).json({message: 'Success Read By Invoice ID',invoices});
    } catch (error) {
        res.status(HTTPSTATUS.INTERNAL_SERVER_ERROR).json({
            message: "Server Error API Request"
        })
    }
})

// Create a new invoice
export const createInvoice = async (req: Request, res: Response) => {

    const { amount, information } = req.body;
    const userId = req.user?.id;
    try {
        await InvoiceModel.create({
            amount: amount,
            information: information,
            user: userId
        });
        res.status(HTTPSTATUS.OK).json({ message: "Berhasil tambah", })
    } catch (error) {
        console.log(error)
    }
};

