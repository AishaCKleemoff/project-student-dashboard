export default function MenuCohortList({ data, setCohortName }) {
  const cohortList = [
    ...new Set(data.map((student) => student.cohort.cohortCode)),
  ];

  const sortedCohortList = [...cohortList].sort((a, b) => {
    if (a.slice(-1) < b.slice(-1)) {
      return -1;
    } else if (a.slice(-1) > b.slice(-1)) {
      return 1;
    } else {
      return 0;
    }
  });

  const handleCohortClick = (setCohortName) => setCohortName(cohortName);

  return (
    <div className="cohort-list">
      <h2>Choose a Class by Start Date</h2>

      <ul>
        <li onClick={() => setCohortName("All Students")}>All Students</li>

        {sortedCohortList.map((cohortName) => (
          <li
            key={crypto.randomUUID()}
            onClick={() => handleCohortClick(cohortName)}
          >
            {cohortName.split(/[0-9]/g)} {cohortName.slice(-4)}
          </li>
        ))}
      </ul>
    </div>
  );
}
