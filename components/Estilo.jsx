export default function Estilo(props) {
  const classeAplicada = props.numero >= 0 ? " azul" : " vermelha";
  return (
    <div>
      <h1 style={{
        backgroundColor: props.numero >= 0 ? "#2d2" : "#D22",
        color: props.color,
      }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque illo, deleniti maiores et numquam reiciendis mollitia quae eligendi consequuntur impedit dicta, recusandae corporis distinctio soluta nesciunt dolore expedita esse, at voluptas eum deserunt! Non sed officia dignissimos, fugit nulla itaque.</h1>
      <p className={classeAplicada}>Teste de classes</p>
    </div>
  );
}