import React from "react";
import App from "../App/App";

const OrganizationalInfo = () => {
    const examInfo = '28.06.23, 12.00. Auditorium 223.'
    return (
    <div style={{listStyleType:'none',marginLeft: "20px", padding:0}}>
        <h2>Exam will be held on: </h2>
        <h1>{examInfo}</h1>
    </div>
    );
    
};

export default OrganizationalInfo;
