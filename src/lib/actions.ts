"use server";
import { db } from "@/db";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const FormSchema = z.object({
  id: z.number(),
  email: z.string().min(1, { message: "Email is required." }),
  isSubscribed: z.boolean(),
});

const CreateSubscriber = FormSchema.omit({ id: true, isSubscribed: true });

type State = {
  errors?: {
    email?: string[];
  };
  message?: string | null;
};
export async function createSubscriber(prevState: State, formData: FormData) {
  const validateField = CreateSubscriber.safeParse({
    email: formData.get("email"),
  });
  if (!validateField.success) {
    return {
      errors: validateField.error.flatten().fieldErrors,
      message: "Email is required",
    };
  }
  const { email } = validateField.data;
  try {
    await db.subscriber.create({
      data: {
        email,
      },
    });
    revalidatePath("/");
    return { message: "Thank you for Subscribing!" };
  } catch (error) {
    if (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          return {
            message: "Email already Existed in the DB",
          };
        }
      }
    }
    return { message: "Database Error: Failed to create Subscriber" };
  }
}
