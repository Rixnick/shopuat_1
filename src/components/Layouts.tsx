import React, { ReactElement } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

interface Props {
      title?: String;
}

const Layouts: React.FC<Props> = ({ children }) => {
      const { pathname } = useRouter();
      return (
            <div>
                  <Head>
                        <title>
                              {pathname === "/"
                                    ? "HOME"
                                    : pathname.split("/")[1].toUpperCase()}
                        </title>
                        <meta charSet="utf-8" />
                        <meta
                              name="viewport"
                              content="initial-scale=1.0, width=device-width"
                        />
                        <link
                              href="https://fonts.googleapis.com/css2?family=Noto+Sans&family=Roboto&display=swap"
                              rel="stylesheet"
                        />
                       
                  </Head>
                  {children}
                  <script type="text/javascript" src="../assets/js/index.jsg"></script>
            </div>
      );
};

export default Layouts;
