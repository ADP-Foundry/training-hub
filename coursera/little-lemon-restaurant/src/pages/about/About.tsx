import Crew from "@/assets/whole-crew.jpg";

const About = () => {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-6 py-24">
        <header className="max-w-4xl">
          <p className="text-accent mb-6 block font-mono text-xs tracking-[0.4em] uppercase">
            - Our Heritage / Chicago
          </p>
          <h1 className="text-primary mb-12 text-6xl leading-[0.85] font-black tracking-tighter md:text-8xl">
            TRADITION <br />
            <span className="text-accent ml-12 font-serif font-normal italic md:ml-24">
              reimagined.
            </span>
          </h1>
          <p className="text-base-content/70 max-w-2xl text-2xl leading-relaxed font-light">
            Little Lemon opened its doors with a simple vision: to bring the
            vibrant, sun-drenched flavors of the Mediterranean to the heart of
            Chicago.
          </p>
        </header>
      </section>

      <section className="container mx-auto mb-32 grid grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12">
        <div className="relative lg:col-span-6">
          <div className="aspect-4/5 overflow-hidden rounded-4xl shadow-2xl">
            <img src={Crew} alt="The Crew" className="size-full object-cover" />
          </div>

          <div className="bg-secondary text-secondary-content absolute -right-8 -bottom-8 hidden max-w-xs rounded-4xl p-8 shadow-xl md:block">
            <p className="font-serif text-xl italic">
              "Food is the language of the heart. We just provide the
              translation."
            </p>
            <p className="mt-4 text-xs font-bold tracking-widest uppercase">
              — Mario & Adrian
            </p>
          </div>
        </div>

        <div className="space-y-8 lg:col-span-5 lg:col-start-8">
          <h2 className="text-primary text-4xl font-bold tracking-tight">
            Meet the Family
          </h2>
          <div className="bg-accent h-1 w-12 rounded-full" />
          <div className="text-base-content/80 space-y-6 leading-relaxed">
            <p>
              Founded by brothers Mario and Adrian, Little Lemon is a testament
              to their upbringing in the coastal villages of Italy and Greece.
            </p>
            <p>
              Mario, the head chef, brings decades of experience in traditional
              culinary arts, while Adrian ensures every guest feels like they
              are dining in their own family home.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-base-200 py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-base-100 border-base-300/50 space-y-4 rounded-4xl border p-10">
              <span className="text-4xl">🍋</span>
              <h3 className="text-primary text-xl font-bold uppercase">
                Sourcing
              </h3>
              <p className="text-base-content/60 text-sm italic">
                Only the freshest local ingredients, combined with artisanal
                imports from our home regions.
              </p>
            </div>
            <div className="bg-secondary text-secondary-content space-y-4 rounded-4xl p-10 shadow-xl md:-translate-y-8">
              <span className="text-4xl">🔥</span>
              <h3 className="text-xl font-bold uppercase">Technique</h3>
              <p className="text-sm italic opacity-80">
                Time-honored methods of wood-firing and hand-pressing that
                cannot be rushed or replicated.
              </p>
            </div>
            <div className="bg-base-100 border-base-300/50 space-y-4 rounded-4xl border p-10">
              <span className="text-4xl">🌿</span>
              <h3 className="text-primary text-xl font-bold uppercase">
                Culture
              </h3>
              <p className="text-base-content/60 text-sm italic">
                A commitment to the slow-food movement and the communal joy of a
                shared Mediterranean meal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="h-130 w-full">
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1600"
          alt="Atmosphere"
          className="h-full w-full object-cover brightness-75 grayscale-40"
        />
      </section>
    </main>
  );
};

export default About;
