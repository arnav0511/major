import { db } from "@/lib/database";
import React from "react";

export default async function History() {
  const resumes = await db.resume.findMany();
  return (
    <>
      <div className="text-black text-3xl text-center font-bold">History of Resumes</div>
      <div className="text-black flex gap-8 p-3 text-xl flex-wrap justify-center">
        {resumes.length > 0 ? (
          resumes.map((resume) => (
            <div key={resume.id} className="border p-2 rounded-sm flex flex-col gap-3 bg-white  w-72">
              <p>Name : {resume.Name}</p>
              <p>Email : {resume.Email}</p>
              <p>Phone : {resume.Phone}</p>
              <p>Skills : {resume.Skills}</p>
              <p>Certifiacation : {resume.Certification}</p>``
              <p>Project Title : {resume.Project_Title}</p>
              <p>Project Desc : {resume.Project_Description}</p>
              <p>Technologies used : {resume.Technologies_Used}</p>
              <p>Langages :{resume.Languages}</p>
              <p>Proficenty : {resume.Proficiency}</p>
              <p>Additional info : {resume.Addition_Info}</p>
            </div>
          ))
        ) : (
          <div>No resume Found </div>
        )}
      </div>
    </>
  );
}
