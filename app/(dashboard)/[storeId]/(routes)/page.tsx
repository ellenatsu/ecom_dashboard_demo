import prismadb from "@/lib/prismadb";

interface DashboardPageProps {
  params: { storeId: string };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });
  return (
    <>
      <p>Store: {store?.name}</p>
    </>
  );
};

export default DashboardPage;
