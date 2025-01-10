"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  whatsappNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
    message: "Please enter a valid WhatsApp number.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  courseId: z.string({
    required_error: "Please select a course.",
  }),
  slotId: z.string({
    required_error: "Please select a slot.",
  }),
  preferredDateTime: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Please select a valid date and time.",
  }),
})

export default function Page() {
  const [isLoading, setIsLoading] = React.useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      whatsappNumber: "",
      email: "",
      preferredDateTime: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      const response = await fetch('/api/send-confirmation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error('Failed to send confirmation email')
      }

      // Show success message to the user
      alert('Registration successful! Check your email for confirmation.')
      form.reset() // Reset the form after successful submission
    } catch (error) {
      console.error('Error:', error)
      toast({
        title: 'Error',
        description: 'Failed to submit the form. Please try again later.',
      })
    } finally {
      setIsLoading(false)
      toast({
        title: 'Success',
        description: `Registration successful! Check your email for confirmation and our team will contact you at ${values.preferredDateTime}.` 
      })
    }
  }

  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
      <Card className="relative bg-white p-8 rounded-lg shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:transform hover:-translate-y-1 w-full md:min-w-[400px]">
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="NAME"
                        {...field}
                        className="border-2 rounded-lg p-3 w-full transition-all duration-200 
                              focus:ring-2 focus:ring-cyan-400 focus:border-transparent
                              hover:border-cyan-300 transform hover:-translate-y-0.5
                              bg-gray-50 hover:bg-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="whatsappNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="WhatsApp No."
                        {...field}
                        className="border-2 rounded-lg p-3 w-full transition-all duration-200 
                              focus:ring-2 focus:ring-cyan-400 focus:border-transparent
                              hover:border-cyan-300 transform hover:-translate-y-0.5
                              bg-gray-50 hover:bg-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Email ID"
                        {...field}
                        className="border-2 rounded-lg p-3 w-full transition-all duration-200 
                              focus:ring-2 focus:ring-cyan-400 focus:border-transparent
                              hover:border-cyan-300 transform hover:-translate-y-0.5
                              bg-gray-50 hover:bg-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="courseId"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger
                          className="border-2 rounded-lg p-3 w-full transition-all duration-200 
                                focus:ring-2 focus:ring-cyan-400 focus:border-transparent
                                hover:border-cyan-300 transform hover:-translate-y-0.5
                                bg-gray-50 hover:bg-white"
                        >
                          <SelectValue placeholder="Course Preferred" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1">3D Animation</SelectItem>
                        <SelectItem value="2">Short Film Making</SelectItem>
                        <SelectItem value="3">Digital Photography</SelectItem>
                        <SelectItem value="4">Editing Techniques</SelectItem>
                        <SelectItem value="5">Social Media Design</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="slotId"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger
                          className="border-2 rounded-lg p-3 w-full transition-all duration-200 
                                focus:ring-2 focus:ring-cyan-400 focus:border-transparent
                                hover:border-cyan-300 transform hover:-translate-y-0.5
                                bg-gray-50 hover:bg-white"
                        >
                          <SelectValue placeholder="Slot Preferred" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1">Morning Slot</SelectItem>
                        <SelectItem value="2">Evening Slot</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="preferredDateTime"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="datetime-local"
                        required
                        className="border-2 rounded-lg p-3 w-full transition-all duration-200 
                              focus:ring-2 focus:ring-cyan-400 focus:border-transparent
                              hover:border-cyan-300 transform hover:-translate-y-0.5
                              bg-gray-50 hover:bg-white"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-cyan-400 hover:bg-cyan-500 text-white p-6 rounded-lg
                      transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg
                      active:translate-y-0 active:shadow-md
                      disabled:opacity-50 disabled:cursor-not-allowed
                      before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyan-400 before:to-cyan-300
                      before:opacity-0 hover:before:opacity-100 before:transition-opacity relative overflow-hidden"
              >
                <span className="relative">
                  {isLoading ? 'Submitting...' : 'Submit'}
                </span>
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

