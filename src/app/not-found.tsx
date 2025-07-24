import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bk3 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-bold text-black">404</h1>
        <h2 className="text-2xl font-semibold text-black mt-4">Página não encontrada</h2>
        <p className="text-black mt-2">
          A página que você está procurando não existe ou foi removida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center mt-6 px-4 py-2 bg-blue-600 text-black rounded-xl hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para a Home
        </Link>
      </div>
    </div>
  );
}
