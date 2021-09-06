const viewSchedule = () => {
  console.log("YOU ARE HERE!!!!!!!!!")
  document.location.replace('/viewSchedule')
}

const enrollStudent = () => {
  document.location.replace('/newStudent')
}

const listStudents = () => {
  document.location.replace('/listOfStudents');
}

/////////////////////////////////////////////////////////////////////

document
  .querySelector('#vSchedule')
  .addEventListener('click', viewSchedule);

document
  .querySelector('#vEnrollAStudent')
  .addEventListener('click', enrollStudent);

document
  .querySelector('#vViewStudents')
  .addEventListener('click', listStudents);

