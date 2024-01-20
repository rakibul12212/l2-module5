import Container from "./components/ui/Container";

function App() {
  return (
    <Container>
      <div className="h-screen w-full flex justify-center items-center">
        <h1>this is a h1 tag</h1>
        <h2>this is a h2 tag</h2>
        <button className="btn btn-primary">this is a button</button>
        <button className="btn btn-danger">this is a button</button>
      </div>
    </Container>
  );
}

export default App;
