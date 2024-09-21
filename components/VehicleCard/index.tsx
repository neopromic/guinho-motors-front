import { Card, CardHeader, CardTitle } from '../ui/card'

export interface IVehicleProps {
  id?: number
  name: string
  price?: string
  vehicleType?: 'Sport' | 'SUV'
}

export const VehicleCard = ({
  id,
  name,
  pricing,
  vehicleType,
}: IVehicleProps) => {
  return (
    <Card className="rounded-[0.88rem]">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
    </Card>
  )
}
