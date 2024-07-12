import { useState, useEffect } from "react";
import Features from "./component/features/features";
import Main from "./component/main/main";

function App() {
  const [cards, setCards] = useState([]);
  const [form, setForm] = useState(false);
  const [data, setData] = useState({
    title: "",
    date: "",
    status: "",
  });
  const [editData, setEditData] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setCards(storedTodos);
  }, []);

  function handleItems() {
    const newCard = [
      ...cards,
      {
        title: data.title,
        date: data.date,
        status: data.status,
        id: Date.now(),
      },
    ];
    setCards(newCard);

    localStorage.setItem("cards", JSON.stringify(newTodos));

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
    setData((data) => (data.title = value));
  }

  function handleDate(value) {
    setData((data) => (data.date = value));
  }

  function handleStatus(value) {
    setData((data) => (data.status = value));
  }

  function handleDeleteItem(id) {
    const remove = cards.filter((Delete) => Delete.id !== id);
    setCards(remove);
    localStorage.setItem("cards", JSON.stringify(remove));
  }

  function handleEdit(card) {
    setForm(true);
    setEditData(card.id);
    setData((data) => (data.title = card.title));
    setData((data) => (data.date = card.date));
    setData((data) => (data.status = card.status));
    setIsVisible(true);
  }

  function onSaveEdit() {
    const updateCard = cards.map((card) =>
      card.id === editData ? { ...card, data.title, data.date, data.status } : card
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
      <Features
        cards={cards}
        onHandleItems={handleItems}
        openForm={handleForm}
        form={form}
        closeForm={handleCloseForm}
        title={handleTitle}
        date={handleDate}
        status={handleStatus}
        valueStatus={data.status}
        isVisible={isVisible}
        editData={editData}
        onSaveEdit={onSaveEdit}
      />
      <Main
        cards={cards}
        onDeleteItem={handleDeleteItem}
        handleEdit={handleEdit}
      />
    </>
  );
}

export default App;
