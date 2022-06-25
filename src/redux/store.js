import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contacts/contactsSlice';

const logger = createLogger({
    collapsed: (getState, action, logEntry) => !logEntry.error,
    timestamp: false,
});

const persistContactsConfig = {
    key: 'contacts',
    storage,
};

const persistedReducer = persistReducer(persistContactsConfig, contactsReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(logger),
});

export const persistor = persistStore(store);
