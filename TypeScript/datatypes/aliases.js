"use strict";
function compareCoords(p1, p2) {
    return [p1[0], p2[0]];
}
const coords = [];
function addContact(contact) {
    if ("birthday" in contact) {
        console.log(contact.name, contact.birthday);
    }
    else {
        console.log(contact.companyName);
    }
}
