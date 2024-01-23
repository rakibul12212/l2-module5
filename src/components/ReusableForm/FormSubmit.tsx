import { useContext } from "react";
import cn from "../../utils/cn";
import Button from "../ui/Button";
import { FormElementContext } from ".";

export const FormSubmit = () => {
  const { double } = useContext(FormElementContext);
  return (
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
  );
};
