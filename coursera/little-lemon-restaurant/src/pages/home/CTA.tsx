import { Link } from "react-router-dom";
import { Minus, MoveRight } from "lucide-react";

import { cn } from "@/libs/cn";
import Restaurant from "@/assets/restaurant.jpg";
import RestaurantChef from "@/assets/restaurant-chef-B.jpg";

const CTA = () => {
  return (
    <section className="relative container mx-auto overflow-hidden px-0 py-24 md:px-6">
      <div
        className={cn(
          "bg-base-200 relative grid grid-cols-1 items-center gap-16 overflow-hidden rounded-none p-12 pb-24 shadow-sm",
          "md:rounded-[3rem] md:p-20 lg:grid-cols-12",
        )}
      >
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="bg-warning absolute top-[-10%] right-[-10%] h-96 w-96 rounded-full blur-[100px]" />
          <div className="bg-primary absolute bottom-[-10%] left-[-10%] h-64 w-64 rounded-full blur-[80px]" />
        </div>

        <div className="text-secondary-content relative z-10 space-y-12 lg:col-span-7">
          <hgroup className="text-accent space-y-4">
            <span className="flex items-center gap-3 font-mono text-sm tracking-[0.4em] text-black uppercase">
              <Minus strokeWidth={1} />
              Reservations Suggested
            </span>
            <h2 className="text-5xl leading-tight font-light tracking-tighter md:text-7xl">
              A seat at{" "}
              <span className="font-serif font-normal italic">the table</span>{" "}
              awaits.
            </h2>
          </hgroup>

          <p className="max-w-xl text-xl leading-relaxed font-light text-black">
            From intimate date nights to family celebrations, Little Lemon is
            your home for authentic Mediterranean warmth. Book your experience
            today.
          </p>

          <div className="flex flex-col-reverse items-start gap-6 pt-4 sm:flex-row sm:items-center">
            <Link
              to="/reservation"
              className="btn btn-primary btn-lg group w-full rounded-full px-16 text-lg tracking-tight hover:scale-105 md:w-auto"
            >
              Reserve Now
              <MoveRight
                strokeWidth={0.5}
                className="transition-transform group-hover:translate-x-2"
              />
            </Link>

            <div className="divider divider-horizontal mx-0 hidden h-10 place-self-center md:flex" />

            <div className="text-black">
              <p className="text-xs font-bold tracking-widest uppercase">
                Dinner Hours
              </p>
              <p className="text-sm font-light italic">Mon — Sun: 5pm - 11pm</p>
            </div>
          </div>
        </div>

        <section className="relative lg:col-span-5 lg:block">
          <div className="relative z-10 ml-auto w-4/5">
            <img
              src={Restaurant}
              alt="Chef Mario"
              className="border-primary rounded-2xl border-4 shadow-2xl"
            />
          </div>

          <div className="absolute -bottom-12 left-0 z-20 w-3/5">
            <img
              src={RestaurantChef}
              alt="Little Lemon Interior"
              className="border-primary rounded-2xl border-4 shadow-2xl"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default CTA;
