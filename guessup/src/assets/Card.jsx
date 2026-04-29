export default function Card({ title, bgColor }) {
  return (
    <div id="Card" style={{ backgroundColor: bgColor }}>
      <h1>{title}</h1>
    </div>
  );
}
