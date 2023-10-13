import { IBuilderInput, InputProps } from "./IbuilderInput";
import { FC } from "react";

export abstract class EntityInput implements IBuilderInput{
    
    createForm(input: InputProps) {
       if(!input) return;
        return this.construir(input);
    }

    abstract construir(input: InputProps): React.ReactNode;
}