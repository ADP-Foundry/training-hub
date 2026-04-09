import { cn } from "@/libs/cn";
import { Link } from "react-router-dom";

import Restaurant from "@/assets/restaurant.jpg";

const Banner = () => {
  return (
    <section className="relative w-full py-16 md:py-24">
      <div className="absolute inset-0 z-0">
        <div className="bg-base-200 absolute top-0 right-0 h-full w-2/3 rounded-bl-[100px] md:rounded-bl-[200px]" />
        <div className="bg-secondary/20 absolute -bottom-5 left-[10%] h-32 w-32 rounded-full blur-xl" />
      </div>

      <section className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
          <div className="space-y-6 md:col-span-5 md:space-y-8">
            <hgroup className="space-y-1">
              <h1 className="text-6xl font-extrabold tracking-tighter md:text-8xl">
                Little Lemon
              </h1>
              <h2 className="text-accent font-serif text-4xl font-medium tracking-tight italic">
                Chicago
              </h2>
            </hgroup>

            <div className="bg-secondary h-2 w-24 rounded-full" />

            <p className="max-w-lg text-lg leading-relaxed">
              Experience authentic Mediterranean flavors, where tradition meets
              modern innovation in the heart of the city. We believe in fresh
              ingredients and bold recipes.
            </p>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Link
                to="/reservation"
                className="btn btn-primary btn-lg shadow-primary/20 rounded-full px-10 text-lg shadow-lg"
              >
                Reserve a Table
              </Link>
              <Link
                to="/menu"
                className="btn btn-ghost btn-lg group rounded-full text-lg"
              >
                View Menu
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>

          <div className="relative md:col-span-7">
            <div className="border-secondary/30 absolute -top-6 -left-6 z-[-1] h-full w-full rounded-3xl border-8" />

            <img
              src={Restaurant}
              alt="Inside Little Lemon Restaurant"
              className={cn(
                "h-100 w-full md:h-137.5",
                "object-cover",
                "rounded-3xl",
                "shadow-primary/10 shadow-2xl",
                "border-base-100 border-8",
              )}
            />

            <div className="bg-base-100 border-base-200 absolute bottom-6 -left-10 hidden items-center gap-4 rounded-2xl border p-5 shadow-xl md:flex">
              <div className="avatar avatar-placeholder">
                <div className="bg-secondary text-secondary-content w-14 rounded-full text-center">
                  <span className="text-sm font-bold">4.8★</span>
                </div>
              </div>
              <div>
                <p className="text-neutral font-semibold">Top Rated Chicago</p>
                <p className="text-neutral/70 text-xs">500+ Google Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Banner;
