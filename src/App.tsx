import { Suspense } from "react";
import { Router } from "./routes";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphQL/fakeApi";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

function RouterApp() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={client}>
          <Suspense fallback={<p>Initial Load...</p>}>
            <Router />
          </Suspense>
        </ApolloProvider>
      </PersistGate>
    </Provider>
  );
}

function App() {
  return <RouterApp />;
}

export default App;
