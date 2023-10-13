"use client"
import React from 'react';



import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import ComponentInput from '../builder/componentInput';

import { InputsClassification } from '../models/inputsClassification';
import SeparatorComponent from '@/components/separator';
import { FORM_ESTRUCTURE, defaultSchema, formSchema } from '../data/formEstructure';
import { z } from 'zod';
import useFormAdd from '../hooks/useFormAdd';


interface Props {
    classNames: string;
}

const FormContact: React.FC<Props> = ({ classNames }) => {

    const { form, onSubmit } = useFormAdd(defaultSchema, formSchema, 
        (values: z.infer<typeof formSchema> /* valores de entrada del form */) => {
        //aqui logica despues subir form
        
        }
    );

    return (
        <div className={`${classNames}`}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">

                {FORM_ESTRUCTURE.map((item, index) => (
                            <ComponentInput
                                key={item.key}
                                input={{
                                    key: item.key,
                                    label: item.label,
                                    description: item.description,
                                    type: item.type
                                }}
                                configurations={{ form }}
                            />
                    ))}

                    <Button type="submit">Subir</Button>
                </form>
            </Form>
        </div>
    );
};

export default FormContact;