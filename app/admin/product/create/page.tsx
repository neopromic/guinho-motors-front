import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Sparkles } from 'lucide-react'

export default function Page() {
  return (
    <main className="snap-y snap-mandatory">
      <section className="flex flex-col items-center justify-center space-y-4 px-4 pt-12">
        <h1 className="pointer-events-none max-w-xl select-none text-center text-4xl font-bold tracking-tighter lg:text-6xl">
          Crie, gerencie, e delete os produtos do estoque.
        </h1>
        <p className="text-center text-muted-foreground">
          Crie os produtos de forma rápida, fácil e intuitiva!
        </p>
      </section>
      <section className="flex items-center justify-center px-4 py-12">
        <Card className="max-w-xl">
          <CardHeader>
            <CardTitle>Digite os dados do produto</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col space-y-4">
            <Input
              type="text"
              placeholder="Nome do produto (Exemplo: Lamborghini X)"
            />
            <Input type="text" placeholder="Quilômetros rodados" />
            <Input type="text" placeholder="URL da imagem frontal do carro" />
            <Input
              type="text"
              placeholder="URL da imagem da traseira do carro"
            />
            <Input
              type="text"
              placeholder="URL da imagem do interior do carro"
            />
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Automático</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Manual</Label>
              </div>
            </RadioGroup>
          </CardContent>
          <CardFooter>
            <Button className="w-full gap-2" variant={'red'}>
              <Sparkles size={18} />
              Criar
            </Button>
          </CardFooter>
        </Card>
      </section>
    </main>
  )
}
