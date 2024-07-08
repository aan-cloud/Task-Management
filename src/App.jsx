import { useState } from "react";
import Header from "./component/header";
import Features from "./component/features";
import Main from "./component/main";

function App() {
  const datas = [];

  const [cards, setCards] = useState(datas);
  const [form, setForm] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");

  function handleItems() {
    setCards([
      ...cards,
      {
        title: title,
        date: date,
        status: status,
      },
    ]);
    setForm(false);
  }

  function handleForm() {
    setForm(true);
    console.log(form);
  }

  function handleCloseForm() {
    setForm(false);
  }

  function handleTitle(value) {
    setTitle(value);
  }

  function handleDate(value) {
    setDate(value);
  }

  function handleStatus(value) {
    setStatus(value);
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
        title={handleTitle}
        date={handleDate}
        status={handleStatus}
        valueStatus={status}
      />
      <Main cards={cards} />
    </>
  );
}

export default App;
