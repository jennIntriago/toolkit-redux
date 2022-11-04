import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  //nombre del reducer
  reducerPath: "todos",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  //funciones a llamar para traer informacion
  endpoints: (builder) => ({
    //lo que hace es concatenar el /todos al url base
    getTodos: builder.query({
      query: () => "/todos",
    }),

    getTodo: builder.query({
      query: (todoId) => `/todos/${todoId}`,
    }),
  }),
});
//createApi nos crea custom hooks,entonces el getTodos cre hace un hook
export const { useGetTodosQuery, useGetTodoQuery } = todosApi;
