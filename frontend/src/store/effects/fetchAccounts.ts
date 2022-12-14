import { ActionsTypes } from './../types/actionTypes';
import { ThunkAction } from 'redux-thunk';

import AccountsService from '../../services/accountsService';
import getAllAccountsActionCreator from '../actions/getAllAccountsActionCreator';

import { RootState } from './../index';

type Effect = ThunkAction<any, RootState, any, ActionsTypes>;

export const fetchAccounts = (): Effect => (dispatch, getState) => {
  
  const accountsService = new AccountsService();
  return accountsService.loadUsers()
    .then((response) => {
      const res = response.data;
      return dispatch(getAllAccountsActionCreator(res))
    });
};