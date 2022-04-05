import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-5xl font-bold mb-5 text-red-500">
        What is context API?
      </h2>
      <p className="mb-10 text-xl">
        React mainly pass data in one way. So we have to pass data as props from
        one component to another component. Context API solve this props
        drilling issue. Context API is a procedure to save data globally, so
        every component can get data from anywhere. Context API is a feature of
        react to manage and share state across the entire app.
      </p>

      <h2 className="text-5xl font-bold mb-5 text-red-500">
        What is semantic tag?
      </h2>
      <p className="text-xl">
        Semantic HTML or semantic markup is HTML that introduces meaning to the
        web page rather than just presentation. In short we can say semantic
        tags means meaningful HTML tag. Semantic tag describes its meaning to
        both browser and developer. Semantic tag provides extra level of
        clarity. This clarity also help search engines to read the page and find
        the required information faster.
      </p>
    </div>
  );
};

export default Blog;
