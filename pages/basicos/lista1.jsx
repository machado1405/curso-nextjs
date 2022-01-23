export default function lista() {
  function retornaSpan(valor = 1) {
    const lista = [];
    for(let i = 1; i <= valor; i++) {
      lista.push(<span>{i},</span>);
    }
    return lista;
  }
  return (
    <>
      {retornaSpan()}
    </>
  );
}