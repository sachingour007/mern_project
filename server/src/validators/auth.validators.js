const { z } = require("zod");

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at lest of 3 chars" })
    .max(255, { message: "Email must not be more than 255 char" }),

  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at lest of 6 chars" })
    .max(12, { message: "Password can't greater than 12 chars" }),
});

const signupSchema = loginSchema.extend({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at lest of 3 chars" })
    .max(255, { message: "Name must not be more than 255 char" }),

  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be at lest of 10 chars" })
    .max(10, { message: "Phone must not be more than 10 char" }),
});

module.exports = { signupSchema, loginSchema };
