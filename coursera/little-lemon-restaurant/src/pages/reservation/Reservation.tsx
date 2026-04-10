import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MoveRight } from "lucide-react";
import { cn } from "@/libs/cn";

const Header = () => {
  return (
    <header className="mb-24">
      <span className="text-xs font-black tracking-[0.5em] text-black uppercase opacity-60">
        Reservations
      </span>
      <h1 className="text-6xl leading-[0.8] font-black tracking-tighter text-transparent uppercase [-webkit-text-stroke:2px_#370a00] md:text-9xl">
        Book Your <br />
        Experience
      </h1>
    </header>
  );
};

const schema = yup
  .object({
    date: yup.string().required(),
    time: yup.string().required(),
    guests: yup.number().min(1).typeError("must have a value").required(),
    fullName: yup.string().required(),
    email: yup.string().email().required(),
  })
  .required();

interface ReservationSchema {
  date: string;
  time: string;
  guests: number;
  fullName: string;
  email: string;
}

const Reservation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReservationSchema>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ReservationSchema) => console.log(data);

  return (
    <article>
      <main className="mx-auto max-w-7xl px-8 py-20">
        <Header />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-16 px-4 py-12 md:grid-cols-12"
        >
          <div className="space-y-12 md:col-span-5">
            <header className="border-l-2 border-[#F4CE14] pl-6">
              <h3 className="mb-2 text-[10px] font-black tracking-[0.5em] text-[#495E57] uppercase opacity-50">
                Details
              </h3>
              <p className="text-3xl font-black tracking-tight text-[#495E57] uppercase">
                When & Who
              </p>
            </header>

            <div className="space-y-10">
              <fieldset className="group fieldset relative">
                <label
                  htmlFor="label"
                  className="mb-2 block text-xs font-black tracking-widest text-[#495E57] uppercase"
                >
                  Arrival Date
                </label>
                <input
                  type="date"
                  {...register("date")}
                  className={cn(
                    "w-full border-b bg-transparent p-3 text-xl font-bold transition-all outline-none focus:border-[#495E57]",
                    errors.date
                      ? "border-error bg-error/10"
                      : "border-[#495E57]/20",
                  )}
                />
                {errors.date && (
                  <p className="text-error text-xs font-medium uppercase">
                    {errors.date.message}
                  </p>
                )}
              </fieldset>

              <div className="grid grid-cols-2 gap-8">
                <fieldset className="group relative">
                  <label className="mb-2 block text-xs font-black tracking-widest text-[#495E57] uppercase">
                    Time
                  </label>
                  <select
                    {...register("time")}
                    className={cn(
                      "w-full appearance-none border-b bg-transparent p-3 text-xl font-bold transition-all outline-none focus:border-[#495E57]",
                      errors.time
                        ? "border-error bg-error/10"
                        : "border-[#495E57]/20",
                    )}
                  >
                    <option value="18:00">18:00</option>
                    <option value="20:00">20:00</option>
                  </select>
                  {errors.time && (
                    <p className="text-error text-xs font-medium uppercase">
                      {errors.time.message}
                    </p>
                  )}
                </fieldset>

                <fieldset className="group relative">
                  <label
                    htmlFor="guests"
                    className="mb-2 block text-xs font-black tracking-widest text-[#495E57] uppercase"
                  >
                    Guests
                  </label>
                  <input
                    type="number"
                    placeholder="02"
                    {...register("guests")}
                    className={cn(
                      "w-full border-b bg-transparent p-3 text-xl font-bold transition-all outline-none focus:border-[#495E57]",
                      errors.guests
                        ? "border-error bg-error/10"
                        : "border-[#495E57]/20",
                    )}
                  />
                  {errors.guests && (
                    <p className="text-error text-xs font-medium uppercase">
                      {errors.guests.message}
                    </p>
                  )}
                </fieldset>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between space-y-16 md:col-span-7">
            <div className="space-y-12">
              <header className="border-l-2 border-[#F4CE14] pl-6">
                <h3 className="mb-2 text-xs font-black tracking-[0.5em] text-[#495E57] uppercase opacity-50">
                  Guest
                </h3>
                <p className="text-3xl font-black tracking-tight text-[#495E57] uppercase">
                  Personal Info
                </p>
              </header>

              <div className="space-y-8">
                <fieldset>
                  <input
                    type="text"
                    placeholder="YOUR FULL NAME"
                    {...register("fullName")}
                    className={cn(
                      "w-full bg-[#495E57]/5 p-6 text-sm font-black tracking-[0.2em] uppercase transition-all outline-none focus:bg-[#495E57] focus:text-white",
                      errors.fullName && "bg-error/10",
                    )}
                  />
                  {errors.fullName && (
                    <p className="text-error text-xs font-medium uppercase">
                      {errors.fullName.message}
                    </p>
                  )}
                </fieldset>
                <fieldset>
                  <input
                    type="email"
                    placeholder="EMAIL ADDRESS"
                    {...register("email")}
                    className={cn(
                      "w-full bg-[#495E57]/5 p-6 text-sm font-black tracking-[0.2em] uppercase transition-all outline-none focus:bg-[#495E57] focus:text-white",
                      errors.email && "bg-error/10",
                    )}
                  />
                  {errors.email && (
                    <p className="text-error text-xs font-medium uppercase">
                      {errors.email.message}
                    </p>
                  )}
                </fieldset>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-xl border-[#495e57] bg-[#495E57] text-white uppercase"
            >
              Confirm reservation
              <MoveRight strokeWidth={0.5} />
            </button>
          </div>
        </form>
      </main>
    </article>
  );
};

export default Reservation;
