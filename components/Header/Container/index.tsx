import { LogoSection } from '../LogoSection'

export const ContainerLayout = () => {
  return (
    <header className="sticky inset-0 flex w-full items-center justify-between border-b bg-transparent px-4 py-6 backdrop-blur-md">
      <LogoSection />
    </header>
  )
}
