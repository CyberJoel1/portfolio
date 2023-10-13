

import { EntityInput } from '../builder/abstractDao';
import { SingletonConstructorInput } from '../builder/singletonConstructorInput';
import { InputsClassification } from "../models/inputsClassification";

const instance = SingletonConstructorInput.getInstance();

type ConvertInput = {
    [input in InputsClassification]: EntityInput;
};

export const convertInput: ConvertInput = {
    [InputsClassification.INPUT_EMAIL]: instance.getInputEmail(),
    [InputsClassification.TEXT_AREA]: instance.getInputTextArea(),
};