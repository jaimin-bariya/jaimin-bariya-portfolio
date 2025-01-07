


const ArticleSingleShow = ({articles}) => {
  return (
    <>
      
        
        <div className="space-y-4">
          {articles.map((article, index) => (
            <div 
              key={index}
              className="flex justify-between items-center group"
            >
              <a 
                href={article.href}
                target="_blank"
                className=" dark:text-articleLinkColor text-indigo-600 font-semibold dark:font-normal hover:text-orange-500 dark:hover:text-orange-400 transition-colors text-lg"
              >
                {article.title}
              </a>
              <span className="text-zinc-500 text-sm">
                {article.date}
              </span>
            </div>
          ))}
        </div>

    </>
  );
};

export default ArticleSingleShow;