import { useState, useEffect } from "react";
import Features from "./component/features";
import Main from "./component/main";
import Form from "./component/form";

function App() {
  const [cards, setCards] = useState([]);
  const [form, setForm] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [editData, setEditData] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("cards")) || [];
    setCards(storedTodos);
  }, []);

  function handleItems() {
    const newCard = [
      ...cards,
      {
        title: title,
        date: date,
        status: status,
        id: Date.now(),
      },
    ];
    setCards(newCard);

    localStorage.setItem("cards", JSON.stringify(newCard));
    setForm(false);
  }

  function handleForm() {
    setForm(true);
    setIsVisible(false);
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

  function handleDeleteItem(id) {
    const remove = cards.filter((Delete) => Delete.id !== id);
    setCards(remove);
    localStorage.setItem("cards", JSON.stringify(remove));
  }

  function handleEdit(card) {
    setForm(true);
    setEditData(card.id);
    setTitle(card.title);
    setDate(card.date);
    setStatus(card.status);
    setIsVisible(true);
  }

  function onSaveEdit() {
    const updateCard = cards.map((card) =>
      card.id === editData ? { ...card, title, date, status } : card
    );

    setCards(updateCard);
    setForm(false);
  }

  return (
    <>
      <section className="p-[35px] pb-[14px] w-full text-[#3E3C3C] ">
        <h1 className="font-bold text-3xl mb-3">Task Management</h1>
        <p className="text-[12px] border-b-[2px] pb-3  text-[#656565] font-semibold ">
          Manage any type of task, Assign status, set timelines and keep track
          of where your project
        </p>
      </section>
      <Features openForm={handleForm} form={form}>
        <Form
          closeForm={handleCloseForm}
          onHandleItems={handleItems}
          title={handleTitle}
          date={handleDate}
          status={handleStatus}
          valueStatus={status}
          onSaveEdit={onSaveEdit}
          isVisible={isVisible}
        />
      </Features>
      <Main
        cards={cards}
        onDeleteItem={handleDeleteItem}
        handleEdit={handleEdit}
      />
    </>
  );
}

export default App;
