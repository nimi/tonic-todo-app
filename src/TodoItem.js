import { css } from "./styles.js"

function TodoItem() {
  const { title = "Todo", done = false, id } = this.props

  this.addEventListener("change", (e) => {
    const done = e.target.value

    this.reRender({
      ...this.props,
      done,
    })
  })

  return this.html`
    <li>
      <div class="${css`
        align-items: center;
        display: flex;
        margin: 16px 0;
      `}"
        style="${done ? "text-decoration: line-through;" : ""}"
      >
        <tonic-checkbox value="${done}" class="${css`
    margin-top: -0.5rem;
    margin-left: -0.5rem;
  `}" id="${id}"></tonic-checkbox> ${title}
      </div>
    </li>
  `
}

TodoItem.prototype.click = () => {
  console.log("clicked")
}

export default TodoItem
