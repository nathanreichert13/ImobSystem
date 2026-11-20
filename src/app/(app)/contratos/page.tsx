import { EmConstrucao } from "@/components/em-construcao";
import { PageHeader } from "@/components/page-header";

export default function ContratosPage() {
  return (
    <>
      <PageHeader
        titulo="Contratos"
        descricao="Contratos de locação com caução ou fiador, gerados a partir dos modelos"
      />
      <EmConstrucao mensagem="Contratos e geração do .docx — vêm depois dos cadastros." />
    </>
  );
}
