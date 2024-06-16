import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";

function App() {
  return (
    <div>
      <Navbar name="User Point of View"></Navbar>

      <TextForm name='text form'>
<p>this is child inside text form</p>

      </TextForm>
    </div>
  );
}

export default App;
