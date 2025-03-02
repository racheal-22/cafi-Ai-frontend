import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function DashboardPage() {
  const { userId } = auth();

  if (!userId) {
    redirect("/signin");
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <p className="text-lg">Welcome to your dashboard! You are signed in.</p>
    </div>
  );
}