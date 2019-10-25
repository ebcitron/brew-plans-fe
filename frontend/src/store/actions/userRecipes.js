import {
  GET_USER_RECIPES_START,
  GET_USER_RECIPES_SUCCESS,
  GET_USER_RECIPES_FAIL,
  DELETE_USER_RECIPE_START,
  DELETE_USER_RECIPE_SUCCESS,
  DELETE_USER_RECIPE_FAIL,
  UPDATE_USER_RECIPE_INPUT,
  UPDATE_USER_RECIPE_START,
  UPDATE_USER_RECIPE_SUCCESS,
  UPDATE_USER_RECIPE_FAIL,
  NEW_RECIPE_INPUT_UPDATE
} from './actionTypes.js';

import axios from 'axios';

export const getUserRecipes = userId => dispatch => {
  dispatch({ type: GET_USER_RECIPES_START });
  if (userId) {
    axios
      .get(
        `https://brewplans-production.herokuapp.com/userrecipes/${userId}`
      )
      .then(res => {
        dispatch({ type: GET_USER_RECIPES_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_USER_RECIPES_FAIL, payload: err });
      });
  } else {
    axios
      .get(`https://brewplans-production.herokuapp.com/userrecipes/all`)
      .then(res => {
        dispatch({ type: GET_USER_RECIPES_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_USER_RECIPES_FAIL, payload: err });
      });
  }
};


export const deleteUserRecipe = recipeId => dispatch => {
  dispatch({ type: DELETE_USER_RECIPE_START })
  axios
    .delete(`https://brewplans-production.herokuapp.com/userrecipes/${recipeId}`)
    .then(res => {
      dispatch({ type: DELETE_USER_RECIPE_SUCCESS, payload: recipeId })
    })
    .catch(err => [
      dispatch({ type: DELETE_USER_RECIPE_FAIL, payload: err })
    ])
}

export const handleRecipeEdit = (inputField, inputValue) => dispatch => {
  dispatch({
    type: UPDATE_USER_RECIPE_INPUT,
    payload: {
      type: inputField,
      value: inputValue
    }
  });
};

export const handleRecipeUpdate = (updatedRecipe, recipeId) => dispatch => {
  dispatch({ type: UPDATE_USER_RECIPE_START })
  axios.put(
      `https://brewplans-production.herokuapp.com/userrecipes/${recipeId}`, 
      updatedRecipe
      )
  .then(res => {
    console.log(res);
    dispatch({ type: UPDATE_USER_RECIPE_SUCCESS, payload: res.data })
  })
  .catch(err => {
    dispatch({ type: UPDATE_USER_RECIPE_FAIL, payload: err })
    console.log(err)
  })
}

export const handleNewRecipeInput = (inputField, inputValue) => dispatch => {
  dispatch({
    type: NEW_RECIPE_INPUT_UPDATE,
    payload: {
      type: inputField,
      value: inputValue
    }
  });
}