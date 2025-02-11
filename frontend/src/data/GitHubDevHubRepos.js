const allReposNames = [
    {
        name: "Setup Templates",
        desc: "Ready made templates for your project, just clone it and set-up industry senior level directory strucutre",
        repoLink: "https://github.com/jaimin-bariya/Project-Templates"
    },
    {
        name: "Python DS Methods Cheatsheet",
        desc: "A concise and comprehensive cheat sheet covering Methods and properties of Python's built-in data structures like Lists, Dictionaries, Sets, Tuples, and Strings. This resource is designed to help developers write efficient and optimized Python code.",
        repoLink: "https://github.com/jaimin-bariya/python-methods-cheatsheet"
    },
    {
        name: "Awesome-SQL-Interview",
        desc: "This repository is a curated collection of SQL queries and interview questions designed to help developers, data analysts, and database enthusiasts prepare for SQL-related technical interviews.",
        repoLink: "https://github.com/jaimin-bariya/Awesome-SQL-Interview"
    },
    {
        name: "Python Complexity Cheat Sheet",
        desc: "A concise and comprehensive cheat sheet covering time complexities of Python's built-in data structures like Lists, Dictionaries, Sets, Tuples, and Strings. This resource is designed to help developers write efficient and optimized Python code.",
        repoLink: "https://github.com/jaimin-bariya/python-complexity-cheatsheet"
    },
    {
        name: "Flask-SQLAlchemy Comprehensive Guide Repository",
        desc: "Welcome to the Flask SQLAlchemy Complete Guide Repository. This repository is your ultimate resource for mastering Flask-SQLAlchemy—from beginner-friendly tutorials to advanced features and best practices.",
        repoLink: "https://github.com/jaimin-bariya/Flask-SQLAlchemy-Guide"
    }

]


const topRepos = [allReposNames[0], allReposNames[1]]


const typeWiseArrangedRepo = [

    {
        typeName: "My Favorites",
        listOf: topRepos
    },

    {
        typeName: "My All Repos",
        listOf: allReposNames
    }
]


export {allReposNames, typeWiseArrangedRepo}