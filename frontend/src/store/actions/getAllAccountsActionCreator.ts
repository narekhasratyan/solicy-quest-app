import { AccountsDataType } from '../types/accountsTypes';

export const GET_ALL_ACCOUNTS = "GET_ALL_ACCOUNTS";

export type getAllAccountsActionType = {
  type:string,
  value:AccountsDataType[] | []
}
function getAllAccountsActionCreator(value:AccountsDataType[]):getAllAccountsActionType {
  return {
    type: GET_ALL_ACCOUNTS,
    value: value,
  };
}

export default getAllAccountsActionCreator;
