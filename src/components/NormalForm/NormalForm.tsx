import React from "react";
import { useForm } from "react-hook-form";
import cn from "../../utils/cn";

const NormalForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const double = true;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("border-2 border-red-500 w-full p-5 mx-auto", {
        "max-w-5xl": double,
        "max-w-md": !double,
      })}
    >
      <div
        className={cn(
          "border-2 border-blue-500 grid grid-cols-1 gap-5 justify-items-center",
          {
            "md:grid-cols-2": double,
            "md:grid-cols-": !double,
          }
        )}
      >
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Name
          </label>
          <input type="text" id="name" {...register("name")} />{" "}
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Email
          </label>
          <input
            className="w-full"
            type="text"
            id="name"
            {...register("name")}
          />{" "}
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Password
          </label>
          <input
            className="w-full"
            type="text"
            id="name"
            {...register("name")}
          />{" "}
        </div>
      </div>
      {/* <select>
          <option>one</option>
          <option>two</option>
          <option>three</option>
          <option>four</option>
        </select> */}
      {/* <button type="submit">Submit</button> */}
    </form>
  );
};

export default NormalForm;
