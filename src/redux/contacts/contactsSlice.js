import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    filter: '',
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,

    reducers: {
        addContacts: (state, { payload }) => {
            state.items.push(payload);
        },

        deleteContacts: (state, { payload }) => {
            const index = state.items.findIndex(contact => contact.id !== payload.id);
            state.items.splice(index, 1);
        },

        changeFilter: (state, { payload }) => {
            state.filter = payload;
        },
    },
});

export const { addContacts, deleteContacts, changeFilter } = contactsSlice.actions;

export const getContact = state => state.items;
export const onFilterChange = state => state.filter;

export default contactsSlice.reducer;
