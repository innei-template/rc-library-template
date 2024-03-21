/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */

import type { PropsWithChildren } from "react"

export default ({ children }: PropsWithChildren) => (
  <>
    <div className="prose dark:prose-invert">{children}</div>
  </>
)
