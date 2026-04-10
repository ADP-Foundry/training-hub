import {
  type Categories,
  type EmptyMenuProps,
  type FilterNavButtonProps,
  type MenuItem,
} from "./type";

import { useState } from "react";
import { MoveRight, SearchX, UtensilsCrossed } from "lucide-react";

import { cn } from "@/libs/cn";
import { categories, menuData } from "./utils";
import { Link } from "react-router-dom";

const FilterNavButton = ({
  categories,
  activeTab,
  setActiveTab,
}: FilterNavButtonProps) => {
  return (
    <nav className="bg-base-100/80 border-base-content/5 sticky top-0 z-10 border-b backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-8 py-4">
        <div
          role="tablist"
          className="tabs tabs-border no-scrollbar flex flex-nowrap overflow-x-auto"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              onClick={() => setActiveTab(cat)}
              className={cn(
                "tab px-6 font-black tracking-[0.2em] uppercase transition-all duration-300",
                activeTab === cat
                  ? "tab-active border-primary text-primary"
                  : "text-base-content/40 hover:text-base-content border-transparent",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

const FilteredItem = ({ filteredItems }: { filteredItems: MenuItem[] }) => {
  return filteredItems.map((item) => (
    <div
      key={item.id}
      className="group border-base-content/10 hover:bg-base-200/30 flex cursor-pointer flex-col items-center gap-8 border-b px-4 py-12 transition-all md:flex-row"
    >
      <div className="relative h-48 w-full overflow-hidden rounded-sm transition-all duration-500 md:w-64">
        <img
          src={item.image}
          alt={item.title.toLocaleLowerCase()}
          className="h-full w-full scale-110 object-cover transition-transform duration-700 group-hover:scale-100"
        />
        <div className="absolute top-2 right-2">
          <span className="bg-secondary text-secondary-content px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
            {item.category}
          </span>
        </div>
      </div>

      <div className="flex-1 space-y-3">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-secondary flex items-center gap-3 text-3xl font-black tracking-tight uppercase md:text-4xl">
            {item.title}
            {item.isSpecial && (
              <span className="bg-primary text-primary-content rounded-full px-2 py-0.5 text-[10px] tracking-tighter uppercase">
                Specials
              </span>
            )}
          </h2>
          <div className="bg-base-content/10 hidden h-px flex-1 md:block" />
          <p className="text-primary font-serif text-2xl italic">
            ${item.price}
          </p>
        </div>

        <p className="text-base-content/70 max-w-2xl text-lg leading-relaxed">
          {item.description}
        </p>

        <div className="flex items-center gap-5 pt-4">
          <button className="hover:text-primary btn btn-soft btn-sm text-xs font-bold tracking-widest uppercase transition-colors hover:bg-transparent">
            Order Now <MoveRight size={16} />
          </button>
          <span className="divider divider-horizontal mx-0 h-5 place-self-center" />
          <button className="text-base-content/40 btn btn-ghost hover:text-base-content btn-sm text-xs font-bold tracking-widest uppercase hover:bg-transparent">
            View Ingredients
          </button>
        </div>
      </div>
    </div>
  ));
};

const EmptyMenu = ({ activeTab, filteredItems }: EmptyMenuProps) => {
  return (
    filteredItems.length === 0 && (
      <div className="border-base-content/10 bg-base-200/50 mx-auto mt-12 flex max-w-2xl flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-24 text-center">
        <div className="relative mb-8">
          <div className="bg-primary/20 rounded-full p-6">
            <UtensilsCrossed size={48} className="text-primary" />
          </div>
          <div className="bg-secondary border-base-100 absolute -right-2 -bottom-2 rounded-full border-4 p-2">
            <SearchX size={18} className="text-secondary-content" />
          </div>
        </div>

        <div className="max-w-sm space-y-3">
          <h2 className="text-secondary text-3xl font-black tracking-tighter uppercase">
            Hmm... It's quiet in here.
          </h2>
          <p className="text-base-content/70 text-lg leading-relaxed">
            It looks like we're all out of
            <span className="text-primary mx-1.5 font-semibold uppercase italic">
              "{activeTab}"
            </span>
            for now. Don't worry, our chefs are always creating new specials!
          </p>
        </div>

        <button className="btn btn-ghost text-base-content/70 btn-sm hover:text-primary mt-10 w-full normal-case hover:bg-transparent">
          Ask a Chef for a Recommendation?
        </button>
      </div>
    )
  );
};
const Menu = () => {
  const [activeTab, setActiveTab] = useState<Categories>("all");

  const filteredItems =
    activeTab.toLocaleLowerCase() === "all"
      ? menuData
      : menuData.filter((item) => item.category === activeTab);

  return (
    <article className="">
      <header className="border-base-content/10 mx-auto flex max-w-7xl flex-col items-end justify-between border-b px-8 py-20 md:flex-row">
        <div className="space-y-2">
          <h1 className="text-secondary text-6xl font-black tracking-tighter md:text-8xl">
            THE MENU
          </h1>
          <p className="text-base-content/60 max-w-md font-serif italic">
            "Simple food, served with passion." — Experience the true taste of
            the Mediterranean.
          </p>
        </div>

        <div className="mt-8 md:mt-0">
          <Link
            to="/reservation"
            className="btn btn-outline btn-secondary hover:bg-primary hover:border-primary rounded-none border-2 px-12"
          >
            RESERVE A TABLE
          </Link>
        </div>
      </header>

      <FilterNavButton
        categories={categories}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main className="mx-auto max-w-7xl px-8 py-12">
        <div className="flex flex-col">
          <FilteredItem filteredItems={filteredItems} />
          <EmptyMenu filteredItems={filteredItems} activeTab={activeTab} />

          {filteredItems.length !== 0 && (
            <div className="join mt-10 place-self-center">
              {[...Array(5)].map((_, ids) => (
                <button key={ids} className="join-item btn bg-base-100">
                  {ids + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </main>
    </article>
  );
};

export default Menu;
