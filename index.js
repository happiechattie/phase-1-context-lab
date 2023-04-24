/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecords(employeeArray){
    const objectArray = [];
    for (let i = 0; i < employeeArray.length; i++){
        const employee = createEmployeeRecord(employeeArray[i]);
        objectArray.push(employee);
    }
    return objectArray;
}

function createEmployeeRecord(array){
    const employee = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee;
}

function createTimeInEvent(date){
    const dateArray = date.split(" ");
    const inEvent = {
        type: "TimeIn",
        hour: parseInt(dateArray[1]),
        date: dateArray[0]
    }
    this.timeInEvents.push(inEvent);
    return this;
}

function createTimeOutEvent(date){
    const dateArray = date.split(" ");
    const outEvent = {
        type: "TimeOut",
        hour: parseInt(dateArray[1]),
        date: dateArray[0]
    }
    this.timeOutEvents.push(outEvent);
    return this;
}

function hoursWorkedOnDate(date){
    const timeInArray = this.timeInEvents.find(time => (time.date === date));
    const timeIn = timeInArray.hour;
    const timeOutArray = this.timeOutEvents.find(time => (time.date === date));
    const timeOut = timeOutArray.hour;
    return ((timeOut - timeIn) / 100);
}

function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

function findEmployeeByFirstName(collection, firstNameString){
    return collection.find(object => (object.firstName === firstNameString));
}

function calculatePayroll(employees){
    let total = 0;
    for (let employee of employees){
        total += allWagesFor.call(employee);
    }
    return total;
}