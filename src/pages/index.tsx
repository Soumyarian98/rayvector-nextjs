import Link from "next/link";
import Header from "@/sections/header";
import Footer from "@/sections/footer";
import { client } from "../../sanity/lib/client";
import { sanityImageUrlBuilder } from "@/utils/sanityImageUrlBuilder";

export const getStaticProps = async () => {
  const data = await client.fetch(`*[_type == "homepage"]`);

  return {
    props: {
      data: data?.[0] ? data[0] : null,
    },
    revalidate: 300,
  };
};

export default function Home({ data }: any) {
  return (
    <main className="min-h-screen bg-white selection:bg-primary/10 selection:text-primary dark:bg-gray-900">
      <Header />
      <section className="pt-32 sm:pt-40 md:pt-48">
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="relative">
            <h1 className="text-center text-5xl font-bold text-blue-900 dark:text-white sm:text-6xl md:text-left lg:text-5xl">
              {data?.bannerTitle}
            </h1>
            <div className="relative  gap-12 lg:flex">
              <div className="text-center sm:mx-auto sm:w-11/12 md:mt-12 md:w-4/5 lg:mt-0 lg:mr-auto lg:w-6/12 lg:text-left">
                <p className="mt-12 text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
                  {data?.bannerSubtitle}
                </p>
                <button
                  type="submit"
                  aria-label="send"
                  name="subscribe"
                  className="relative mt-12 flex h-11 w-16 items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight sm:w-max">
                  <span className="relative hidden text-lg font-semibold leading-3 text-white dark:text-gray-900 sm:block">
                    Learn More
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="relative mx-auto h-6 w-6 text-white dark:text-gray-900 sm:hidden">
                    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                  </svg>
                </button>
              </div>
              <div className="mt-12 w-full overflow-hidden sm:mt-20 lg:-mt-8 lg:w-6/12">
                {data?.bannerImage && (
                  <img
                    className="w-full"
                    src={sanityImageUrlBuilder(data.bannerImage).url()}
                    alt="team illustration"
                    height="600"
                    width="800"
                  />
                )}
              </div>
            </div>
            <div className="mt-12 border-y border-gray-100 py-8 text-center dark:border-gray-800 md:py-12 xl:mt-20">
              <Link
                href="customers.html"
                className="text-sm font-semibold tracking-wider text-gray-800 dark:text-white uppercase">
                {data?.customerSectionTitle}
              </Link>
              <div className="mt-8 flex flex-wrap justify-center gap-6 brightness-75 contrast-200 grayscale dark:brightness-200 dark:contrast-0 sm:justify-between lg:gap-24">
                {data?.customerLogos.map((logo: any) => (
                  <img
                    className="h-8 w-auto lg:h-10 lg:w-auto"
                    src={sanityImageUrlBuilder(logo).width(200).url()}
                    loading="lazy"
                    alt="airbnb"
                    width=""
                    height=""
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
