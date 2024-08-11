import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { DEV_VAR } from "../utils/config";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: DEV_VAR.BASE_URL,
});

const authLink = setContext((_, { headers }) => {
  const persistedState = localStorage.getItem("persist:authorization") || "";
  const token = JSON.parse(JSON.parse(persistedState).token).access;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

export { client };
