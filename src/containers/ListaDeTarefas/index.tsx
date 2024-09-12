import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Pagar a conta de internet',
    descricao: 'baixar fatura no gmail',
    prioridade: 'urgente',
    status: 'concluida'
  },
  {
    titulo: 'Estudar typescript',
    descricao: 'ver aula 3 da EBAC',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Estudar Ir a academia',
    descricao: 'fazer treino de superiores',
    prioridade: 'importante',
    status: 'pendente'
  }
]

export const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
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

export default ListaDeTarefas
