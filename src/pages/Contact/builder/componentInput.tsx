import React from 'react';
import { convertInput } from '../adapter/adapterInput';
import { inputModel } from '../models/inputModel';
import { InputProps, ConfigurationsInput } from './IbuilderInput';
import SeparatorComponent from '@/components/separator';


interface Props {
  input: inputModel;
  configurations: ConfigurationsInput;
}

const ComponentInput: React.FC<Props> = ({ input, configurations }) => {

  const { key, label, type, description } = input;

  const inputForm = convertInput[type];

  const inputParameters: InputProps = {
    key,
    label,
    description,
    configurations
  }

  return (
    <div>
      {inputForm.createForm(inputParameters)}
      <SeparatorComponent />
    </div>
  );
};

export default ComponentInput;