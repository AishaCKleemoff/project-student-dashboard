import { useState } from "react";

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
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };

  const birthDate = date.toLocaleDateString('en-US', options);

  const [show, setShow] = useState(false);

  const graduate =
    current.total > 600 && resume && linkedin && github && mockInterview ? (
    ): (
        ''
      );
  
  
  return (
    <div className="student-card">
      <section className="image-student-info">
        <img src={profilePhoto} alt={`${preferredName} ${middleName} ${surname}`}
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
              {show ? 'Show Less...' : 'Show More...'}
            </button>
          </h4>
        </section className="show-more">
        {show && (
          <StudentDetailsCard
        )

        }
        <section>

        </section>
      </section>

    </div>
  )
  
}



