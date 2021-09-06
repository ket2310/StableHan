var today = moment()
    .startOf('month')
    .day('Tuesday')
$("#task").text(`Lesson Schedule for the week of ${today.format("dddd, MMMM Do")}`);
