export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding som items to packing list🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got every thing! ready to go✈️"
          : `🛄You Have ${numItems} Items In Your List , and you already Packed${" "}
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
