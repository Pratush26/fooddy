"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function LogoutButton() {
  const router = useRouter();

  const logout = async () => {
    try {
      const res = await fetch("/api/logout", {
        method: "POST",
        credentials: "include"
      });

      if (!res.ok) throw new Error();

      toast.success("Logged out");
      router.push("/login");
      router.refresh();
    } catch {
      toast.error("Logout failed");
    }
  };

  return (
    <button onClick={logout} className="btn btn-primary w-full trns rounded-md">Log out</button>
  );
}