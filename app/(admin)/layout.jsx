import Header from "@/components/Header2";
import { Fragment } from "react";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Arcmen Admin Panel ",
  description: "Welcome to admin panel",
};

export default function RootLayout({ children }) {
  return (
    <Fragment>
      {/* <Header/>
      <MyProvider> */}
      {children}
      {/* </MyProvider>
      <Footer/> */}
    </Fragment>
  );
}
