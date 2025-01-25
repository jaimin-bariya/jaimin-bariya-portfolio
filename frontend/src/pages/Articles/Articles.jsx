/** @format */

import { AllArticles } from "@/data/articlesData";

const Articles = () => {
  return (
    <>
      <div className=" max-w-4xl mx-auto sm:my-32 my-12 p-8 md:p-0">
        <div className="sm:mb-32 mb-16">
          <h1 className="text-start sm:text-5xl text-4xl font-bold mb-4">
            Articles
          </h1>
          <p className="dark:text-zinc-400 text-zinc-600 sm:text-xl text-lg mb-8">
            Guides, references, and tutorials on programming, web development,
            AI-ML, and Interview Preparation Kit.
          </p>
        </div>

        <div className="space-y-16">
          {Object.entries(AllArticles)
            .sort(([yearA], [yearB]) => yearB - yearA)
            .map(([year, posts]) => (
              <section key={year} className="border-b-2 pb-16">
                <h2 className="sm:text-4xl text-3xl font-bold mb-8">{year}</h2>
                <div className="space-y-2">
                  {posts.map((post) => (
                    <div
                      key={post.title}
                      className="flex justify-between items-baseline"
                    >
                      <a
                        target="_blank"
                        href={post.href}
                        className="dark:text-articleLinkColor text-blue-800 hover:text-orange-500 transition-colors sm:text-lg text-sm"
                      >
                        {post.title}
                      </a>
                      <span className="text-zinc-500 sm:block hidden font-semibold font-mono ">
                        {" "}
                        {post.date}{" "}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            ))}
        </div>
      </div>
    </>
  );
};

export default Articles;
