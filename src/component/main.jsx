import Cards from "./Cards";

export default function ({ cards, onDeleteItem, handleEdit }) {
  return (
    <section
      id="main"
      className="border-t-[2px] mt-[15px] px-[35px] py-[30px] grid grid-cols-auto-fill-minmax gap-5"
    >
      {cards.map((card, i) => (
        <Cards
          key={i}
          card={card}
          handleEdit={handleEdit}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </section>
  );
}
