import React from "react";

const Form = () => {
  return (
    <div className="bg-white max-w-7xl mx-auto shadow-md rounded-xl flex flex-col justify-between">
      <form
        className="mx-2 my-5"
        method=""
        action=""
        className="flex items-center justify-between">
        <div className="">
          <label forhtml="title" className="font-sans mr-2">
            Title
          </label>
          <div>
            <input
              className=" bg-transparent border-2 rounded-lg"
              type="text"
              name="title"
            />
          </div>
        </div>
        <div>
          <label forhtml="owner" className="font-sans mr-2">
            Owner
          </label>
          <div>
            <input
              className=" bg-transparent border-2 rounded-lg"
              type="text"
              name="owner"
            />
          </div>
        </div>
        <div>
          <label forhtml="date" className="font-sans mr-2">
            Date
          </label>
          <div className="">
            <input
              className=" border-2  rounded-lg bg-transparent"
              type="date"
              name="date"
            />
          </div>
        </div>
        <div>
          <div className="">
            <label forhtml="desc" className="font-sans mr-2">
              Description
            </label>
          </div>
          <div>
            <textarea
              className="border-2 rounded-lg bg-transparent"
              type="text"
              name="desc"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
