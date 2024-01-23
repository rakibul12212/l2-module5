// import { useState } from "react";
// import Button from "./components/ui/Button";
// import Modal from "./components/ui/Modal";
// import NormalForm from "./components/NormalForm/NormalForm";
import Container from "./components/ui/Container";
import {
  Form,
  FormSection,
  FormSubmit,
  Input,
} from "./components/ReusableForm";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

function App() {
  //for modal
  // const [modal, setModal] = useState(false);
  // const handleModalClose = () => {
  //   setModal((prev) => !prev);
  // };

  //for reusable form
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TTest>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const TestSchema = z.object({
    name: z.string(),
    email: z.string().email(),
  });

  type TTest = z.infer<typeof TestSchema>;

  return (
    // for reusable btn
    // <Container>
    //   <div className="h-screen w-full flex justify-center items-center">
    //     <Button variant="outline"></Button>
    //   </div>
    // </Container>

    // for modal
    // <Container>
    //   <div className="h-screen w-full flex justify-center items-center">
    //     <Button onClick={() => setModal((prev) => !prev)}>open modal</Button>
    //     <Modal isOpen={modal} onClose={handleModalClose}>
    //       <Modal.Header>
    //         <h1>this is modal header</h1>
    //         <Modal.CloseButton></Modal.CloseButton>
    //       </Modal.Header>
    //       <p>this is a modal content</p>
    //     </Modal>
    //   </div>
    // </Container>

    //for form

    <Container>
      {/* <NormalForm></NormalForm> */}
      <Form
        // double={true}
        onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}
      >
        <FormSection>
          <div className="w-full max-w-md">
            <label className="block" htmlFor="name">
              Name
            </label>
            <input type="text" id="name" {...register("name")} />
            {errors.name && (
              <span className="text-xs text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>
          <Input
            type="email"
            register={register("email")}
            errors={errors}
            label={"Email"}
          ></Input>{" "}
        </FormSection>
        <FormSubmit></FormSubmit>
      </Form>
    </Container>
  );
}

export default App;
