import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { nanoid } from 'nanoid';
import { addContacts, getContact } from '../../redux/contacts/contactsSlice';
import style from './InputForm.module.css';

export const InputForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const contacts = useSelector(getContact);

    const onAddContact = contact => {
        if (contacts && contacts.flatMap(item => item.name).includes(contact.name)) {
            alert(`${contact.name} is already in your contacts.`);
            return;
        }
        const addContact = contact => dispatch(addContacts(contact));
        addContact(contact);
    };

    const handleSubmit = event => {
        event.preventDefault();
        onAddContact({
            name: name,
            number: number,
            id: nanoid(),
        });
        reset();
    };

    const handleChange = event => {
        const { name, value } = event.target;
        if (name === 'name') {
            setName(value);
        }
        if (name === 'number') {
            setNumber(value);
        }
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <form className={style.inputForm} onSubmit={handleSubmit}>
            <label className={style.label}>
                Name
                <br />
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    className={style.inputArea}
                    value={name}
                    onChange={handleChange}
                />
            </label>
            <label className={style.label}>
                Number
                <br />
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    className={style.inputArea}
                    value={number}
                    onChange={handleChange}
                />
            </label>
            <button type="submit" className={style.addContactBtn}>
                Add contact
            </button>
        </form>
    );
};
