// app/dashboard/page.js
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function DashboardPage() {
  const { userId } = auth();

  // Redirect to sign-in page if the user is not authenticated
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