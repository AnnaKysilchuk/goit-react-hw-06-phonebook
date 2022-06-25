import { useSelector, useDispatch } from 'react-redux/es/exports';
import { changeFilter } from '../../redux/contacts/contactsSlice';
import style from './FilterForm.module.css';

export const FilterForm = () => {
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    return (
        <div>
            <label>
                <p>Find contacts by name</p>
                <input
                    type="text"
                    name="filterInput"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    required
                    className={style.filterInputArea}
                    value={filter}
                    onChange={e => dispatch(changeFilter(e.target.value))}
                />
            </label>
        </div>
    );
};
