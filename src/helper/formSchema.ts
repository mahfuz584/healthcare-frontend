import { prohibitedChars } from "constants/prohabiatetChars";
import { z } from "zod";

export const doctorsSchema = z.object({
  doctor: z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z
      .string()
      .email()
      .min(1, "Required")
      .refine(
        (email) => {
          const [localPart] = email.split("@");

          // Check if local part has any prohibited characters or consecutive dots
          return (
            !prohibitedChars.test(localPart) &&
            !localPart.startsWith(".") &&
            !localPart.endsWith("()") &&
            !localPart.includes("-")
          );
        },
        {
          message: "Email ID contains prohibited characters",
        }
      )
      .refine(
        (email) => {
          const domainPart = email.split("@")[1];

          return (
            domainPart &&
            !domainPart.startsWith(".") &&
            !domainPart.endsWith(".") &&
            !domainPart.includes("..")
          );
        },
        {
          message: "Email domain contains prohibited characters",
        }
      ),
    contactNumber: z.string().min(1, "Invalid contact number"),
    designation: z.string().min(1, "Designation must be at least 1 character"),
    qualification: z
      .string()
      .min(1, "Qualification must be at least 1 character"),
    registrationNumber: z.string().min(1, "Invalid registration number"),
    experience: z.preprocess(
      (val) => (val !== null && val !== undefined ? Number(val) : val),
      z.number().min(1, "Invalid Appointment Fee")
    ),
    gender: z.string().min(1, "Gender is required"),
    apointmentFee: z.preprocess(
      (val) => (val !== null && val !== undefined ? Number(val) : val),
      z.number().min(1, "Invalid Appointment Fee")
    ),
    currentWorkingPlace: z
      .string()
      .min(1, "Current working place must be at least 1 character"),
    address: z.string().min(1, "Address must be at least 1 character"),
  }),
  password: z
    .string()
    .min(3, { message: "Password must be at least 3 characters" }),
  file: z.instanceof(File, { message: "Image is required" }).optional(),
});
