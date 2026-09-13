import React from 'react'

const coffeeMenu = [
  {
    id: 1,
    name: "Caramel Macchiato",
    category: "Hot Coffee",
    description:
      "Rich espresso layered with steamed milk, velvety foam, and sweet caramel drizzle.",
    price: 650,
    size: "Medium",
    image: "/images/caramel-macchiato.png",
    badge: "Popular",
  },
  {
    id: 2,
    name: "Cappuccino",
    category: "Hot Coffee",
    description:
      "A classic blend of bold espresso, steamed milk, and a thick layer of creamy foam.",
    price: 550,
    size: "Medium",
    image: "/images/cappuccino.png",
    badge: "Classic",
  },
  {
    id: 3,
    name: "Caffè Latte",
    category: "Hot Coffee",
    description:
      "Smooth espresso combined with silky steamed milk for a perfectly balanced cup.",
    price: 580,
    size: "Large",
    image: "/images/latte.png",
    badge: "Favorite",
  },
  {
    id: 4,
    name: "Mocha",
    category: "Hot Coffee",
    description:
      "Bold espresso blended with rich chocolate and steamed milk, finished with chocolate drizzle.",
    price: 620,
    size: "Medium",
    image: "/images/mocha.png",
    badge: "Chocolate",
  },
  {
    id: 5,
    name: "Americano",
    category: "Hot Coffee",
    description:
      "Smooth espresso combined with hot water for a bold, clean, and refreshing coffee.",
    price: 450,
    size: "Large",
    image: "/images/americano.png",
    badge: "Strong",
  },
  {
    id: 6,
    name: "Vanilla Cold Brew",
    category: "Cold Coffee",
    description:
      "Slow-brewed coffee served chilled with smooth vanilla sweetness and a refreshing finish.",
    price: 600,
    size: "Large",
    image: "/images/vanilla.png",
    badge: "Cold",
  },
  {
    id: 7,
    name: "Iced Caramel Latte",
    category: "Cold Coffee",
    description:
      "Chilled espresso, creamy milk, and caramel sweetness served over ice.",
    price: 650,
    size: "Large",
    image: "/images/iced-caramel.png",
    badge: "Trending",
  },
  {
    id: 8,
    name: "Hazelnut Coffee",
    category: "Specialty Coffee",
    description:
      "Aromatic espresso infused with roasted hazelnut flavor and creamy steamed milk.",
    price: 680,
    size: "Medium",
    image: "/images/hazelnut.png",
    badge: "Special",
  },
]

const categories = [
  "All",
  "Hot Coffee",
  "Cold Coffee",
  "Specialty Coffee",
]

function Menu() {
  return (
    <div id='menu' className="min-h-screen font-playfair bg-[#24140E] px-6 py-16">

      <h1 className="text-center font-playfair text-5xl font-medium text-[#e08712]">
        Explore Coffelix Menu
      </h1>

      <div className="mt-8 flex justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            className="rounded-full border border-[#e08712] px-5 py-2 text-sm text-[#E8D3B5] transition hover:bg-[#e08712] hover:text-[#24140E]"
          >
            {category}
          </button>
        ))}
      </div>

      <div className=" mt-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

        {coffeeMenu.map((coffee) => (
          <div
            key={coffee.id}
            className="group overflow-hidden rounded-2xl bg-[#55392f] transition hover:-translate-y-2"
          >

            <div className="relative h-60 overflow-hidden">
              <img
                src={coffee.image}
                alt={coffee.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <span className="absolute left-4 top-4 rounded-full bg-[#e08712] px-3 py-1 text-xs font-semibold text-[#24140E]">
                {coffee.badge}
              </span>
            </div>

            <div className="p-5">

              <p className="text-xs uppercase tracking-wider text-[#B8753C]">
                {coffee.category}
              </p>

              <h2 className="mt-1 font-playfair text-2xl text-[#E8D3B5]">
                {coffee.name}
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#cdb9a8]">
                {coffee.description}
              </p>

              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#B8753C]">
                    {coffee.size}
                  </p>

                  <p className="text-lg font-semibold text-[#e08712]">
                    Rs. {coffee.price}
                  </p>
                </div>

                <button className="rounded-full bg-[#e08712] px-4 py-2 text-sm font-medium text-[#24140E] hover:bg-[#e3a44d]">
                  Order
                </button>
              </div>

            </div>

          </div>
          
        ))}
        <div className='flex items-center'>
          <button className='text-center px-6 py-2 bg-[#e08712] text-[#24140E] rounded-full'>Login to Explore More</button>
          </div>
      </div>
    </div>
  )
}

export default Menu