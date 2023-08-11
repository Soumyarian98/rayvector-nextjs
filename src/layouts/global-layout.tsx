import Footer from "@/sections/footer";
import Header from "@/sections/header";
import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const GlobalLayout: FC<Props> = ({ children }) => {
  return (
    <body className="min-h-screen bg-white selection:bg-primary/10 selection:text-primary dark:bg-gray-900">
      <Header />
      {children}
      <Footer />
    </body>
  );
};

export default GlobalLayout;
