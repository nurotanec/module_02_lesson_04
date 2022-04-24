import { createRow } from './createElements.js';
import { removeStorage, addContactData } from './serviceStorage.js';

const modalControl = (btnAdd, formOverlay) => {
    const openModal = () => {
        formOverlay.classList.add('is-visible');
    };
    const closeModal = () => {
        formOverlay.classList.remove('is-visible');
    };

    btnAdd.addEventListener('click', openModal);

    formOverlay.addEventListener('click', e => {
        const target = e.target;
        if (target === formOverlay ||
            target.closest('.close')) {
            closeModal();
        }
    });

    return {
        closeModal,
    }
};

const deleteControl = (btnDel, list) => {
    btnDel.addEventListener('click', () => {
        document.querySelectorAll('.delete').forEach(del => {
            del.classList.toggle('is-visible');
        });
    });

    list.addEventListener('click', e => {
        const target = e.target;
        if (target.closest('.del-icon')) {
            removeStorage(target.closest('.contact').children[3].innerText);
            target.closest('.contact').remove();
        }
    });
};

const addContactPage = (contact, list) => {
    list.append(createRow(contact));
};

const formControl = (form, list, closeModal) => {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const newContact = Object.fromEntries(formData);

        addContactPage(newContact, list);
        addContactData(newContact);
        form.reset();
        closeModal();
    });
};

export default {
    modalControl,
    deleteControl,
    formControl,
}
