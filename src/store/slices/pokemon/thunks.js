import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  // dispatch => funcion para despachar acciones
  // getState => funcion para obtener todo el rootState, por ejemplo que el user este autenticado
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    //TODO: realizar peticion http

    // dispatch(setPokemons());
  };
};
