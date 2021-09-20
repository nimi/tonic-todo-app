import Tonic from "../web_modules/@optoolco/tonic.js"

import { css, GlobalStyles } from "./styles.js"

class TodoApp extends Tonic {
  static stylesheet() {
    return GlobalStyles()
  }

  render() {
    return this.html`
      <div class="${css`
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
            <todo-item></todo-item>
            <todo-item></todo-item>
            <todo-item></todo-item>
          </todo-list>
          <tonic-form></tonic-form>
          <div class="${css`
            margin: 1rem 0;
          `}">
            <tonic-input id="add-todo"></tonic-input>
          </div>
          <tonic-button>Add todo</tonic-button>
        </div>
      </div>
    `
  }
}

export default TodoApp
