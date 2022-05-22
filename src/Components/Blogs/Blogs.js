import React from 'react';

const Blogs = () => {
    return (
        <div className='m-5 text-start'>
            <h2>Difference between javascript and nodejs?</h2>
            <p>ans: javascript is a programming language and node js is only a part of that language,node js is a runtime environment we can call it an interpreter too,node js requires libraries that can easily be accessed from javascript language.javascript means the whole language which is usable in backend and frontend both where node js is used for backend only.</p>
            <h2> When should we use nodejs and when should you use mongodb?</h2>
            <p>ans: Node js is used to run an application, and for coding an application and it's backend functionalities,generally we use it to  build servers that can respond to web requests, where MongoDB is a database system, which is used to store data or user information, and all the information that needs to be saved for repeative use.And mongoDB is also used in update or delete the saved information</p>
            <h2> Differences between sql and nosql databases?</h2>
            <p>Sql databses are relational databases like mysql,which are table based, the information gets stored updated deleted being in a relational table,and these databases are vertically scalable,It requires queries to handle SQL databases,on the other hand NoSQL databases are non-relational databases like MongoDB,these databases have unstructured data and dynamic schemas,NoSQL databases are horizontally scalable.</p>
        </div>
    );
};

export default Blogs;