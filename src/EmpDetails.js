import React from "react";

const EmpDetails = () => {
  const employees = [
    { name: "viki", jobrole: "Officer", salary: "$200", dob: "10-05-1990" },
    { name: "singh", jobrole: "manger", salary: "$100", dob: "12-08-1992" },
    { name: "vijay", jobrole: "Clerk", salary: "$300", dob: "01-01-1992" },
    { name: "aarthi", jobrole: "Clerk", salary: "$100", dob: "12-03-1991" },
    { name: "anfi", jobrole: "Clerk", salary: "$200", dob: "11-09-1991" },
  ];

  console.log(
    "Ex: Using map method to create a new Array of all the Employee names"
  );
  const mapEmployeeNames = employees.map(function (employee) {
    if (employee.jobrole === "Clerk") {
      return employee.name;
    }
  });

  console.log(mapEmployeeNames);
  return (
    <div>
      <h2>
        {""}
        {mapEmployeeNames}
        {""}
      </h2>
    </div>
  );
};

export default EmpDetails;
