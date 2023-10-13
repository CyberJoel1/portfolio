import { DAOAccessImpl } from "./DaoAccessImpl";

export class SingletonConstructorInput {

    private static instance: SingletonConstructorInput | null = null;
    private daoAccessImpl: DAOAccessImpl;

    private constructor() {
        this.daoAccessImpl = new DAOAccessImpl();
    }

    public static getInstance(): SingletonConstructorInput {
        if (!SingletonConstructorInput.instance) {
            SingletonConstructorInput.instance = new SingletonConstructorInput();
        }
        return SingletonConstructorInput.instance;
    }

    public getInputEmail = () =>
        SingletonConstructorInput.getInstance().daoAccessImpl.getInputEmail();

    public getInputTextArea = () =>
        SingletonConstructorInput.getInstance().daoAccessImpl.getInputTextArea();

}