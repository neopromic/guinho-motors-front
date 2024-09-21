import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Button } from '../ui/button'
import { CircleDashed, Fuel } from 'lucide-react'

export interface IVehicleProps {
  id: number
  name: string
  price?: string
  vehicleType?: 'Sport' | 'SUV'
  imageURl: string
  fuel: string
  carMode: 'Manual' | 'Automático'
}

export const VehicleCard = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id,
  name,
  price,
  vehicleType,
  imageURl,
  fuel,
  carMode,
}: IVehicleProps) => {
  return (
    <Card className="w-lg rounded-[0.88rem] hover:shadow-lg">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{vehicleType}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={imageURl}
          alt={name + price}
          width={10000}
          height={10000}
          className="h-64 w-full bg-cover"
        />
        <div className="flex gap-4">
          <div className="flex gap-2 text-muted-foreground">
            <Fuel />
            <p>{fuel}</p>
          </div>
          <div className="flex gap-2 text-muted-foreground">
            <CircleDashed />
            <p>{carMode}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="grid grid-cols-2 gap-4">
        <p className="font-mono font-bold">{price}</p>
        <Button className="bg-primary hover:border hover:border-primary hover:bg-background hover:text-primary hover:transition-all hover:duration-100 hover:animate-in">
          Comprar
        </Button>
      </CardFooter>
    </Card>
  )
}
