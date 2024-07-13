import Card from "./card";
export default function ({ cards, onDeleteItem, handleEdit }) {
  return (
    <section
      id="main"
      className="border-t-[2px] mt-[15px] p-[35px] grid grid-cols-auto-fill-minmax gap-5"
    >
      {cards.map((card, i) => (
        <Card
          key={i}
          card={card}
          handleEdit={handleEdit}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </section>
  );
}
