import ItemsCounter from './ItemsCounter'
import Actions from './Actions'
import ActClearCompl from './ActClearCompl'

const TodosFooter = () => {
  return (
    <div className="xs:w-[540px] w-[330px] h-[50px] bg-white dark:bg-[#494c6b] flex items-center p-6 mx-auto text-[#484b6a] dark:text-[#393a4c] z-2">
      <ItemsCounter />
      <Actions className="actions" />
      <ActClearCompl />
    </div>
  )
}

export default TodosFooter
