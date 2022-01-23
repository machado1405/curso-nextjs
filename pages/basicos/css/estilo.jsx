import Estilo from "../../../components/Estilo";

export default function estilo() {
  return (
    <>
      <h1>Estilo</h1>
      <Estilo numero={10} />
      <Estilo numero={-10} color="#fff" />
    </>
  );
}