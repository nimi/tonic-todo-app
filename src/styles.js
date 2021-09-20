const GlobalStylesSet = new Set()

export const GlobalStyles = () => {
  return `
    ${Array.from(GlobalStylesSet).join("\n")}
  `
}

const replacements = {
  ":": "-",
  "%": "pc",
  " ": "-",
  ".": "-",
}

export const css = (rules) => {
  const ruleList = rules
    .map((rule) =>
      rule
        .replace(/\:\s/g, ":")
        .replace(/\n/g, "")
        .replace(/\s{2,}/g, "")
    )
    .join("")
    .split(";")
    .filter(Boolean)

  ruleList.forEach((ruleKey) => {
    const className = ruleKey
      .replace(":", replacements[":"])
      .replace("%", replacements["%"])
      .replace(" ", replacements[" "])
      .replace(".", replacements["."])
    const cssRule = `.${className} { ${ruleKey}; }`

    GlobalStylesSet.add(cssRule)
  })

  let classNames = ruleList.filter(Boolean)

  return classNames
    .join("_$")
    .replaceAll(":", replacements[":"])
    .replaceAll("%", replacements["%"])
    .replaceAll(" ", replacements[" "])
    .replaceAll(".", replacements["."])
    .replaceAll("_$", " ")
}
