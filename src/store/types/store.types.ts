import { store } from '../store';

export type AppDispatch = typeof store.dispatch;

export type PersistedRootState = ReturnType<typeof store.getState>;
