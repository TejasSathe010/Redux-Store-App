import { ActionTypes } from '../constants/action-types';

const initialState = {
    products = [{
        id: 1,
        title: 'Tejas',
        category: 'React Developer'
    }]
}

export const productRendecer = (state, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return state;
        default:
            return state;
    }
}
