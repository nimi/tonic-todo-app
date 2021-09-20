import Tonic from "../web_modules/@optoolco/tonic.js"

import { css, GlobalStyles } from "./styles.js"

class TodoApp extends Tonic {
  static stylesheet() {
    return GlobalStyles()
  }

  constructor() {
    super()
    this.state.newTodoValue = ""
    this.state.todos = [
      {
        title: "Write JavaScript",
        done: false,
        id: "js-1",
      },
      {
        title: "Write TypeScript",
        done: false,
        id: "ts-2",
      },
      {
        title: "Write Rust",
        done: false,
        id: "rust-3",
      },
    ]
  }

  connected() {
    const input = document.querySelector("#tonic--input_new-todo")

    input.focus()
  }

  updated() {
    const input = document.querySelector("#tonic--input_new-todo")

    input.focus()
  }

  submit(e) {
    e.preventDefault()

    const input = document.querySelector("#tonic--input_new-todo")
    const value = input.value

    if (!input.value) {
      return
    }

    this.state.newTodoValue = ""
    this.state.todos = [
      ...this.state.todos,
      {
        title: value,
        done: false,
        id: `${value}-${this.state.todos.length}`,
      },
    ]

    this.reRender()

    input.focus()
  }

  change(e) {
    if (e.target.id.includes("new-todo")) {
      this.state.newTodoValue = e.target.value
    } else {
      const id = e.target.id
      const done = e.target.value
      this.state.todos.forEach((todo) => {
        if (todo.id !== id) return
        todo.done = done
      })
    }
    this.reRender()
  }

  render() {
    const { todos, newTodoValue } = this.state

    return this.html`
      <div id="todo-app" class="${css`
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: center;
        height: 100vh;
      `}">
        <div class="${css`
          width: 24rem;
        `}">
          <h1>Todos</h1>
          <div class="${css`
            display: none;
          `}">
            <tonic-sprite></tonic-sprite>
          </div>
          <todo-list>
            ${todos.map(
              (todo, index) =>
                this.html`
                  <todo-item
                    id="${todo.id}"
                    title="${todo.title}"
                    done="${todo.done}"
                  ></todo-item>`
            )}
          </todo-list>
          <form>
            <div class="${css`
              margin: 1rem 0;
            `}">
              <tonic-input value="${newTodoValue}" id="new-todo"></tonic-input>
            </div>
            <tonic-button type="submit">Add todo</tonic-button>
          </form>
        </div>
      </div>
    `
  }
}

export default TodoApp
