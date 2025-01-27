import { useState } from "react";

import DetailStudentCard from "./DetailsStudentCard";

export default function StudentCard({ student }) {
  const {
    names: { preferredName, middleName, surname },
    username,
    dob,
    profilePhoto,
    codewars: { current, goal },
    cohort: { scores },
    certifications: { resume, linkedin, github, mockInterview },
    notes,
  } = student;

  const date = new Date(dob);

  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  const birthDate = date.toLocaleDateString("en-US", options);

  const [show, setShow] = useState(false);

  const graduate =
    current.total > 600 && resume && linkedin && github && mockInterview ? (
      <p>On Track to Graduate</p>
    ) : (
      ""
    );

  return (
    <div className="student-card">
      <section className="image-student-info">
        <img
          src={profilePhoto}
          alt={`${preferredName} ${middleName} ${surname}`}
        />
      </section>

      <section className="student-info color-student-info">
        <h2>
          {preferredName} {middleName[0]}. {surname}
        </h2>

        <p>{username}</p>

        <p>
          <span className="birth-date">Birthday: </span> {birthDate}
        </p>
      </section>

      <section className="show-section">
        <section className="section-show-btn">
          <h4>
            <button className="show-btn" onClick={() => setShow(!show)}>
              {show ? "Show Less..." : "Show More..."}
            </button>
          </h4>
        </section>

        <section className="show-more">
          {show && (
            <DetailStudentCard
              codewarsCurrentTotal={current.total}
              codewarsCurrentLastweek={current.lastWeek}
              codewarsGoalTotal={goal.total}
              cohortScoresAssignments={scores.assignments}
              cohortScoresProjects={scores.projects}
              cohortScoresAssessments={scores.assessments}
              certificationsResume={resume}
              certificationsLinkedIn={linkedin}
              certificationsGitHub={github}
              certificationsMockInterview={mockInterview}
            />
          )}
        </section>
      </section>

      <aside className="ontrack-graduate">{graduate}</aside>
    </div>
  );
}
