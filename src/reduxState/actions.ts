import {
  ActionValue,
  createAction,
  createActions,
  NoArgAction,
  NumberAction,
} from 'redux-type-actions';
import { User } from 'types/types';
// import { Location, User } from 'types/types';

const actions = createActions({
  // UI
  showCameraOptions: NoArgAction,

  setAge: NumberAction,

  setUser: createAction<User>(),
  // Data
  // setUser: createAction<User>(),
  // setLocation: createAction<Location>(),
  logout: NoArgAction,
});

export type Action = ActionValue<typeof actions>;

export default actions;
