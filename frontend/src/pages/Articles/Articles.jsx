import { AllArticles } from "@/data/articlesData";


const Articles = () => {
  return (
    <>
        <div className="my-32 max-w-4xl mx-auto p-8 md:p-0" >
          <div className="mb-32">
            <h1 className="text-start text-5xl font-bold mb-4" >Articles</h1>
            <p className="dark:text-zinc-400 text-zinc-600 text-xl mb-8">
              Guides, references, and tutorials on programming, web development, AI-ML, and Interview Preparation Kit. 
            </p>
          </div>



          <div className="space-y-16">
              {Object.entries(AllArticles)
                .sort(([yearA], [yearB]) => yearB - yearA)
                .map(([year, posts]) => (
                  <section key={year} className="border-b-2 pb-16">
                    <h2 className="text-4xl font-bold mb-8">{year}</h2>
                    <div className="space-y-2">
                      {posts.map((post) => (
                        <div key={post.title} className="flex justify-between items-baseline">
                          <a target="_blank" href={post.href} className="dark:text-articleLinkColor text-blue-800 hover:text-orange-500 transition-colors text-lg"> 
                            {post.title} 
                          </a>
                          <span className="text-zinc-500  font-semibold font-mono "> {post.date}  </span>
                        </div>
                      ))}
                    </div>
                  </section>
                ))
              }
          </div>





        </div>
    </>
  );
};

export default Articles;