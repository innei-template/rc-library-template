import type { MDXComponents } from "mdx/types"
import { getHighlighter } from "shiki"

const highlighter = await getHighlighter({
  themes: ["github-dark"],
  langs: ["javascript", "typescript", "json", "jsx", "tsx", "shell"],
})

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: (props) => {
      const language =
        (props.children as any).props.className?.replace(/language-/, "") ||
        "text"

      const rawCode = (props.children as any).props.children
      return (
        <div
          dangerouslySetInnerHTML={{
            __html: highlighter.codeToHtml(rawCode, {
              lang: language,
              theme: "github-dark",
            }),
          }}
        ></div>
      )
    },
  }
}
