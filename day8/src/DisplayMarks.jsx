import React from "react";
import Marks from "./Marks";

const DisplayMarks = () => {
    const Students = [
        {name: "rahul", roll: 6464682, m1: 40, m2: 95, m3: 56},
        {name: "rahul", roll: 6464682, m1: 40, m2: 95, m3: 56},
        {name: "rahul", roll: 6464682, m1: 40, m2: 95, m3: 56},
        {name: "rahul", roll: 6464682, m1: 40, m2: 95, m3: 56},
        {name: "rahul", roll: 6464682, m1: 40, m2: 95, m3: 56}
    ];
  return (
    <div>
        {
            Students.map((Students, index) =>{
                return(
                    <Marks 
                    key={index}
                    name={Students.name}
                    roll={Students.roll}
                    m1={Students.m1}
                    m2={Students.m2}
                    m3={Students.m3} 
                />
                )
            })}
      
    </div>
  );
};

export default DisplayMarks;