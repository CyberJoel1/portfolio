import { ReactNode } from "react";
import { FC } from "react";

type FormValues = {
  [key: string]: string;
};

interface ConfigurationsInput {
  form: UseFormReturn<FormValues, any, undefined>;
}

type InputProps = Omit<inputsType, "type"> & {
  configurations: ConfigurationsInput;
};

interface IBuilderInput {
    construir: React.FC<InputProps>;
}


  
