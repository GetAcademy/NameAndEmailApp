function createNewPerson() {
    const person = {};
    person.id = getMaxPersonId() + 7;
    person.name = model.inputs.createNew.name;
    person.email = model.inputs.createNew.email;
    model.people.push(person);
    model.app.page = 'search';
    updateView();
}