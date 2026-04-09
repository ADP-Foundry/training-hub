import GreekSalad from "@/assets/greek-salad.jpg";
import LemonDesert from "@/assets/lemon-dessert.jpg";
import Bruchetta from "@/assets/bruchetta.svg";
import Seabass from "@/assets/grilled-seabass.jpg";

const FeatureSpecialDish = () => {
  return (
    <div className="group card cursor-pointer lg:col-span-7">
      <figure className="relative aspect-16/10 overflow-hidden rounded-sm">
        <img
          src={GreekSalad}
          className="h-full w-full object-cover grayscale-20 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
          alt="Featured Dish"
        />
        <h5 className="absolute top-6 left-6 text-4xl font-black text-white mix-blend-difference">
          01
        </h5>
      </figure>
      <div className="card-body">
        <h3 className="text-primary card-title justify-between text-3xl tracking-tight">
          Greek Salad Royale
          <span className="text-primary/40 text-2xl font-light">$12.99</span>
        </h3>
        <p className="text-neutral/60 mt-2 max-w-md leading-relaxed">
          Classic Mediterranean greens met with artisanal Chicago feta and
          hand-pressed olive oil.
        </p>
      </div>
    </div>
  );
};

interface Dish {
  title: string;
  category: string;
  image: string;
}

const FeatureDishMenu = ({ dishes }: { dishes: Dish[] }) => {
  return dishes.map((dish, idx) => (
    <div
      key={dish.title}
      className="group hover:bg-base-200/50 flex items-center justify-between px-4 py-8 transition-colors"
    >
      <div className="flex items-center gap-6">
        <span className="text-secondary font-mono text-xs">0{idx + 2}</span>
        <div>
          <h4 className="group-hover:text-primary text-xl font-bold transition-colors">
            {dish.title}
          </h4>
          <p className="text-neutral/50 mt-1 text-xs tracking-widest uppercase">
            {dish.category}
          </p>
        </div>
      </div>
      <div className="h-16 w-16 -translate-x-4 overflow-hidden rounded-full opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
        <img
          src={dish.image}
          className="h-full w-full object-cover"
          alt={dish.title.toLowerCase()}
        />
      </div>
    </div>
  ));
};
const Specials = () => {
  return (
    <main className="bg-white py-24">
      <section className="container mx-auto px-6">
        <header className="mb-16 flex flex-col">
          <span className="text-secondary mb-4 font-mono text-xs tracking-[0.3em] uppercase">
            — Selected Chef Specials
          </span>
          <h2 className="text-6xl leading-none font-black tracking-tighter md:text-8xl">
            WEEKLY <br /> <span className="ml-12 md:ml-24">SPECIAUX.</span>
          </h2>
        </header>

        <section className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
          <FeatureSpecialDish />

          <div className="divide-primary/10 border-primary/10 flex flex-col divide-y border-t lg:col-span-5">
            <FeatureDishMenu dishes={dishes.slice(1)} />

            <button className="btn btn-ghost text-secondary mt-8 justify-start text-xs font-bold tracking-widest uppercase hover:bg-transparent">
              View All 42 Dishes —
            </button>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Specials;

const dishes = [
  { title: "Greek Salad", category: "Entrée", image: GreekSalad },
  {
    title: "Grilled Sea Bass",
    category: "Main",
    image: Seabass,
  },
  {
    title: "Lemon Dessert",
    category: "Sweet",
    image: LemonDesert,
  },
  {
    title: "Artisan Bruschetta",
    category: "Starter",
    image: Bruchetta,
  },
];
