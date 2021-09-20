import { css } from "./styles.js"

function TodoItem() {
  const { title = "Todo", done = false } = this.props

  return this.html`
    <li>
      <div class="${css`
        align-items: center;
        display: flex;
        margin: 16px 0;
      `}">
        <tonic-checkbox class="${css`
          margin-top: -8px;
        `}" id="todo"></tonic-checkbox> ${title}
      </div>
    </li>
  `
}

export default TodoItem
