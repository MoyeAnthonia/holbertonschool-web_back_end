export default function getStudentIdsSum(students, city) {
  if (!Array.isArray(students)) {
    return [];
  }
    const totalIdSum = students.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.id;
    }, 0);

  return totalIdSum;

}
