import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
      <div className="pr-10 flex flex-col justify-center">
        <h2 className="text-5xl font-bold bg-red-600 text-center py-5 mb-5">
          Choose Best <span className="text-white">Case</span>
        </h2>
        <p className="leading-7 text-gray-700 mb-10">
          There's plenty of terminology to know when shopping for a new PC case,
          as you'll see in our list of specs and jargon below. Whether you're
          buying a case as an upgrade or for a build-a-PC-from-scratch project,
          we suspect you're savvy enough to take your PC to pieces and put it
          back together again. But when shopping, the terminology around cases
          and motherboards can be confusing, and some of it can stump even
          experienced builders.
        </p>

        <button className="self-start px-7 py-5 rounded-lg bg-red-600 text-xl font-semibold text-white  hover:text-black">
          Live Demo
        </button>
      </div>

      <div>
        <img
          className="max-w-full h-auto rounded-lg object-cover"
          src="https://i.pcmag.com/imagery/articles/02cpA0MjrM6aeBKZpmIhG00-23.fit_lim.size_1600x900.v1569484467.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
