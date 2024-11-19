"use client";

import { deleteEnrollment } from "../_lib/actions";
import EnrollmentCard from "./EnrollmentCard";

function EnrollmentsList({ enrollments }) {
  async function handleDelete(enrollmentId) {
    await deleteEnrollment(enrollmentId);
  }

  return (
    <ul className="flex flex-wrap mt-20 gap-9">
      {enrollments.map((enrollment) => (
        <EnrollmentCard
          onDelete={handleDelete}
          enrollment={enrollment}
          key={enrollment.id}
        />
      ))}
    </ul>
  );
}

export default EnrollmentsList;
