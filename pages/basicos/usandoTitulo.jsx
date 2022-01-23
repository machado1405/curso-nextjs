import Titulo from '../../components/Titulo.jsx'

export default function usandoTItulo() {
  return (
    <div>
      <Titulo principal="Página de cadastro"                  secundario="Incluir, alterar e excluir coisas!" />
      <Titulo principal="Página de cadastro" secundario="Incluir, alterar e excluir coisas!" pequeno />
    </div> 
  );
}