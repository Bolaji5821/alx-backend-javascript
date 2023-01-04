/**
 * Return ids from a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @author Oyedele Bolaji <https://github.com/Bolaji5821>
 * @returns
 */
export default function getListStudentIds(arr) {
  if (arr instanceOf Array) {
    return arr.map((arr) => arr.id);
  }
  return [];
}
