import TodoCreator from './components/creator/TodoCreator'
import Title from './components/title/Title'
import Todos from './components/todos/Todos'
import TodosFooter from './components/todosFooter/TodosFooter'
import Messages from './components/Messages'

const App = () => {
  return (
    <div className="flex flex-col justify-center">
      <Title />
      <TodoCreator />
      <Todos />
      <TodosFooter />
      <Messages />
    </div>
  )
}

export default App
