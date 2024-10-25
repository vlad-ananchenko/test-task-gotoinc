import { PersistState } from 'redux-persist';

import { rootReducer } from '@/store/rootReducer';

export type RootReducerState = ReturnType<typeof rootReducer> & {
  _persist: PersistState;
};
