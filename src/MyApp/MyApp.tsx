import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import AdmittedStudents from "../AdmittedStudents/AdmittedStudents";
import OrganizationalInfo from "../OrganizationalInfo/OrganizationalInfo";
import ExamScores from "../ExamScores/ExamScores";


export default function MyApp():JSX.Element{
    return(
        <Routes>
            <Route path="/" element= {<Layout />}>
                <Route path="AdmittedStudents" element = {<AdmittedStudents/>} />
                <Route path="OrganizationalInfo" element = {<OrganizationalInfo/>} />
                <Route path="ExamScores" element = {<ExamScores />} />
            </Route>
        </Routes>
    )
}