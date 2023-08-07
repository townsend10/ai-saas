import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function DashBoardPage() {
  return (
    <div>
      <p>DashBoardPage</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
