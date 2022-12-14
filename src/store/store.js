import { configureStore } from '@reduxjs/toolkit';
import { userApiServices } from '../features/UsersTable';

export const store = configureStore({
  reducer: {
    [userApiServices.reducerPath]: userApiServices.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApiServices.middleware)
});
