const findTheOldest = function (people) {
    let oldestPerson = { "age": 0 };

    for (i = 0; i < people.length; i++) {
        let age = 0;
        if (people[i]["yearOfDeath"] != undefined) {
            age = people[i]["yearOfDeath"] - people[i]["yearOfBirth"];
        }
        else if (people[i]["yearOfDeath"] == undefined) {
            age = new Date().getFullYear() - people[i]["yearOfBirth"];
        }

        if (age > oldestPerson["age"]) {
            oldestPerson["name"] = people[i]["name"];
            oldestPerson["age"] = age;
        };
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
