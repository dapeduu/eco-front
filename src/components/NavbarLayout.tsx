import { ReactNode } from 'react'
import { Navbar } from './Navbar'

type NavbarLayoutProps = { children: ReactNode, withBackButton?: boolean }

export const NavbarLayout = ({ children, withBackButton }: NavbarLayoutProps) => {
  return (
    <div className="full-page-container flex flex-col">
      <Navbar showBackButton={withBackButton} />
      {children}
    </div>
  )
}
