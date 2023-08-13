import React, { FC } from "react";

interface Props {
  title?: string;
  subtitle?: string;
}

const BannerText: FC<Props> = ({ subtitle, title }) => {
  return (
    <section className="pt-32 pb-16 sm:pt-36 md:pt-40 lg:pt-36 relative">
      <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
        <h1 className="text-center text-5xl font-bold text-blue-900 dark:text-white sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-12 max-w-2xl mx-auto text-center text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default BannerText;
