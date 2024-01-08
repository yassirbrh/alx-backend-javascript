export default function updateStudentGradeByCity(students, city, newGrades) {
  const cityStudents = students.filter((student) => student.location === city);
  const finalArr = cityStudents.map((student) => {
    for (const grade of newGrades) {
      if (grade.studentId === student.id) {
        return {
          id: student.id,
          firstName: student.firstName,
          location: student.location,
          grade: grade.grade,
        };
      }
    }
    return {
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: 'N/A',
    };
  });
  return finalArr;
}
