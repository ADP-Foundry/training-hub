import type { MenuItem } from "../menu/type";
import { useState } from "react";
import { Plus, Minus, ShoppingBag, CircleMinus } from "lucide-react";

import { categories, menuData } from "../menu/utils";

type DishCardProps = {
  item: MenuItem;
  onAdd: (item: MenuItem) => void;
};
const DishCard = ({ item, onAdd }: DishCardProps) => {
  return (
    <div className="group border-base-content/10 hover:bg-base-200/30 flex cursor-pointer flex-col items-center gap-8 border-b px-4 py-12 transition-all md:flex-row">
      <div className="relative h-48 w-full overflow-hidden md:w-64">
        <img
          src={item.image}
          alt={item.title.toLocaleLowerCase()}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="bg-neutral absolute top-4 left-4 px-3 py-1">
          <span className="text-neutral-content text-[10px] font-black tracking-widest uppercase">
            ${item.price}
          </span>
        </div>
      </div>

      <div className="flex-1 space-y-4 text-center md:text-left">
        <header className="space-y-1">
          <h3 className="text-2xl font-black tracking-tighter text-black uppercase">
            {item.title}
          </h3>
          <div className="bg-warning mx-auto h-1 w-12 transition-all group-hover:w-24 md:mx-0" />
        </header>

        <p className="max-w-md text-sm leading-relaxed">{item.description}</p>

        <div className="flex w-full justify-end pt-4">
          <button
            onClick={() => onAdd(item)}
            className="btn btn-outline btn-lg w-full gap-4 rounded-none border border-[#370a00] text-[#370a00] uppercase shadow-sm hover:bg-transparent md:w-60"
          >
            <span className="text-[10px] font-black tracking-[0.3em]">
              add to bag
            </span>
            <ShoppingBag className="size-7" />
          </button>
        </div>
      </div>
    </div>
  );
};

type CheckoutBagProps = {
  cart: Pick<MenuItem, "id" | "title" | "price">[];
  onRemove: (index: number) => void;
};
const CheckoutBag = ({ cart, onRemove }: CheckoutBagProps) => {
  const getSubTotal = cart.reduce(
    (total, item) => total + Number(item.price),
    0,
  );

  return (
    <div className="text-secondary sticky top-20 space-y-8 border-2 border-[#495E57] p-8 shadow-2xl">
      <header className="flex items-center justify-between border-b border-[#495E57]/10 pb-6">
        <h3 className="flex items-center gap-3 text-lg font-black tracking-tighter uppercase italic">
          <ShoppingBag size={24} />
          Your Bag
        </h3>

        <p className="font-black tracking-wider">
          QTY. {cart.length.toString().padStart(2, "0")}
        </p>
      </header>

      <div className="space-y-6">
        {cart.length === 0 && (
          <div className="flex flex-col items-center justify-center">
            <p className="text-center text-[10px] font-black tracking-[0.4em] uppercase italic">
              Your bag is <br /> currently empty
            </p>
          </div>
        )}

        {cart.map((item, ids) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-xs font-black uppercase">{item.title}</p>
              <div className="flex items-center gap-3">
                <button className="btn btn-xs btn-outline rounded-none border border-[#495E57]/20">
                  <Minus size={10} />
                </button>
                <span className="text-xs font-bold">0</span>
                <button className="btn btn-xs btn-outline rounded-none border border-[#495E57]/20">
                  <Plus size={10} />
                </button>
              </div>
            </div>
            <div className="flex gap-2">
              <p className="text-sm font-bold">{item.price}</p>
              <CircleMinus
                onClick={() => onRemove(ids)}
                size={20}
                className="text-error hover:cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4 border-t-2 border-dashed border-[#495E57]/20 pt-8">
        <div className="flex items-end justify-between">
          <span className="text-xs font-black uppercase">Subtotal</span>
          <span className="text-xl font-bold">{getSubTotal.toFixed(2)}</span>
        </div>
        <button className="btn btn-success btn-lg w-full rounded-none text-white">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

const Orders = () => {
  const [cart, setCart] = useState<MenuItem[]>([]);

  const fnFilteredData = (category: string) => {
    return menuData.filter((item) => item.category === category);
  };

  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => [...prev, item]);
  };

  const handleRemoveFromCart = (indexToRemove: number) => {
    setCart((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <article>
      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-12 md:py-20 lg:grid-cols-12">
        <section className="space-y-12 lg:col-span-8">
          <header className="space-y-4">
            <h1 className="text-6xl leading-[0.8] font-black tracking-tighter text-transparent uppercase [-webkit-text-stroke:2px_#370a00] md:text-8xl">
              Order <br /> Online
            </h1>
            <p className="text-[10px] font-black tracking-[0.5em] uppercase">
              Fresh from our kitchen to your door
            </p>
          </header>

          <div className="space-y-12">
            {categories.slice(1).map((category) => (
              <div key={category} className="space-y-6">
                <h2 className="inline-block border-b-2 border-[#495E57] pb-2 text-xs font-black tracking-[0.3em] uppercase">
                  {category}
                </h2>

                {fnFilteredData(category).map((item) => (
                  <DishCard key={item.id} item={item} onAdd={handleAddToCart} />
                ))}

                {fnFilteredData(category).length === 0 && (
                  <div className="flex items-center gap-6 border-b border-black/5 py-12 opacity-40">
                    <h1 className="text-sm font-black tracking-widest uppercase italic">
                      No available {category} at this time
                    </h1>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <aside className="lg:col-span-4">
          <CheckoutBag cart={cart} onRemove={handleRemoveFromCart} />
        </aside>
      </main>
    </article>
  );
};

export default Orders;
