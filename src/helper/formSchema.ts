import { z } from "zod";

export const scheduleSchema = z.object({
  startDate: z.string().min(1, "Start Date is required"),
  endDate: z.string().min(1, "End Date is required"),
  startTime: z.string().min(1, "Start Time is required"),
  endTime: z.string().min(1, "End Time is required"),
});
