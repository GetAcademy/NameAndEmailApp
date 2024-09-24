function deletePerson() {
    if (!model.inputs.delete.areYouSure) return;
    const personId = model.inputs.delete.personId;
    const index = findPersonIndexById(personId);
    model.people.splice(index, 1);
    model.app.page = 'search';
    updateView();
}