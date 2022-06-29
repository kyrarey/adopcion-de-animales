/* import { configureStore, combineReducers } from "redux"; */
//import seed

// Action Creators
////////////////////////////////////////

const addAnimal = (animal) => {
  return {
    type: "favoriteAnimals/addAnimal",
    payload: animal,
  };
};

const removeAnimal = (animal) => {
  return {
    type: "favoriteAnimals/removeAnimal",
    payload: animal,
  };
};

const setSearchTerm = (term) => {
  return {
    type: "searchTerm/setSearchTerm",
    payload: term,
  };
};

const clearSearchTerm = () => {
  return {
    type: "searchTerm/clearSearchTerm",
  };
};

const loadData = () => {
  return {
    type: "allAnimals/loadData",
    payload: allAnimalsData,
  };
};

// Reducers
////////////////////////////////////////

const initialAllAnimals = [];
const allAnimalsReducer = (allAnimals = initialAllAnimals, action) => {
  switch (action.type) {
    case "allAnimals/loadData":
      return action.payload;
    default:
      return allAnimals;
  }
};

const initialSearchTerm = "";
const searchTermReducer = (searchTerm = initialSearchTerm, action) => {
  switch (action.type) {
    case "searchTerm/setSearchTerm":
      return action.payload;
    case "searchTerm/clearSearchTerm":
      return "";
    default:
      return searchTerm;
  }
};

const initialFavoriteAnimals = [];
const favoriteRecipesReducer = (
  favoriteRecipes = initialFavoriteAnimals,
  action
) => {
  switch (action.type) {
    case "favoriteAnimals/addAnimal":
      return [...favoriteAnimals, action.payload];
    case "favoriteAnimals/removeAnimal":
      return favoriteAnimals.filter((recipe) => {
        return recipe.id !== action.payload.id;
      });
    default:
      return favoriteAnimals;
  }
};
