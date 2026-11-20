import { EmConstrucao } from "@/components/em-construcao";
import { PageHeader } from "@/components/page-header";

export default function PessoasPage() {
  return (
    <>
      <PageHeader titulo="Pessoas" descricao="Locatários e fiadores (avalistas)" />
      <EmConstrucao mensagem="Cadastro de locatários e fiadores — próximo passo depois do modelo de dados." />
    </>
  );
}
