import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { campaignsSlice } from '../features/campaign/campaignsSlice';
import { schedulesSlice } from '../features/campaign/schedulesSlice';
import { schedulesNameSlice } from '../features/campaign/seperateSlices/schdeulesNameSlice';
import { schedulesDaysSlice } from '../features/campaign/seperateSlices/scheduleDaysSlice';

// import storage from 'redux-persist/lib/storage';
// import {
//   persistReducer,
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

const rootReducer = combineReducers({
  [campaignsSlice.reducerPath]: campaignsSlice.reducer,
  [schedulesSlice.reducerPath]: schedulesSlice.reducer,
  [schedulesNameSlice.reducerPath]: schedulesNameSlice.reducer,
  [schedulesDaysSlice.reducerPath]: schedulesDaysSlice.reducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      campaignsSlice.middleware,
      schedulesSlice.middleware,
      schedulesNameSlice.middleware,
      schedulesDaysSlice.middleware
    ),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// export const persistor = persistStore(store);
