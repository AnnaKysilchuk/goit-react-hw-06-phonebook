import style from './App.module.css';
import { InputForm } from './components/inputForm/InputForm.jsx';
import { FilterForm } from './components/filterForm/FilterForm.jsx';
import { ContactsList } from './components/contactsList/ContactsList.jsx';

const App = () => {
    return (
        <div>
            <h2 className={style.title}>Phonebook</h2>
            <InputForm />
            <h2 className={style.title}>Contacts</h2>
            <FilterForm />
            <ContactsList />
        </div>
    );
};

export default App;
