import { css } from "./styles.js"

function TodoList() {
  return this.html`
    <ul class="${css`
      list-style-type: none;
      padding: 0;
      margin: 0;
    `}">
      ${this.children}
    </ul>
  `
}

export default TodoList
