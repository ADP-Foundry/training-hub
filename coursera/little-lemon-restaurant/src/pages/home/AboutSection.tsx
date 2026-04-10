import { Link } from "react-router-dom";

import MarioAndAdrian from "@/assets/Mario-and-Adrian.jpg";
import Restaurant from "@/assets/restaurant.jpg";

const AboutSection = () => {
  return (
    <main className="container mx-auto px-6 py-24">
      <section className="flex flex-col items-center gap-16 lg:flex-row">
        <div className="space-y-8 lg:w-1/2">
          <hgroup className="space-y-4">
            <h2 className="text-5xl font-extrabold tracking-tighter">
              Little Lemon
            </h2>
            <h3 className="text-secondary font-serif text-2xl italic">
              Our Chicago Story
            </h3>
          </hgroup>

          <p className="max-w-xl text-lg leading-relaxed font-light opacity-90">
            Little Lemon is a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>

          <p className="max-w-xl text-lg leading-relaxed font-light opacity-90">
            Based in Chicago, Illinois, we pride ourselves on sourcing the
            freshest local ingredients to bring the authentic taste of the
            Mediterranean to your neighborhood.
          </p>

          <Link to="/about" className="btn btn-secondary">
            Learn More About Us
          </Link>
        </div>

        <div className="relative lg:w-1/2">
          <div className="relative z-10 ml-auto w-4/5">
            <img
              src={MarioAndAdrian}
              alt="Mario and Adrian"
              className="border-primary rounded-2xl border-4 shadow-2xl"
            />
          </div>

          <div className="absolute -bottom-12 left-0 z-20 w-3/5">
            <img
              src={Restaurant}
              alt="Little Lemon Interior"
              className="border-primary rounded-2xl border-4 shadow-2xl"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutSection;
