import { Minus } from "lucide-react";
import { cn } from "@/libs/cn";

interface Reviews {
  id: number;
  text: string;
  name: string;
  source: string;
}
const Reviews = () => {
  return reviews.map((review) => (
    <div
      key={review.id}
      className={cn(
        "group border-base-200 flex flex-col items-start gap-8 border-b pb-12 last:border-0 md:flex-row",
        review.id % 2 === 0 && "md:flex-row-reverse md:text-right",
      )}
    >
      <div className="text-secondary/30 group-hover:text-secondary font-serif text-5xl italic transition-colors">
        0{review.id}
      </div>

      <div className="flex-1 space-y-4">
        <p className="text-neutral/80 text-2xl leading-relaxed font-light italic">
          "{review.text}"
        </p>
        <div>
          <h4 className="text-primary text-sm font-bold tracking-widest uppercase">
            {review.name}
          </h4>
          <p className="text-neutral/40 text-xs">{review.source}</p>
        </div>
      </div>
    </div>
  ));
};

const Testimonials = () => {
  return (
    <main className="py-24">
      <section className="container mx-auto max-w-4xl px-6">
        <header className="mb-20 space-y-4 text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            Guest Experiences
          </h2>
          <div className="bg-secondary mx-auto h-1 w-12 rounded-full" />
        </header>

        <div className="space-y-16">
          <Reviews />
        </div>

        <footer className="mt-20 text-center">
          <button className="btn btn-ghost btn-sm text-neutral/50 hover:text-primary transition-all hover:bg-transparent">
            Read all 400+ reviews on Google <Minus strokeWidth={0.5} />
          </button>
        </footer>
      </section>
    </main>
  );
};

const reviews: Reviews[] = [
  {
    id: 1,
    text: "The Greek salad was perfectly fresh, and the lemon dessert is truly a Chicago staple.",
    name: "Adrianne Miller",
    source: "Google Reviews",
  },
  {
    id: 2,
    text: "An intimate atmosphere that feels both modern and traditional. Simply wonderful.",
    name: "Marco Rossi",
    source: "TripAdvisor",
  },
  {
    id: 3,
    text: "The family-owned vibe really shines through in the quality of the service.",
    name: "Sarah Chen",
    source: "Yelp",
  },
];

export default Testimonials;
