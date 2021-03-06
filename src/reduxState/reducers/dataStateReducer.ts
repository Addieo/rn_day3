import produce from 'immer';
import { Action, User } from 'types/types';

export interface DataState {
  user?: User;
  token: string;
}
export const initialState: Readonly<DataState> = {
  token: '',
};

export default (originalState = initialState, action: Action) =>
  produce(originalState, state => {
    switch (action.type) {
      case 'setUser':
        state.user = action.payload;
        state.token = state.user.token;
        return;
      case 'logout':
        state.user = undefined;
        state.token = '';
        return;
    }
  });
