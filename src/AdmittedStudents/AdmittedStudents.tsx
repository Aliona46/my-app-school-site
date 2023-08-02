import React from "react";

const studentsList = () => {
    const studentsNames = ['Ann Smith','Bob Marley','John Black','Martha Stewart','Mary Olsen',
     'Janet Jackson','Will Smith','Marilyn Monroe','Jhonny Depp','Brad Pitt','Mandy Moore'];

    return(
        <ul style={{listStyleType:'none',marginLeft: "20px", padding:0}}>
        {studentsNames.map((studentName, index) =>(
            <li key={index} style={{display:'block'}}>

        {studentName}
        </li>
        ))}
        </ul>
    );
};

export default studentsList;
