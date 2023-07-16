import { types } from "./actions.js";

const initialState = {
    count: 0,
    items: []
};

export function countReducer(state = initialState, action) {
    console.log("countReducer()", action);
    if (!action) return state;
    switch (action.type) {
        case types.INCREMENT:
            return { ...state, count: state.count + 1 };
        case types.DECREMENT:
            return { ...state, count: state.count - 1 };
        case types.CLEAR:
            return { ...state, count: 0 };
        case types.ADD_ITEM:
            const newItem = { id: state.count, text: action.text };
            return { ...state, count: state.count + 1, items: [...state.items, newItem] };
        case types.REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.id)
            };
        case types.MOVE_ITEM_UP:
            return moveItem(state, action.id, -1);
        case types.MOVE_ITEM_DOWN:
            return moveItem(state, action.id, 1);
        default:
            return state;
    }
}

function moveItem(state, id, direction) {
    const { items } = state;
    const index = items.findIndex((item) => item.id === id);
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= items.length) {
        return state;
    }
    const movedItem = items[index];
    const newItems = [...items];
    newItems.splice(index, 1);
    newItems.splice(newIndex, 0, movedItem);
    return { ...state, items: newItems };
}
