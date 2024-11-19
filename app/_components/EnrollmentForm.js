"use client";

import { enroll } from "../_lib/actions";
import SubmitButton from "./SubmitButton";

function EnrollmentForm({ course }) {
  return (
    <div className="scale-[1.01]">
      <form
        action={enroll}
        className="flex flex-col gap-5 px-16 py-10 text-lg bg-primary-900"
      >
        <input type="hidden" value={course.id} name="courseId" />

        <div className="space-y-2">
          <label htmlFor="observations">
            What do you hope to achieve by taking this course?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800"
            placeholder=""
          />
        </div>

        <div className="flex items-center justify-end gap-6">
          <SubmitButton pendingLabel="Enrolling...">Enroll now</SubmitButton>
        </div>
      </form>
    </div>
  );
}

export default EnrollmentForm;
