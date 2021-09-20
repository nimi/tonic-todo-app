import { css } from "./styles.js"

function TodoItem() {
  const { title = "Todo", done = false, id } = this.props

  return this.html`
    <li>
      <div class="${css`
        align-items: center;
        display: flex;
        margin: 16px 0;
      `}"
        style="${done ? "text-decoration: line-through;" : ""}"
      >
        <tonic-checkbox
          value="${done}"
          class="${css`
            margin-top: -0.5rem;
            margin-left: -0.5rem;
          `}" id="${id}">
        </tonic-checkbox> ${title}
      </div>
    </li>
  `
}

export default TodoItem
