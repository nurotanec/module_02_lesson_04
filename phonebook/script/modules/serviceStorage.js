export const getStorage = key => {
    return JSON.parse(localStorage.getItem(key)) || [];
};

export const setStorage = (key, object) => {
    const objects = getStorage(key);
    localStorage.setItem(key, JSON.stringify(objects.concat(object)));
};

export const removeStorage = phone => {
    const contacts = getStorage('contacts');
    const newContacts = contacts.filter((contact, index, arr) => {
        return contact.phone !== phone;
    });
    localStorage.setItem('contacts', JSON.stringify(newContacts));
};

export const addContactData = contact => {
    setStorage('contacts', contact);
};
