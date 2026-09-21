export default function Square({ value }: { value: string | null }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
