import React, { FC } from "react";
import clsx from "clsx";
import PortableText from "react-portable-text";

interface Props {
  title: string;
  description: any[];
  image?: string;
  imagePosition?: "left" | "right";
}

const SectionGrid: FC<Props> = ({
  imagePosition = "left",
  image,
  title,
  description,
}) => {
  return (
    <section className="py-16">
      <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
        <div
          className={clsx(
            `flex flex-col gap-6 md:items-center`,
            imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse"
          )}>
          {image && (
            <div className="md:5/12 lg:w-6/12">
              <img
                src={image}
                alt="rayvector"
                loading="lazy"
                width="1779"
                height="1592"
                className="rounded-3xl"
              />
            </div>
          )}
          <div
            className={clsx(Boolean(image) ? "md:7/12 lg:w-6/12" : "w-full")}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl xl:text-5xl">
              {title}
            </h2>
            <div className="mt-8 text-gray-600 dark:text-gray-300">
              <PortableText content={description} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionGrid;
