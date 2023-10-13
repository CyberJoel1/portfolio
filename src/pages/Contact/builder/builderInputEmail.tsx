"use client"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { InputProps } from "./IbuilderInput";
import { Input } from "@/components/ui/input";
import { EntityInput } from "./abstractDao";

export class BuilderInputEmail  extends EntityInput{
  construir: React.FC<InputProps> = ({key, label, description, configurations: {  form } }) => {
    
    return (
      <FormField
        control={form.control}
        name={key}
        
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input placeholder="email@domain.com" {...field} />
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