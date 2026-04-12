import { ArrowRight, Lock, Mail, MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { cn } from "@/libs/cn";

const schema = yup
  .object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(8, "At least 8 characters").required("Required"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Login Data:", data);
  };

  return (
    <article className="flex min-h-screen items-center justify-center p-6">
      <main className="w-full max-w-100 space-y-12">
        <Link
          to="/"
          className="btn btn-ghost group flex w-fit gap-3 border bg-transparent"
        >
          <MoveLeft className="transition-transform group-hover:-translate-x-2" />{" "}
          Back
        </Link>

        <header className="space-y-4">
          <h1 className="text-6xl leading-[0.8] font-black tracking-tighter uppercase md:text-7xl">
            Sign <br /> In
          </h1>
          <div className="h-2 w-16 bg-[#F4CE14]" />
          <p className="text-[10px] font-black tracking-[0.4em] text-[#495E57] uppercase opacity-60">
            Access your account
          </p>
        </header>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-8">
            <fieldset
              className={cn(
                "group relative border-b-2 transition-all",
                errors.email
                  ? "border-error"
                  : "border-black/10 focus-within:border-[#495E57]",
              )}
            >
              <label className="text-[10px] font-black tracking-[0.2em] text-[#495E57] uppercase">
                Email Address
              </label>
              <div className="flex items-center gap-4 py-2">
                <Mail size={16} className="opacity-30" />
                <input
                  {...register("email")}
                  type="email"
                  placeholder="YOU@EXAMPLE.COM"
                  className="w-full bg-transparent py-2 text-xs font-bold tracking-widest uppercase outline-none placeholder:opacity-20"
                />
              </div>
              {errors.email && (
                <span className="text-error absolute right-0 -bottom-5 text-[9px] font-black uppercase">
                  {errors.email.message}
                </span>
              )}
            </fieldset>

            <fieldset
              className={cn(
                "group relative border-b-2 transition-all",
                errors.password
                  ? "border-error"
                  : "border-black/10 focus-within:border-[#495E57]",
              )}
            >
              <label className="text-[10px] font-black tracking-[0.2em] text-[#495E57] uppercase">
                Password
              </label>
              <div className="flex items-center gap-4 py-2">
                <Lock size={16} className="opacity-30" />
                <input
                  {...register("password")}
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-transparent py-2 text-xs font-bold tracking-widest outline-none placeholder:opacity-20"
                />
              </div>
              {errors.password && (
                <span className="text-error absolute right-0 -bottom-5 text-[9px] font-black uppercase">
                  {errors.password.message}
                </span>
              )}
            </fieldset>
          </div>

          <div className="space-y-6 pt-8">
            <button
              type="submit"
              className="btn btn-primary btn-xl group w-full rounded-none text-[10px] font-black tracking-[0.4em] uppercase"
            >
              Initialize Login
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-2"
              />
            </button>

            <div className="flex items-center justify-between px-2">
              <Link
                to="#"
                className="text-[9px] font-black tracking-widest uppercase underline decoration-[#F4CE14] decoration-2 underline-offset-4 opacity-40 transition-opacity hover:opacity-100"
              >
                Forgot Password?
              </Link>
              <Link
                to="#"
                className="text-[9px] font-black tracking-widest uppercase opacity-40 transition-opacity hover:opacity-100"
              >
                Create Account
              </Link>
            </div>
          </div>
        </form>
      </main>
    </article>
  );
};

export default Login;
