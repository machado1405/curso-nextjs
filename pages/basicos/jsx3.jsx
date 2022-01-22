export default function jsx3() {
  const sub = 'Estou no JS';
  function entre(valor, min, max) {
    if (valor >= min && valor <= max) {
      return "Sim";
    } else {
      return 'Não';
    }
  }
  return (
    <div>
      <h1>JSX#03</h1>
      <p>{sub}</p>
      <h5>{entre(30, 1, 10)}</h5>
    </div>
  );
}