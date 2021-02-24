import { actionsTypes } from "./actionsTypes/index";
import api from '../../services/api'

export const getAll = () => {
  return async (dispatch) => {
    try{
    dispatch(getSize())
    dispatch(getPasta())
    dispatch(getFilling())
    dispatch(getEdge())
    dispatch(getSuggestion())
    } catch (error) {
      console.log(error);
    }
  };
};

export const getSize = () => {
  return async (dispatch) => {
    try {
      const { data } = await api.get(
        '/size'
      );
      dispatch({ type: actionsTypes.GET_SIZE, data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPasta = () => {
  return async (dispatch) => {
    try {
      const { data } = await api.get(
        'pasta'
      );
      dispatch({ type: actionsTypes.GET_PASTA, data });

    } catch (error) {
      console.log(error);
    }
  };
};

export const getFilling = () => {
  return async (dispatch) => {
    try {
      const { data } = await api.get(
        'filling'
      );
      dispatch({ type: actionsTypes.GET_FILLING, data });

    } catch (error) {
      console.log(error);
    }
  };
};

export const getEdge = () => {
  return async (dispatch) => {
    try {
      const { data } = await api.get(
        'edge'
      );
      dispatch({ type: actionsTypes.GET_EDGE, data });

    } catch (error) {
      console.log(error);
    }
  };
};

export const getSuggestion = () => {
  return async (dispatch) => {
    try {
      const { data } = await api.get(
        '/suggestion'
      );
      dispatch({ type: actionsTypes.GET_SUGGESTION, data });

    } catch (error) {
      console.log(error);
    }
  };
};