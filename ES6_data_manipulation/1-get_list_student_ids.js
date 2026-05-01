import getListStudents from "./0-get_list_students.js";

export default function getListStudentIds(students) {
      if (!Array.isArray(students)) {
        return [];
      }
    const studentId = students.map((student) => student.id);
    return studentId;
}
