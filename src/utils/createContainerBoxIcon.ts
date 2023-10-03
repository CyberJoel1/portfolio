'use client'
import useCustomImportSvg from "@/hooks/useCustomImportSvg";
import { TypesSvgIcons } from "@/config/icons/enums/typesSvgIcons";

export const createContainerBoxIcon = (icons: TypesSvgIcons[]): BoxIcon[] => {
    const resultArray: BoxIcon[] = [];

    icons.forEach((icon) => {
        const objectImportedSvg = useCustomImportSvg(icon);
        const {descriptionSvg, importedSvg} = objectImportedSvg;
        const objectTool: BoxIcon = { image: importedSvg, textDescription: descriptionSvg }
        resultArray.push(objectTool);
    });
    
    return resultArray;
}