import type { AppProps } from "next/app";
import React from "react";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client/core";
import { ApolloProvider } from "@apollo/client/react";
import { setContext } from "@apollo/client/link/context";
import ErrorBoundary from "@/components/ErrorBoundary";

const httpLink = createHttpLink({
  uri: "https://rickandmortyapi.com/graphql",
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
  },
}));

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ErrorBoundary>
  );
}

export default MyApp;
