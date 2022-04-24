import * as createEl from './createElements.js';

const renderPhoneBook = (app, title) => {
    const header = createEl.createHeader();
    const logo = createEl.createLogo(title);
    const main = createEl.createMain();
    const buttonGroup = createEl.createButtonsGroup([
        {
            className: 'btn btn-primary mr-3 js-add',
            type: 'button',
            text: 'Добавить',
        },
        {
            className: 'btn btn-danger',
            type: 'button',
            text: 'Удалить',
        },
    ]);
    const table = createEl.createTable();
    const { form, overlay } = createEl.createForm();
    const footer = createEl.createFooter(title);

    header.headerContainer.append(logo);
    main.mainContainer.append(buttonGroup.btnWrapper, table, overlay);

    app.append(header, main, footer);

    return {
        list: table.tbody,
        logo,
        btnAdd: buttonGroup.btns[0],
        btnDel: buttonGroup.btns[1],
        formOverlay: overlay,
        form,
    };
};


const renderContacts = (elem, data) => {
    const allRow = data.map(createEl.createRow);
    elem.append(...allRow);

    return allRow;
};

export default {
    renderPhoneBook,
    renderContacts,
};
