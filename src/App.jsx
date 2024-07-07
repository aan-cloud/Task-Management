import { useState } from "react";
import Header from "./component/header";
import Features from "./component/features";
import Main from "./component/main";

function App() {
  const datas = [];

  const [cards, setCards] = useState(datas);
  const [form, setForm] = useState(false);

  function handleItems() {
    const same = {
      title: "validasi akun google",
      date: "25 june 2003",
      status: "done",
    };
    setCards([...cards, same]);
    setForm(false);
  }

  function handleForm() {
    setForm(true);
    console.log(form);
  }

  function handleCloseForm() {
    setForm(false);
  }

  return (
    <>
      <Header />
      <Features
        cards={cards}
        onHandleItems={handleItems}
        openForm={handleForm}
        form={form}
        closeForm={handleCloseForm}
      />
      <Main cards={cards} />
    </>
  );
}

export default App;
