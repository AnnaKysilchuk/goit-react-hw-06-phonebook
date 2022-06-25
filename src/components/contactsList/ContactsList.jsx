import { useSelector, useDispatch } from 'react-redux/es/exports';
import { deleteContacts } from '../../redux/contacts/contactsSlice';
import { ContactsListItem } from './contactsListItem/ContactsListItem';

export const ContactsList = () => {
    const filter = useSelector(state => state.filter);
    const contacts = useSelector(state => state.items);
    const dispatch = useDispatch();

    const getFilterContacts = () => {
        if (!contacts) {
            return;
        }
        return contacts.filter(contact =>
            contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
        );
    };

    const deleteContact = contactId => dispatch(deleteContacts(contactId));

    const filteredContacts = getFilterContacts();

    return (
        <div>
            <ul>
                {filteredContacts &&
                    filteredContacts.map(({ id, name, number }) => (
                        <ContactsListItem
                            key={id}
                            name={name}
                            number={number}
                            id={id}
                            deleteBtn={deleteContact}
                        />
                    ))}
            </ul>
        </div>
    );
};
