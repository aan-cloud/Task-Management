import { useState, useEffect } from "react";
import Features from "../component/Features";
import Main from "../component/Main";
import Form from "../component/Form";
import Card from "../component/Card";

export default function Home() {
  const [cards, setCards] = useState([]);
  const [form, setForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [editData, setEditData] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [isOpenCard, setIsOpenCard] = useState(false);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("cards")) || [];
    setCards(storedTodos);
  }, []);

  function handleItems() {
    const newCard = [
      ...cards,
      {
        title: title,
        description: description,
        date: date,
        status: status,
        id: Date.now(),
      },
    ];
    setCards(newCard);

    localStorage.setItem("cards", JSON.stringify(newCard));
    setForm(false);
    console.log(dataCards);
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

  function handleDescription(value) {
    setDescription(value);
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
    setDescription(card.description);
    setDate(card.date);
    setStatus(card.status);
    setIsVisible(true);
  }

  function onSaveEdit() {
    const updateCard = cards.map((card) =>
      card.id === editData
        ? { ...card, title, description, date, status }
        : card
    );
    setCards(updateCard);
    localStorage.setItem("cards", JSON.stringify(updateCard));
    setForm(false);
  }

  function openCard(card) {
    setIsOpenCard(true);
    setTitle(card.title);
    setDescription(card.description);
    setDate(card.date);
    setStatus(card.status);
  }

  function closeCard() {
    setIsOpenCard(false);
  }

  function handleSearch(value) {
    setCards((cards) => cards.filter((card) => card.title.includes(value)));
    console.log(value);
  }

  return (
    <>
      <section className="p-[35px] pt-[30px] pb-[14px] w-full text-[#3E3C3C]">
        <h1 className="font-bold text-[43px] mb-2">Task Management</h1>
        <p className="text-[13px] border-b-[2px] pb-3  text-[#656565] font-semibold ">
          Manage any type of task, Assign status, set timelines and keep track
          of where your project
        </p>
      </section>
      {isOpenCard && (
        <Card
          closeCard={closeCard}
          title={title}
          description={description}
          date={date}
          status={status}
        />
      )}
      <Features openForm={handleForm} form={form} handleSearch={handleSearch}>
        <Form
          closeForm={handleCloseForm}
          onHandleItems={handleItems}
          title={handleTitle}
          description={handleDescription}
          date={handleDate}
          status={handleStatus}
          onSaveEdit={onSaveEdit}
          isVisible={isVisible}
        />
      </Features>
      <Main
        openCard={openCard}
        cards={cards}
        onDeleteItem={handleDeleteItem}
        handleEdit={handleEdit}
      />
    </>
  );
}
