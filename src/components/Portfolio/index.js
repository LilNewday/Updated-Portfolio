import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

const [projects] = useState([
    {
    name: 'The Prework Study guide',
    description: 'HTML/CSS/Javascript',
    link: "https://lilnewday.github.io/prework-study-guide/",
    repo: "https://github.com/LilNewday/prework-study-guide"
    },
    {
    name: 'Horiseon',
    description: 'HTML/CSS',
    link: "https://lilnewday.github.io/Week-One-Challenge/",
    repo: "https://github.com/LilNewday/Week-One-Challenge"
    },
    {
    name: 'Big Job Search',
    description: 'CSS/Javascript/server-side APIs',
    link: "https://rjclemmer.github.io/Big_Job_Search/",
    repo: "https://github.com/rjclemmer/Big_Job_Search"
    },
    {
    name: 'The Recipe App',
    description: 'RESTful API/Handlebars/MYSQL/Sequelize ORM',
    link: "https://github.com/LilNewday/Recipes-",
    repo: "https://github.com/LilNewday/Recipes-"
    },
    {
    name: 'DevConnect',
    description: 'React/GraphQL/MongoDB/Mongoose ODM',
    link: "https://github.com/jannorth/DevConnect",
    repo: "https://github.com/jannorth/DevConnect"
    },
]);

return (
    <div>
    <div className="flex-row">
        {projects.map((project, idx) => (
        <Project
            project={project}
            key={"project" + idx}
        />
        ))}
    </div>
    </div>
);
};

export default Portfolio;
