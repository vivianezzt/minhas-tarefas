import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { Container } from './styles'
import { RootRecucer } from '../../store'

export const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootRecucer) => state.tarefas)
  const { termo } = useSelector((state: RootRecucer) => state.filtro)

  const filtraTarefas = () => {
    if (termo) {
      return itens.filter(
        (item) =>
          item.titulo.toLocaleLowerCase().search(termo.toLocaleLowerCase()) >= 0
      )
    } else {
      return itens
    }
  }

  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;{termo}&ldquo;
      </p>
      <ul>
        {filtraTarefas().map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              descricao={t.descricao}
              titulo={t.titulo}
              status={t.status}
              prioridade={t.prioridade}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
