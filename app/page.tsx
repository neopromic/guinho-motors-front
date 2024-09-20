import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

export default function Home() {
  return (
    <main className="h-[calc(100vh-3rem)] overflow-hidden scroll-smooth bg-muted p-4">
      <Card className="flex flex-col items-center justify-between gap-2 overflow-hidden rounded-[0.88rem] bg-gradient-to-r from-primary via-red-700 to-red-800 px-4 py-6 text-white shadow-md hover:shadow-lg lg:min-h-64 lg:flex-row">
        <CardHeader className="flex flex-col space-y-4">
          <h1 className="max-w-md text-4xl font-semibold leading-none tracking-tight">
            Melhor plataforma para encontrar o carro dos seus sonhos
          </h1>
          <p className="font-regular text-sm text-primary-foreground/90">
            E baixo custo.
          </p>
          <Button className="w-fit bg-red-900 hover:bg-red-950">
            Ver carros
          </Button>
        </CardHeader>
        <CardContent className="hidden flex-col items-center space-y-2 md:flex lg:flex">
          <p className="text-5xl font-bold uppercase tracking-wide">
            Guinho Motors
          </p>
          <p className="font-regular max-w-md text-sm tracking-wide">
            R. Agenor Domingues de Siqueira, 114 - km 18, Osasco - SP, 06190-090
          </p>
        </CardContent>
      </Card>
      <section className="my-4 px-12">
        <div className="rounded-[0.88rem] bg-white p-4">
          <div className="flex items-center gap-3">
            <div className="size-2 rounded-full bg-primary ring ring-indigo-300" />
            <h1 className="font-medium">Encontre o veículo dos seus sonhos</h1>
          </div>
        </div>
      </section>
    </main>
  )
}
