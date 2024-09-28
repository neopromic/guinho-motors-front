import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Page() {
  return (
    <main>
      <section className="px-4 pt-12 flex flex-col space-y-4">
        <h1 className="text-6xl font-bold max-w-xl tracking-tighter">
          Crie, gerencie, e delete os produtos do estoque.
        </h1>
        <p className="text-muted-foreground">
          Crie os produtos de forma rápida, fácil e intuitiva!
        </p>
      </section>
      <section className="px-4 py-12">
        <Card>
          <CardHeader>
            <CardTitle>Digite os dados do produto</CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </section>
    </main>
  )
}
