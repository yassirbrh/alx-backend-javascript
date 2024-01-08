export default function getStudentIdsSum(students) {
  return students.reduce((finalValue, student) => finalValue + student.id, 0);
}
