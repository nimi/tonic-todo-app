import TodoApp from "./App.js"
import TodoList from "./TodoList.js"
import TodoItem from "./TodoItem.js"

let once = false

function add(Tonic) {
  if (once) {
    return
  }
  once = true

  Tonic.add(TodoItem)
  Tonic.add(TodoList)
  Tonic.add(TodoApp)
}

export default add
