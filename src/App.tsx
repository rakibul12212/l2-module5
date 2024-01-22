import { useState } from "react";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Modal from "./components/ui/Modal";
import NormalForm from "./components/NormalForm/NormalForm";

function App() {
  //for modal
  // const [modal, setModal] = useState(false);
  // const handleModalClose = () => {
  //   setModal((prev) => !prev);
  // };
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
      <NormalForm></NormalForm>
    </Container>
  );
}

export default App;
