"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { redirect } from "next/navigation";
import { getEnrollments } from "./data-service";

export async function enroll(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const newEnrollment = {
    studentId: session.user.studentId,
    courseId: Number(formData.get("courseId")),
    observations: formData.get("observations").slice(0, 1000),
    price: 100,
    isPaid: false,
  };

  const { error } = await supabase.from("enrollments").insert([newEnrollment]);

  if (error) {
    console.log(error);
    throw new Error("Enrollment could not be created");
  }

  revalidatePath(`/courses/${Number(formData.get("courseId"))}`);
  redirect(`/courses/${Number(formData.get("courseId"))}/lessons`);
}

export async function deleteEnrollment(enrollmentId) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const studentEnrollments = await getEnrollments(session.user.studentId);
  const studentEnrollmentsIds = studentEnrollments.map(
    (enrollment) => enrollment.id
  );

  if (!studentEnrollmentsIds.includes(enrollmentId))
    throw new Error("You are not allowed to delete this enrollment");

  const { error } = await supabase
    .from("enrollments")
    .delete()
    .eq("id", enrollmentId);

  if (error) throw new Error("Enrollment could not be deleted");

  revalidatePath("/account/enrollments");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
