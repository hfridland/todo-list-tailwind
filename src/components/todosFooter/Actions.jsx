import Action from './Action'

const Actions = () => {
  return (
    <div
      className="grow text-center"
      style={{ cursor: "url('/cursor.png'), auto" }}
    >
      <Action text="All" />
      <Action text="Active" />
      <Action text="Completed" />
    </div>
  )
}

export default Actions
