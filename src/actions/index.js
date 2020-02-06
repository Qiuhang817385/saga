import { createAction } from 'redux-actions';
export const createAdd1 = createAction("add");
export const createAdd = createAction("counter/add");
export const createSub = createAction("counter/sub");
export const createAsyncAdd = createAction("counter/addAsync");