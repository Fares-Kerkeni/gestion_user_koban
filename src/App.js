import Styles from "./app.module.scss";
import Form from "./components/formulaire/Form";
function App() {
  return (
    <div className={Styles.container}>
      <Form />
    </div>
  );
}

export default App;
