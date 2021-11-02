/* eslint-disable*/

import { ANIMALS, SELECT_ANIMAL, TOGGLE_ANIMAL_LOADING, ANIMAL_MESSAGE } from '../../types';

export default (state, action) => {

    switch (action.type) {
        case ANIMALS:
            return {
                ...state,
                employees: action.payload,
                loading: false

            }
        case TOGGLE_ANIMAL_LOADING:
            return {
                ...state,
                loading: action.payload
            }

        case ANIMAL_MESSAGE:
            return {
                ...state,
                message: action.payload,
                loading: false
            }
        case SELECT_ANIMAL:
            return {
                ...state,
                selectedAnimal: action.payload
            }
        default:
            return state;
    }
}