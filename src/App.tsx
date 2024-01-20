import Container from "./components/ui/Container";

function App() {
  return (
    <Container>
      <div className="h-screen w-full flex justify-center items-center">
        <button className="btn btn-primary">this is a button</button>
        <button className="btn btn-danger">this is a button</button>
      </div>
    </Container>
  );
}

export default App;
