import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { actionsTypes } from "../action/actionsTypes/index";

const INITIAL_STATE = {
  size: [],
  pasta: [],
  filling: [],
  edge: [],
  pizzaDay: {
    pasta: [],
    size: [],
    filling: [],
    edge: [],
    points: null
  }
}

function pizzas(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionsTypes.GET_SIZE:
      return { ...state, size: action.data.size };
    case actionsTypes.GET_PASTA:
      return { ...state, pasta: action.data.pasta };
    case actionsTypes.GET_FILLING:
      return { ...state, filling: action.data.filling };
    case actionsTypes.GET_EDGE:
      return { ...state, edge: action.data.edge };
    case actionsTypes.GET_SUGGESTION:
      return { ...state, pizzaDay: action.data.suggestion };
    default:
      return state;
  }
}

const store = createStore(pizzas, applyMiddleware(thunk));

export default store;