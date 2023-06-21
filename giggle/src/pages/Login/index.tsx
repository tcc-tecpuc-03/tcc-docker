import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 py-2 lg:py-10">
      <div className="p-6 bg-white rounded shadow-md w-full sm:w-4/5 md:w-3/5 lg:w-1/3">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-gray-700 font-titillium">
          Acesse a plataforma
        </h1>
        <p className="text-sm sm:text-base md:text-lg mb-5 text-gray-500 font-inter">
          Faça login para ter acesso a todos os dados de compras do seu mercado.
        </p>
        <div className="mb-4">
          <p className="mb-2 text-gray-700 font-inter">Email</p>
          <Input
            className="p-2 rounded border shadow-sm w-full"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <p className="mb-2 flex justify-between items-center text-gray-700">
            <span className="font-inter">Senha</span>
            <a href="#" className="text-[#7C3AED] text-sm hover:underline">
              Esqueci minha senha
            </a>
          </p>
          <Input
            isPassword
            className="p-2 rounded border shadow-sm w-full"
            placeholder="Senha"
          />
        </div>
        <Button
          buttonProps={{
            style: { width: "100%" },
            onClick: () => console.log("clicou"),
          }}
        >
          Entrar
        </Button>
      </div>
    </div>
  );
}
