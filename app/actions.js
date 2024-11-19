'use server'

import { redirect } from "next/navigation";
import { db } from "../lib/database";

export async function ResumeSubmit(formdata) {
    await db.resume.create({
        data: {
            Name: formdata.get('name'),
            Email: formdata.get('email'),
            Phone: formdata.get('phone'),
            Skills: formdata.get('skills'),
            Certification: formdata.get('certifications'),
            Project_Title: formdata.get('projectTitle'),
            Project_Description: formdata.get('projectDescription'),
            Technologies_Used: formdata.get('technologiesUsed'),
            Languages: formdata.get('language'),
            Proficiency: formdata.get('proficiency'),
            Addition_Info: formdata.get('additionalInfo')
        }
    })
    redirect('/dashboard')
}