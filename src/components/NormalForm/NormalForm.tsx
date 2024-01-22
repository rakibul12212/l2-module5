import React from "react";
import { useForm } from "react-hook-form";
import cn from "../../utils/cn";
import Button from "../ui/Button";

const NormalForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const double = true;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "border-2 border-gray-300 rounded-lg shadow-sm w-full p-5 my-5 mx-auto",
        {
          "max-w-5xl": double,
          "max-w-md": !double,
        }
      )}
    >
      <div
        className={cn(" grid grid-cols-1 gap-5 justify-items-center", {
          "md:grid-cols-2": double,
          "md:grid-cols-": !double,
        })}
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
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Gender
          </label>
          <select>
            <option>male</option>
            <option>female</option>
            <option>other</option>
          </select>
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            About
          </label>
          <textarea></textarea>
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            agreement & terms
          </label>
          <input type="checkbox" />
        </div>
      </div>
      <div
        className={cn(" grid grid-cols-1 gap-5 justify-items-center", {
          "md:grid-cols-2 ": double,
        })}
      >
        <div className=" w-full max-w-md col=start-1 md:col-start-2 flex justify-end my-5">
          <Button className="w-full md:w-fit" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default NormalForm;
