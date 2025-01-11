import Container from "@/components/container";
import PageContainer from "@/components/page-container";
import { useClient } from "@/contexts/client-context";

export default function Home() {
  const { client } = useClient();
  return (
    <PageContainer className="flex items-center justify-center">
      <Container>shadh</Container>
      {client && <Container>{client._id}</Container>}
    </PageContainer>
  );
}
