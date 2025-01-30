import mongoose, { Document, Schema } from "mongoose";

export interface InvoiceDocument extends Document {
    user: mongoose.Types.ObjectId;
    information: string;
    status: string;
    amount: number;
    createdAt: Date;
}

const invoiceSchema = new Schema<InvoiceDocument>({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        index: true,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['Paid', 'Unpaid', 'Pending'],
        default: 'Pending'
    },
    information: {
        type: String,
        required: true,
    }
});

const InvoiceModel = mongoose.model<InvoiceDocument>("Invoice", invoiceSchema);

export default InvoiceModel;