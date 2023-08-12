import { useState } from "react";

export default function DetailStudentCard({
  codewarsCurrentTotal,
  codewarsCurrentLastWeek,
  codewarsGoalTotal,
  cohortScoresAssignments,
  cohortScoresProjects,
  cohortScoresAssessments,
  certificationsResume,
  certificationsLinkedIn,
  certificationsGitHub,
  certificationsMockInterview,
}) {
  const percentFormat = Number(
    ((codewarsCurrentTotal / codewarsCurrentTotal) * 100).toFixed(0)
  );

  return (
    <>
      <section className="card-details">
        <aside className="aside-details">
          <h3>Codewars</h3>

          <h4 className="color1-student-details">
            Current Total:{" "}
            <span className="color2-student-details">
              {codewarsCurrentTotal}
            </span>
          </h4>
          <h4 className="color1-student-details">
            Last Week:{" "}
            <span className="color2-student-details">
              {codewarsCurrentLastWeek}
            </span>
          </h4>
          <h4 className="color1-student-details">
            Goal:{" "}
            <span className="color2-student-details">{codewarsGoalTotal}</span>
          </h4>
          <h4 className="color1-student-details">
            Percent of Goal Achieved:{" "}
            <span
              style={
                percentFormat >= 100
                  ? { color: "green" }
                  : percentFormat > 50 && percentFormat < 100
                  ? { color: "yellowgreen" }
                  : { color: "red" }
              }
            >
              {percentFormat}%
            </span>
          </h4>
        </aside>
        <aside className="aside-details">
          <h3>Scores</h3>

          <h4 className="color1-student-details">
            Assignments:{" "}
            <span className="color2-student-details">
              {Number((cohortScoresAssignments * 100).toFixed(0))}%
            </span>
          </h4>
          <h4 className="color1-student-details">
            Projects:{" "}
            <span className="color2-staudent-details">
              {Number((cohortScoresProjects * 100).toFixed())}%
            </span>
          </h4>
          <h4 className="color1-student-details">
            Assessments:{" "}
            <span className="color2-student-details">
              {Number((cohortScoresAssessments * 100).toFixed(0))}%
            </span>
          </h4>
        </aside>
        <aside className="aside-details">
          <h3>Certifications</h3>

          <h4 className="color1-student-details">
            Resume:{" "}
            {certificationsResume ? (
              <span>&#x2705;</span>
            ) : (
              <span>&#x274C;</span>
            )}
          </h4>
          <h4 className="" color1-student-details>
            LinkedIn:{" "}
            {certificationsLinkedIn ? (
              <span>&#x2705;</span>
            ) : (
              <span>&#x274C;</span>
            )}
          </h4>
          <h4 className="color1-student-details">
            GitHub:{" "}
            {certificationsGitHub ? (
              <span>& #x2705;</span>
            ) : (
              <span>&#x274C;</span>
            )}
          </h4>
          <h4 className="color1-student-detals">
            Mock Interview:{" "}
            {certificationsMockInterview ? (
              <span>&#x2705;</span>
            ) : (
              <span>&#x274C;</span>
            )}
          </h4>
        </aside>
      </section>
    </>
  );
}
