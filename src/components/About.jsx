function About() {
  return (
    <div id="about"
      className="min-h-screen font-playfair bg-[#24140E] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/image.png')" }}
    >
      <div className="min-h-screen bg-black/50 px-6 py-20">

        <h1 className="text-center font-playfair text-5xl font-medium text-[#e08712]">
          About Us
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-center text-[#E8D3B5]">
          At Coffelix, coffee is more than just a drink. It is a passion,
          a tradition, and a moment worth enjoying.
        </p>

        <div className="mx-auto mt-12 max-w-4xl rounded-3xl bg-[#24140E]/80 p-8 backdrop-blur-sm md:p-12">

          <div className="grid gap-8 md:grid-cols-2">

            <div>
              <h2 className="font-playfair text-2xl text-[#e08712]">
                Crafted With Passion
              </h2>

              <p className="mt-3 leading-7 text-[#E8D3B5]">
                We are a team passionate about serving some of the best
                coffee in town. Every cup is prepared with care, and our
                customers are at the heart of everything we do.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-2xl text-[#e08712]">
                Quality Beans
              </h2>

              <p className="mt-3 leading-7 text-[#E8D3B5]">
                We source our coffee beans from trusted and reputed places
                to bring rich aroma, smooth flavor, and excellent quality
                to every cup.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-2xl text-[#e08712]">
                From Our Farms
              </h2>

              <p className="mt-3 leading-7 text-[#E8D3B5]">
                We also work with our own coffee farms where we carefully
                grow and harvest coffee while respecting natural farming
                practices.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-2xl text-[#e08712]">
                Made For You
              </h2>

              <p className="mt-3 leading-7 text-[#E8D3B5]">
                Our natural coffee has won the hearts of our customers,
                and their satisfaction will always be our first priority.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default About