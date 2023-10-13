import { useForm } from 'react-hook-form';

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

function useFormAdd(defaultSchema:any, formSchema:any, callBackOnSubmit:any) {
      // 1. Define your form.
      const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: defaultSchema,
         mode: "onBlur"
    })


    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        callBackOnSubmit(values);
    }

  return {
    form,
    onSubmit
  };
}

export default useFormAdd;