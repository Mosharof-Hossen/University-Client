import { z } from "zod";

export const academicDepartmentSchema = z.object({
    name:z.string({required_error:"Name is Required"}),
    academicFaculty:z.string({required_error:"Academic Faculty is Required"}),
})