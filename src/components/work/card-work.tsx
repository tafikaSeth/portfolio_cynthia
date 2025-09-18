import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { CardText } from "@/types"

export function CardWork({ oraganisation, title, description, background }: CardText) {
  return (
    <Card className={`w-full max-w-lg flex justify-center backdrop-blur-xs bg-white/10 ${background ? background : 'bg-white/30'}`}>
      <CardHeader>
        <CardTitle className="text-xl md:text-xl font-bold text-white">
          {title}
        </CardTitle>
        <CardTitle className="text-xs text-white">
          {oraganisation}
        </CardTitle>
        <CardDescription className="sansation-regular text-white/50">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
    </Card>
  )
}
