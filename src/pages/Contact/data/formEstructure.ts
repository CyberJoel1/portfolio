import { InputsClassification } from "../models/inputsClassification";
import { inputModel } from "../models/inputModel";
import * as z from "zod"

enum FormFieldKeys {
    EmailUser = 'emailUser',
    TextAreaUser = 'textAreaUser',
}

export const FORM_ESTRUCTURE:inputModel[] = [
    {
        key: FormFieldKeys.EmailUser,
        label:'Email',
        description:`Ingresa tu email.`,
        type: InputsClassification.INPUT_EMAIL
        
    },
    {
        key: FormFieldKeys.TextAreaUser,
        label:'Description',
        description:`Escribe una descripción.`,
        type: InputsClassification.TEXT_AREA
    }
]

export const formSchema = z.object({
    //esquema para colocar restricciones
    [FormFieldKeys.EmailUser]: z.string().email({ message: 'El formato del email no es correcto' }),
    [FormFieldKeys.TextAreaUser]: z.string().min(2, {
        message: "La descripción debe tener al menos 2 caracteres.",
    }),
})

export const defaultSchema = {
    //valores por defecto
    [FormFieldKeys.EmailUser]: "",
    [FormFieldKeys.TextAreaUser]: "",
}