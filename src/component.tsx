import type { PropsWithChildren } from 'react'

export const Button = ({ children }: PropsWithChildren) => (
  <div className="cursor-pointer rounded-md bg-slate-100 p-2 dark:bg-neutral-900">
    {children}
  </div>
)
