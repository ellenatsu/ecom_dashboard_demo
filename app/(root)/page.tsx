import { UserButton } from "@clerk/nextjs";

const RootPage = () => {
  return (
    <div className="p-4">
      This is the root page
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default RootPage;
