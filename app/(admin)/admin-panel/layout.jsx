
import React, { Fragment } from 'react';
import Header from "@/components/Header2";
import Footer from "@/components/Footer";


export default function RootLayout({ children }) {

  return (
    <Fragment>
      <Header />
        {children}
      <Footer />
    </Fragment>
  );
}
