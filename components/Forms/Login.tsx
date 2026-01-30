"use client"
import { useForm } from "react-hook-form"
import '@/utils/styles/form.css'
import { useRouter } from "next/navigation"
import { toast } from "sonner"

interface userInfo {
  email: string;
  password: string;
}
export default function LoginForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<userInfo>()
  const router = useRouter()
  const formSubmit = async (data: userInfo) => {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        toast.warning(json?.message || "Invalid email or password");
        return;
      } else {
        reset()
        toast.success("Welcome back!");
        router.push("/dashboard");
        router.refresh();
      }
    } catch (err) {
      console.error(err)
      toast.error("Something went wrong!")
    }
  };
  return (
    <form onSubmit={handleSubmit(formSubmit)} className="flex flex-col items-center justify-center gap-2 w-full">
      <div className="w-full">
        {errors.email ? <p className="text-sm text-rose-600">{errors.email.message as string}</p> : <label htmlFor="email">Email :</label>}
        <input type="email" {...register("email", { required: "Email is required" })} placeholder="Enter your email" id="email" />
      </div>
      <div className="w-full">
        {errors.password ? <p className="text-sm text-rose-600">{errors.password.message as string}</p> : <label htmlFor="password">password :</label>}
        <input type="password" {...register("password", { required: "Password is required" })} minLength={8} placeholder="Enter password" id="password" />
      </div>
      <button disabled={isSubmitting} className={`btn trns btn-primary mt-3 rounded-md`}>{isSubmitting ? "Loging in..." : "Login"}</button>
    </form>
  )
}