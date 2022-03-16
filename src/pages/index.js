import React from "react";

//components
import Header from "../components/Header/Header";
import ShadowBoxes from "../components/ShadowBoxes/ShadowBoxes";
import BackgroundChanger from "../components/BackgroundChanger/BackgroundChanger";
import { Helmet } from "react-helmet";

//data

//styles
import "./index.scss";
const IndexPage = () => {
  return (
    <main>
      <Helmet
        meta={[
          {
            name: `description`,
            content: "Handpicked Box-Shadows for Developers and Designers",
          },
          {
            property: `og:description`,
            content: "Handpicked Box-Shadows for Developers and Designers",
          },
          {
            property: `og:type`,
            content: `website`,
          },
        ]}
      >
        <meta charSet="utf-8" />
        <title>Box Shadows - Handpicked Box Shadows</title>
        <link rel="canonical" href="https://boxshadows.nakulrathore.com" />
      </Helmet>
      <Header />
      <ShadowBoxes />
      <BackgroundChanger />
    </main>
  );
};

export default IndexPage;
