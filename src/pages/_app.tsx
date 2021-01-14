import React from "react";
import { AppProps } from "next/app";
import Layout from "../components/Layouts";
import { ApolloProvider } from "@apollo/client";
import { client } from "../apollo/Client";
import "../styles/global.scss"
// import "../styles/_home.scss";
// import "../styles/admin/styles.scss";

function App({ Component, pageProps }: AppProps) {
      return (
            <ApolloProvider client={client}>
                  <Layout>
                        <Component {...pageProps} />
                  </Layout>
            </ApolloProvider>
      );
}

export default App;
