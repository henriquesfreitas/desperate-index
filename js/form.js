var person = document.querySelector("#add-person");

person.addEventListener("click", function(event){
    event.preventDefault();
    // console.log("my god");

    var formPerson = document.querySelector("#form-person");
    // console.log(formPerson.name.value);
    var person = getPerson(formPerson);

    if(!validatePerson(person))      
        return;

    addPersonOnTable(person);

    var errorUl = document.querySelector("#error-msg");
    errorUl.textContent = "";
    // console.log(person);
    formPerson.reset();
});

function getPerson(formPerson){
    var person = {
        name: formPerson.name.value,
        slackMessage: formPerson.slackMessage.value,
        callsByDay: formPerson.callsByDay.value,
        desperateIndex: desperateEquation(formPerson.slackMessage.value, formPerson.callsByDay.value)
    }

    return person;
}

function validatePerson(person){
    var errors = [];

    // console.log(person);
    if(person.name.length == 0)
        errors.push("Name can't be empty");

    if(isNaN(person.slackMessage) || person.slackMessage.length == 0)
        errors.push("Slack message has invalid number format");
        
    if(isNaN(person.callsByDay) || person.callsByDay.length == 0)
        errors.push("Calls By Day has invalid number format");

    if(errors.length > 0){
        showMessageError(errors);
        return false;
    }

    return true;
}

function showMessageError(errors){
    
        var errorUl = document.querySelector("#error-msg");
        errorUl.innerHTML = "";
        errors.forEach(error => {
            var li = document.createElement("li");
            li.textContent = error;
            // console.log(li);
            // console.log(errorUl);
            errorUl.appendChild(li);
        });
}

function addPersonOnTable(person){
    var personTr = addTrPerson(person);

    var table = document.querySelector("#table-desperate-index");
    table.appendChild(personTr);
}


function addTrPerson(person){
    var personTr = document.createElement("tr");

    var nameTd = addTdPerson(person.name, "info-name");
    var slackMessageTd = addTdPerson(person.slackMessage, "info-slack-message");
    var callsByDayTd = addTdPerson(person.callsByDay, "info-calls-by-day");
    var desperateIndexTd = addTdPerson(person.desperateIndex, "info-desperate-index");

    personTr.appendChild(nameTd);
    personTr.appendChild(slackMessageTd);
    personTr.appendChild(callsByDayTd);
    personTr.appendChild(desperateIndexTd);

    return personTr;
}

function addTdPerson(textContent, cssClass){
    var nameTd = document.createElement("td");
    nameTd.textContent = textContent;
    nameTd.classList.add(cssClass);

    return nameTd;
}


