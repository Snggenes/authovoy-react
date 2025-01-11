import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";
import { Input } from "../input";

type TFormInputProps = {
  form: any;
  name: string;
  placeholder: string;
  label: string;
  type?: string;
};

export default function FormInput({
  form,
  name,
  placeholder,
  label,
  type = "text",
}: TFormInputProps) {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input type={type} placeholder={placeholder} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
