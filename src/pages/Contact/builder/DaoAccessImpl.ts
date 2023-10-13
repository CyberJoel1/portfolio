
import { IDAOAcess } from "./IDAOACCES";
import { EntityInput } from "./abstractDao";
import { BuilderInputEmail } from "./builderInputEmail";
import { BuilderInputTextArea } from "./builderInputTextArea";

export class DAOAccessImpl implements IDAOAcess {
  private createInputEmail: EntityInput;
  private createInputTextArea: EntityInput;

  constructor() {
    this.createInputEmail = new BuilderInputEmail();
    this.createInputTextArea = new BuilderInputTextArea();
  }

  getInputEmail(): EntityInput {
    return this.createInputEmail;
  }

  getInputTextArea(): EntityInput {
    return this.createInputTextArea;
  }
}