import React from "react";

const Blogs = () => {
  return (
    <div className="bg-light">
      <div className="text-center">
        <h2>Difference between JavaScript and Node.js</h2>
        <p>
          JavaScript is a proper high-level programming language used to create
          web scripts whereas Node.js is a run time environment built on
          google’s v8 engine. JavaScript is executed in the browser whereas
          using Node.js gives us the ability to execute JavaScript outside the
          browser. JavaScript can manipulate DOM or add HTML within whereas
          Node.js doesn’t have the capability to add HTML. JavaScript is mainly
          used to create front end web applications or develop client-side
          whereas Node.js is used on the back end development that is
          server-side development JavaScript follows the standard of JavaScript
          when writing programs whereas Node.js is written in C++ while using
          the v8 engine, it runs JavaScript outside the browser. JavaScript
          requires any running environment as it can execute on any engine such
          as Firefox’s spider monkey, v8 engine of google chrome, JavaScript
          core of Safari whereas Node.js runs only on the v8 engine of google
          chrome.
        </p>
      </div>
      <div className="text-center">
        <h2> When should you use nodejs and when should you use mongodb</h2>
        <p>
          Any project needs a programming environment and a runtime library that
          offers you basic programming tools/support and can compile and/or
          interpret your code. Nodejs is such as tool for the Javascript
          programming language. There are other similar tools for other
          languages such as Python, Java, PHP, C#, C++, Go, etc.So, if you want
          to write some kind of stand-alone program or server in Javascript,
          then you can use nodejs for it.
        </p>
        <p>
          If your application needs the ability to persistently store data in a
          way that you can efficiently query or update it later, then you would
          typically use some form of database. There are dozens of popular
          databases. MongoDB is one such database. MariaDB, MySql, CouchDB,
          DynamoDB (on AWS), Postgres are examples of other databases. Different
          databases have different strengths (things they are best at) and
          different ways of using them so it's a whole different question to
          choose the right/best database for what you're doing.
        </p>
      </div>
      <div>
        <h2 className="text-center">
          Differences between sql and nosql databases.
        </h2>
        <ul>
          <h5>SQL</h5>
          <li>
            SQL databases are primarily called RDBMS or Relational Databases
          </li>
          <li>
            Traditional RDBMS uses SQL syntax and queries to analyze and get the
            data for further insights. They are used for OLAP systems.
          </li>
          <li>Structured query language (SQL)</li>
          <li>SQL databases are table based databases</li>
          <li>It should be configured for strong consistency.</li>
          <li>SQL databases are not suitable for hierarchical data storage.</li>
        </ul>
        <ul>
          <h5>NonSQL</h5>
          <li>
            NoSQL databases are primarily called as Non-relational or
            distributed database
          </li>
          <li>
            NoSQL database system consists of various kind of database
            technologies. These databases were developed in response to the
            demands presented for the development of the modern application.
          </li>
          <li>No declarative query language</li>
          <li>
            NoSQL databases can be document based, key-value pairs, graph
            databases
          </li>
          <li>It should be configured for strong consistency.</li>
          <li>
            More suitable for the hierarchical data store as it supports
            key-value pair method.
          </li>
        </ul>
      </div>
      <div className="text-center">
        <h2>What is the purpose of jwt and how does it work</h2>
        <p>
          JWT, or JSON Web Token, is an open standard used to share security
          information between two parties — a client and a server. Each JWT
          contains encoded JSON objects, including a set of claims. JWTs are
          signed using a cryptographic algorithm to ensure that the claims
          cannot be altered after the token is issued.
        </p>
        <p>
          JWTs differ from other web tokens in that they contain a set of
          claims. Claims are used to transmit information between two parties.
          What these claims are depends on the use case at hand. For example, a
          claim may assert who issued the token, how long it is valid for, or
          what permissions the client has been granted.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
