import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './FilterSlice';
import { contactsReducer } from './ContactsSlice';
import {
  persistReducer,
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};
// console.log(persistConfig);
const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);
console.log(persistedContactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});
export const persistor = persistStore(store);
