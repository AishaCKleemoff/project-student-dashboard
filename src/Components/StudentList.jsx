import StudentCard from "./StudentCard";

export default function StudentList({ data, students, cohortName }) {
  console.log(data);
  let result = students.filter(
    (student) => student.cohort.cohortCode === cohortName
  );
  return (
    <div className="student-list">
      {cohortName === "All Students" ? (
        <>
          <h2 className="color-student-list">All Students</h2>
          <br />
        </>
      ) : (
        <>
          <h2 className="color-student-list">
            {cohortName.split(/[0-9]/g)} {cohortName.slice(-4)}
          </h2>
          <br />
        </>
      )}

      <p>
        <span className="student-total-color">
          Total Students:{" "}
          {cohortName === "All Students" ? (
            <span>{data.length}</span>
          ) : (
            <span>{result.length}</span>
          )}
        </span>
      </p>

      {cohortName === "All Students"
        ? students.map((student) => {
            return (
              <div key={student.id}>
                <StudentCard key={student.id} student={student} />
              </div>
            );
          })
        : students
            .filter((student) => student.cohort.cohortCode === cohortName)
            .map((student) => {
              return (
                <div key={student.id}>
                  <StudentCard key={student.id} student={student} />
                </div>
              );
            })}
    </div>
  );
}
