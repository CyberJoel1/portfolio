import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { InputProps } from "./IbuilderInput";
import { Textarea } from "@/components/ui/textarea";
import { EntityInput } from "./abstractDao";

export class BuilderInputTextArea   extends EntityInput {

  construir: React.FC<InputProps> = ({ key, label, description, configurations: { form } }) => {
    return (
      <FormField defaultValue={''}
        control={form.control}
        name={key}
        
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Escriba una nota"
                className="resize-none"
                {...field}
              />
            </FormControl>
            <FormDescription>
              {description}
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  };


}