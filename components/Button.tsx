import type { ButtonHTMLAttributes, ReactNode, RefObject } from 'react'
import Loader from './Loader'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  ref?:
    | RefObject<HTMLButtonElement>
    | ((element: Element | null | undefined) => () => void)
    | undefined
  children?: ReactNode
  loading?: boolean
}

export default function Button({
  loading,
  children,
  className = '',
  ...restProps
}: Props) {
  return (
    <button
      {...restProps}
      className={`relative inline-flex h-12 min-w-[64px] items-center justify-center gap-2 rounded-[12px] bg-[#FFBC00] px-5 text-[15px] font-bold whitespace-nowrap text-[#1A1A1A] transition hover:bg-[#FFCC00] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 ${className}`}>
      {loading ? <Loader /> : children}
    </button>
  )
}
