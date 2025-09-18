import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "../ui/textarea"
import type { ContactFormData } from "@/types"
import { sendEmail } from "@/services/emailJs"
import { toast } from "sonner"

export function CardContact() {

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>()
  const onSubmit = async (data: ContactFormData) => {
    try {
      await sendEmail(data);
      toast.success("Message envoyé avec succès 🎉");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Échec de l’envoi 😢");
    }
  };

  return (
    <>
      <Card className="w-full max-w-lg backdrop-blur-xl bg-white/10">
        <CardHeader>
          <CardTitle className="sansation-bold text-neutral-50">Send me your message</CardTitle>
          <CardDescription className="sansation-regular text-neutral-50">
            Please enter your email address below
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2 sansation-bold">
                <Label htmlFor="from_name" className="text-neutral-50">Name</Label>
                <Input
                  id="from_name"
                  type="text"
                  placeholder="Cynthia Rakotoharinomena"
                  className="bg-transparent border-neutral-200 text-white focus-visible:ring-0 focus-visible:outline-none"
                  {...register('from_name', { required: 'Nom obligatoire' })}
                  />

                {errors.from_name && <p className="text-red-500 font-light">{errors.from_name.message}</p>}
              </div>
              <div className="grid gap-2 sansation-bold">
                <Label htmlFor="email" className="text-neutral-50">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ex: iam@example.com"
                  className="bg-transparent border-neutral-200 text-white focus-visible:ring-0 focus-visible:outline-none"
                  {...register('email', { required: 'Email obligatoire' })}
                  
                  />
                {errors.email && <p className="text-red-500 font-light">{errors.email.message}</p>}
              </div>
              <div className="grid gap-2 sansation-bold">
                <div className="flex items-center sansation-bold">
                  <Label htmlFor="message" className="text-neutral-50">Message</Label>
                </div>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="resize-none bg-transparent border-neutral-200 text-white focus-visible:ring-0 focus-visible:outline-none"
                  {...register('message', { required: 'Message obligatoire' })}
                />
                {errors.message && <p className="text-red-500 font-light">{errors.message.message}</p>}
              </div>
              <CardFooter className="flex-col gap-2">
                <Button variant="outline" type="submit" className="w-full sansation-bold text-neutral-50 bg-pink-30 hover:none cursor-pointer" disabled={isSubmitting} aria-label="Button envoie de message">
                  {
                    isSubmitting && (
                      <span className="w-4 h-4 border-2 border-foreground border-t-transparent rounded-full animate-spin"></span>
                    )}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </CardFooter>
            </div>
          </CardContent>
        </form>
      </Card>

    </>
  )
}
