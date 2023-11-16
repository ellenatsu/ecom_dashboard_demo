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
      <h1>Dashboard</h1>
      <p>Store: {store?.name}</p>
    </>
  );
};

export default DashboardPage;
