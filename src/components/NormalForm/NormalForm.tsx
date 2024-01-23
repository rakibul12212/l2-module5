import { useForm } from "react-hook-form";
import cn from "../../utils/cn";
import Button from "../ui/Button";
import { z } from "zod";

const signUpSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8, "too short"),
});

const NormalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
          <input
            type="text"
            id="name"
            placeholder="Full Name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-xs text-red-500">This field is requred.</span>
          )}
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input
            className="w-full"
            type="email"
            id="email"
            placeholder="example@email.com"
            {...register("email")}
          />{" "}
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="password">
            Password
          </label>
          <input
            className="w-full"
            type="password"
            id="password"
            placeholder="********"
            {...register("password", { minLength: 8 })}
          />
          {errors.password && (
            <span className="text-xs text-red-500">Too short</span>
          )}
        </div>
        {/* <div className="w-full max-w-md">
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
          <textarea placeholder="text"></textarea>
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            agreement & terms
          </label>
          <input type="checkbox" />
        </div> */}
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
