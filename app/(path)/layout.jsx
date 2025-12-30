import Header from "@/components/Header";
import { MyProvider } from "@/components/ContextAPIProvide";
import { Fragment } from "react";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Interior designers in chennai | Home interior designer in chennai.",
  description: "Premium Best interior designer Chennai, Award winner | We Assure 100% Desing & work satisfy | 15yr Warranty, 3500+ Complete Project",
};

export default function RootLayout({ children }) {
  return (
    <Fragment>
      <Header />
      <MyProvider>
        {children}
      </MyProvider>
      <Footer />
    </Fragment>
  );
}
