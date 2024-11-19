import React from "react";

export default function ResumeCard(resume) {
  return (
    <div className="grid grid-cols-1">
      Email : {resume.Email}
      Phone : {resume.Phone}
      Skills : {resume.Skills}
      Certification : {resume.Certifiacation}
      Project Title : {resume.Project_Title}
      Project Description : {resume.Project_Description}
      Technologies Used : {resume.Technologies_Used}
      Languages : {resume.Langages}
      Proficeny : {resume.Proficenty}
      Addition Info : {resume.Addition_Info}
    </div>
  );
}
