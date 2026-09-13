function Contact() {
  return (
    <div id="contact" className=" font-playfair bg-[#24140E] px-6 py-20">

      <div className="mx-auto max-w-6xl">

        <h1 className="font-playfair text-5xl text-[#e08712]">
          Contact Us
        </h1>

        <p className="mt-3 max-w-lg text-[#E8D3B5]">
          We'd love to hear from you. Follow us, visit our café,
          or get in touch with the Coffelix team.
        </p>

        <div className="mt-16 grid gap-12 md:grid-cols-3">

          <div>
            <h2 className="mb-5 text-lg font-medium text-[#e08712]">
              Get In Touch
            </h2>

            <p className="mb-3 text-[#E8D3B5]">
              hello@coffelix.com
            </p>

            <a
              href="#"
              className="text-[#E8D3B5] hover:text-[#e08712]"
            >
              coffelixOfficial.com
            </a>

            <p className="mt-3 text-[#E8D3B5]">
              LinkedIn
            </p>
          </div>

          <div>
            <h2 className="mb-5 text-lg font-medium text-[#e08712]">
              Follow Us
            </h2>

            <a
              href="#"
              className="block mb-3 text-[#E8D3B5] hover:text-[#e08712]"
            >
              Instagram
            </a>

            <a
              href="#"
              className="block mb-3 text-[#E8D3B5] hover:text-[#e08712]"
            >
              Facebook
            </a>

            <a
              href="#"
              className="text-[#E8D3B5] hover:text-[#e08712]"
            >
              Twitter
            </a>
          </div>

          <div>
            <h2 className="mb-5 text-lg font-medium text-[#e08712]">
              Visit Us
            </h2>

            <p className="text-[#E8D3B5]">
              123 Coffee Street
            </p>

            <p className="mt-1 text-[#E8D3B5]">
              Lahore, Pakistan
            </p>

            <h3 className="mt-6 text-[#e08712]">
              Opening Hours
            </h3>

            <p className="mt-1 text-[#E8D3B5]">
              Monday - Sunday
            </p>

            <p className="text-[#E8D3B5]">
              8:00 AM - 11:00 PM
            </p>
          </div>

        </div>

      

      </div>

    </div>
  )
}

export default Contact