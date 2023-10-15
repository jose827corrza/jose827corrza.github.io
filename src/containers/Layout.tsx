import { ReactNode } from "react"

interface Props {
    children? : ReactNode
}

export const Layout = ({children}: Props) => {
    return (
      <div className='w-full h-screen bg-gray-100 pt-8 px-2'>
          {children}
      </div>
    )
  }