import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  const storeId = params.storeId;

  const { userId } = auth();

  if(!userId){
    redirect('/sign-in');
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: storeId,
      userId: userId,
    },
  }); 

  if(!store){
    redirect('/');
  }

  return (
    <>
      <div>Navbar placeholder</div>
      {children}
    </>
  )
}
