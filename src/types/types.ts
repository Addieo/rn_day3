import { Action } from 'reduxState/actions';
export { Action };
import { DataState } from 'reduxState/reducers/dataStateReducer';

import { MainStackParamList } from 'routers/MainStackNavigator';
import { TabParamList } from 'routers/TabNavigator';
import { AuthStackParamList } from 'routers/AuthStackNavigator';

export type ScreensParamList = MainStackParamList &
  TabParamList &
  AuthStackParamList;
export interface DataTimeStamp {
  updatedAt: string;
  createdAt: string;
  deletedAt: string | null;
}

export interface User extends DataTimeStamp {
  token: string;
  id: number;
  username: string;
  email: string;
  avatar: number;
}

export interface ReduxState {
  // uiState: UIState;
  dataState: DataState;
  // settingsState: SettingsState;
}
