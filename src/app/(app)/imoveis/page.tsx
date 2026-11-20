import { EmConstrucao } from "@/components/em-construcao";
import { PageHeader } from "@/components/page-header";

export default function ImoveisPage() {
  return (
    <>
      <PageHeader
        titulo="Imóveis"
        descricao="Endereço, descrição e mobília de cada imóvel — vai direto para o contrato"
      />
      <EmConstrucao mensagem="Cadastro de imóveis — próximo passo depois do modelo de dados." />
    </>
  );
}
