//Array approved;
const approved = ["Samuel", "Lucas", "Renata", "Hanna"];


//callback function with only one parameter;
approved.forEach((name) => console.log(name));

const showApproved = (approved) => console.log(approved);

approved.forEach(showApproved);
