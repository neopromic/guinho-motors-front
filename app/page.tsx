import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { VehicleCard, type IVehicleProps } from '@/components/VehicleCard'
import { Flame, Search } from 'lucide-react'
import Image from 'next/image'
import './app.css'

export default function Home() {
  const cars: IVehicleProps[] = [
    {
      id: 0,
      name: 'Nissan GT-R',
      vehicleType: 'Sport',
      price: 'R$ 215.900,00',
      imageURl: '/banner_car.png',
      fuel: '80L',
      carMode: 'Automático',
    },
    {
      id: 1,
      name: 'Toyota Hilux Srx 2.8',
      vehicleType: 'SUV',
      price: 'R$ 215.900,00',
      imageURl: '/banner_car.png',
      fuel: '80L',
      carMode: 'Manual',
    },
    {
      id: 1,
      name: 'Toyota Hilux Srx 2.8',
      vehicleType: 'SUV',
      price: 'R$ 215.900,00',
      imageURl: '/banner_car.png',
      fuel: '80L',
      carMode: 'Manual',
    },
    {
      id: 0,
      name: 'Nissan GT-R',
      vehicleType: 'Sport',
      price: 'R$ 215.900,00',
      imageURl: '/banner_car_2.png',
      fuel: '80L',
      carMode: 'Automático',
    },
  ]

  return (
    <main className="h-full scroll-smooth bg-muted">
      <div className="bg-muted px-4">
        <Card className="mt-4 flex flex-col items-center justify-between gap-2 overflow-hidden rounded-[0.88rem] bg-gradient-to-r from-primary via-red-700 to-red-800 px-4 py-6 text-white shadow-md transition-all hover:shadow-lg lg:min-h-64 lg:flex-row">
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
          <CardContent className="relative hidden flex-col items-center space-y-2 md:flex lg:flex">
            <Image
              src={'/logo.png'}
              alt="Guinho Motors"
              width={1000}
              height={1000}
              className="h-64 w-full bg-cover object-cover"
            />
            <p className="font-regular absolute bottom-16 max-w-md text-center text-sm tracking-wide">
              R. Agenor Domingues de Siqueira, 114 - km 18, Osasco - SP,
              06190-090
            </p>
          </CardContent>
        </Card>
      </div>
      <section className="my-4 w-full px-4">
        <div className="rounded-[0.88rem] bg-white p-4">
          <div className="flex items-center gap-3">
            <div className="size-2 rounded-full bg-primary ring ring-indigo-300" />
            <h1 className="font-medium">Encontre o veículo dos seus sonhos</h1>
          </div>
          <div className="my-4 grid grid-cols-4 place-content-center place-items-center gap-2">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Marca" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="mercedez">Mercedez</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Modelo" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="model">GLA-250</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Ano" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="year">2012</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button className="max-w-fit">
              <Search />
            </Button>
          </div>
        </div>
      </section>
      <div className="flex w-full gap-2 p-4 text-muted-foreground">
        <Flame />
        <h1>Mais comprados</h1>
      </div>
      <section className="grid grid-cols-1 place-items-center items-center gap-4 px-4 md:grid-cols-2 lg:grid-cols-2">
        {cars.map(c => (
          <VehicleCard
            key={c.id}
            name={c.name}
            id={0}
            imageURl={c.imageURl}
            price={c.price}
            vehicleType={c.vehicleType}
            fuel={c.fuel}
            carMode={c.carMode}
          />
        ))}
      </section>
      <section className="mt-4 max-h-64 w-full border-b bg-background p-4">
        <h1 className="text-3xl font-bold uppercase tracking-wider text-primary">
          Guinho Motors
        </h1>
        <p className="text-sm text-muted-foreground">
          Our vision is to provide convenience and help increase your sales
          business.
        </p>
        <div className="my-4 h-1 w-full bg-muted" />
        <p className="text-sm text-muted-foreground">©2024 GUINHO MOTORS</p>
      </section>
    </main>
  )
}
