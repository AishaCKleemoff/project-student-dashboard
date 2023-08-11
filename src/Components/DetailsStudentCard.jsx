import { useState } from 'react';

 

export default function DetailStudentCard({
  codewarsCurrentTotal,
  codewarsCurrentLasrWeek,
  codewarsGoalTotal,
  cohortScoresAssignments,
  cohortScoresProjects,
  cohortScoresAssessments,
  certificationsResume,
  certificationsLinkedIn,
  certificationsGitHub,
  certificationsMockInterview,
  notes,
  student,
}) {


  const 
}



return (
  <>
  
    <section className='card-details'>
      <aside className='aside-details'>
        <h3>Codewars</h3>

        <h4 className='color1-student-details'>
          Current Total:{' '}
          <span className='color2-student-details'>
            {codewarsCurrentTotal}
          </span>
        </h4>
        <h4 className='color1-student-details'>
          Lasr Week:{' '}
          
        </h4>

      </aside>

    </section>
  </>
)