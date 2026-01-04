import { Document } from "mongoose";

export interface IBooking extends Document {
  name: string;
  email: string;
  phone: string;
  address: string;
  vehicleNumber: string;
  vehicleModel: string;
  appointmentDate: Date;
  serviceCategory: string;
  serviceCenter: string;
  problemDescription?: string;
}

export interface IBookingData {
  name: string;
  email: string;
  phone: string;
  address: string;
  vehicleNumber: string;
  vehicleModel: string;
  appointmentDate: Date;
  serviceCategory: string;
  serviceCenter: string;
  problemDescription?: string;
}

export interface GetBookingQuery {
  email?: string;
}
