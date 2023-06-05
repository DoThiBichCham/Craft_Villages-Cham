import { IVerifyOptions } from "passport-local";
import mongoose from "mongoose";

export type ReportDocument = mongoose.Document & {
  village_id: mongoose.Schema.Types.ObjectId;
  product_id: mongoose.Schema.Types.ObjectId[];
  code: string;
  dateReport: Date;
};
