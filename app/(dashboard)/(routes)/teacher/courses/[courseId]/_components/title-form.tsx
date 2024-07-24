"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod"

 

interface TitleFormProps {
  initialData: {
    title: string
  },
  courseId: string
};

const formSchema = z.object({
  title: z.string().min(1, {
    message: 'Title is required'
  }),
});

export const TitleForm = ({ initialData, courseId }: TitleFormProps) => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData
  });

  const { isSubmitting, isValid } = form.formState;


  return (
    <div>Title Form</div>
  )
}