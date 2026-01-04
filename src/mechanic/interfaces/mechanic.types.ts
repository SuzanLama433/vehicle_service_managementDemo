import { Document } from "mongoose";

export interface IMechanic extends Document {
  name: string;
  email: string;
  phone: string;
  experience?: number;
  category: string;
  skills: string[];
  certifications?: string[];
  serviceCenter: string;
}

export interface IMechanicData {
  name: string;
  email: string;
  phone: string;
  experience?: number;
  category: string;
  skills: string[];
  certifications?: string[];
  serviceCenter: string;
}

export interface GetMechanicQuery {
  email?: string;
}
