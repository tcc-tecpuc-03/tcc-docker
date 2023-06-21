import { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { UploadImage } from "../../components/Upload";
import { Item } from "../CartItems/components/item";
import { useForm, Controller } from "react-hook-form";

export default function CreateItem() {
  const [file, setFile] = useState<File | null>(null);

  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);  
  };

  return (
    <>
      <div className="grid place-items-center min-h-screen bg-gray-200 py-2 lg:py-10">
        <form
          className="p-6 bg-white rounded shadow-md w-full sm:w-4/5 md:w-3/5 lg:w-1/3 grid gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-gray-700 font-titillium">
            Adicione um novo item
          </h1>

          <div>
            <Controller
              control={control}
              name="rfid"
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  {...field}
                  className="p-2 rounded border shadow-sm w-full"
                  placeholder="RFID"
                />
              )}
            />
            {errors.rfid && <span className="text-red-500">Campo obrigatório</span>}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Controller
                control={control}
                name="nome"
                rules={{ required: true }}
                render={({ field }) => (
                  <Input
                    {...field}
                    className="p-2 rounded border shadow-sm w-full"
                    placeholder="Nome"
                  />
                )}
              />
              {errors.nome && <span className="text-red-500">Campo obrigatório</span>}
            </div>
            <div>
              <Controller
                control={control}
                name="preco"
                rules={{ required: true, pattern: /^[0-9]+(\.[0-9]{1,2})?$/ }}
                render={({ field }) => (
                  <Input
                    {...field}
                    className="p-2 rounded border shadow-sm w-full"
                    placeholder="Preço"
                  />
                )}
              />
              {errors.preco?.type === "required" && <span className="text-red-500">Campo obrigatório</span>}
              {errors.preco?.type === "pattern" && <span className="text-red-500">Formato inválido</span>}
            </div>
          </div>
          <UploadImage onUpload={(file) => setFile(file)} />
          {file && (
            <Item
              data={[
                {
                  id: 1,
                  name: "Item exemplo",
                  price: 10.99,
                  quantity: 1,
                  image: URL.createObjectURL(file),
                },
              ]}
            />
          )}

          <Button
            buttonProps={{
              style: { width: "100%" },
              type: "submit",
            }}
          >
            Cadastrar item
          </Button>
        </form>
      </div>
    </>
  );
}
