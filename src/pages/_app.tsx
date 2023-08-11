import GlobalLayout from "@/layouts/global-layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Roboto } from "next/font/google";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    let switchers = document.querySelectorAll(".switcher");

    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    switchers.forEach(switcher => {
      switcher.addEventListener("click", function () {
        if (localStorage.getItem("color-theme")) {
          if (localStorage.getItem("color-theme") === "light") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
          } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
          }
        } else {
          if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
          } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
          }
        }
      });
    });
  }, []);
  return (
    <>
      {/* <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style> */}
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </>
  );
}
