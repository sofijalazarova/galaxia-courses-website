import { supabase } from "./supabase";

export const getCourses = async function () {
  let { data, error } = await supabase
    .from("courses")
    .select("id, name, description, image")
    .order("name");

  if (error) {
    throw new Error("Courses could not be loaded");
  }

  return data;
};

export async function getCourse(id) {
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .eq("id", id)
    .single();

  if (error) notFound();

  return data;
}

export async function getLessons(id) {
  const { data, error } = await supabase
    .from("lessons")
    .select("*")
    .eq("courseId", id);

  if (error) {
    console.error(error);
    throw new Error("Booking could not get loaded");
  }

  return data;
}

// export async function getQuizQuestions(id) {
//   const { data, error } = await supabase
//     .from("questions")
//     .select("*")
//     .eq("quizId", id);

//   return data;
// }

export async function getStudent(email) {
  const { data, error } = await supabase
    .from("students")
    .select("*")
    .eq("email", email)
    .single();

  return data;
}

export async function createStudent(newStudent) {
  const { data, error } = await supabase.from("students").insert([newStudent]);

  if (error) {
    throw new Error("Student could not be created");
  }

  return data;
}

export async function getEnrollments(studentId) {
  const { data, error, count } = await supabase
    .from("enrollments")
    .select("id, studentId, courseId, courses(name, image)")
    .eq("studentId", studentId);

  if (error) {
    throw new Error("Enrollments could not be loaded");
  }

  return data;
}
