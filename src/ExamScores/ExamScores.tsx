import React from "react";

const studentsList = () => {
    const studentsNames = ['Ann Smith: 9','Bob Marley: 3','John Black: 7','Martha Stewart: 9','Mary Olsen: 5',
     'Janet Jackson: 8','Will Smith: 6','Marilyn Monroe: 4','Jhonny Depp: 2','Brad Pitt: 6','Mandy Moore: 7'];

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
