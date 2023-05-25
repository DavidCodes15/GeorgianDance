import "./App.css";

import Accordion from "./accordion/Accordion";
function App() {

  return (
    <div className="space-y-24 text-white">
      <header>
        <nav className="container mx-auto">
          <ul className="flex justify-evenly items-center text-2xl p-4">
            <li className="border-[#130711] rounded-sm border-[1.5px] border-solid hover:bg-[#130711] hover:text-[#af2323] px-8 py-2 cursor-pointer">
              <a href="#Hero">Home</a>
            </li>
            <li className="border-[#130711] rounded-sm border-[1.5px] border-solid hover:bg-[#130711] hover:text-[#af2323] px-8 py-2 cursor-default">
            <a href="#Introduction">Creation</a>
            </li>
            <li className="border-[#130711] rounded-sm border-[1.5px] border-solid hover:bg-[#130711] hover:text-[#af2323] px-8 py-2 cursor-pointer">
            <a href="#Styles">Styles</a>
            </li>
            <li className="border-[#130711] rounded-sm border-[1.5px] border-solid hover:bg-[#130711] hover:text-[#af2323] px-8 py-2 cursor-pointer">
            <a href="#More">More</a>
            </li>
            
          </ul>
        </nav>
      </header>
      <main className="space-y-48">
        <section id="Hero" className="mb-10">
          <div className="container flex flex-row items-center px-6 mx-auto mt-10">
            <div className="flex flex-col space-y-6 w-1/2">
              <h1 className="text-left text-4xl font-bold">Georgian Dance</h1>
              <p className="text-left text-xl max-w-[500px] leading-8">
                Step into our world and explore the captivating world of
                Georgian dance, where tradition meets innovation, and every step
                carries the echoes of a timeless legacy. Join us as we delve
                into the intricate choreography, vibrant costumes, and the
                indomitable spirit that defines Georgian dance.
              </p>
              <div className="flex justify-start">
                <button className=" text-xl border-[#130711] border-[2px] rounded-sm border-solid hover:bg-[#130711] px-6 py-4">
                  Explore Me
                </button>
              </div>
            </div>
            <div className="w-1/2">
              <img
                className="rounded border-[#130711] border-[2px] border-solid px-4 py-4"
                alt="image"
                src="https://eurasianet.org/sites/default/files/styles/article/public/images/012315_01.jpg?itok=2UjKke6l,https://eurasianet.org/og-twitter.png"
              />
            </div>
          </div>
        </section>
        <section id="Introduction">
          <div className="container flex items-center px-6 mx-auto mt-10">
            <div className="flex flex-col space-y-6 w-1/2">
              <h1 className="text-left text-2xl font-bold">
                Where Did It Come From?
              </h1>
              <p className="text-left text-xl max-w-[500px]">
                Georgian dance, originating from the ancient land of Georgia, is
                a captivating art form shaped by various influences. Influenced
                by cultural exchanges with neighboring regions and the country's
                tumultuous history, Georgian dance embodies a unique blend of
                traditions. The resilience and strength displayed in Georgian
                dance can be attributed, in part, to the impact of wars and
                conflicts throughout Georgia's history. While sharing certain
                elements with neighboring dance styles, Georgian dance has
                evolved into a distinctive form, characterized by its spirited
                movements and expressions, showcasing the enduring spirit of the
                Georgian people.
              </p>
            </div>
            <div className="w-1/2 rounded-sm border-[#130711] border-[2px] border-solid px-4 py-4">
              <img
                alt="image"
                src="https://geotraveltime.ge/wp-content/uploads/2019/11/georgian-dance.jpg"
              />
            </div>
          </div>
          <div id="Styles" className="mt-10 container flex flex-col justify-center mx-auto py-6 space-y-6">
            <div>
              <p className="text-center text-2xl">Explore Favourite Ones!</p>
            </div>

            <div className="flex justify-center items-center space-x-4">
              <div className="border-[#ebc6c6] border-solid border-[1px] px-4 py-4 flex flex-col space-y-4">
                <h2 className="text-xl text-center">Kartuli</h2>
                <img
                  className="w-[200px] h-[200px] rounded-full border-[#130711] border-[2px] border-solid px-4 py-4"
                  alt="image"
                  src="https://i.pinimg.com/originals/c1/d0/87/c1d087d2ecc8ab6a9586c96cf9f0d2e4.jpg"
                />
                <div className="flex justify-center items-center">
                  <button className="bg-[#ebc6c6] rounded-full text-xl px-4 py-2 text-[#af2323]">
                    <a href="#Kartuli">Explore Now</a>
                  </button>
                </div>
              </div>
              <div className="border-[#ebc6c6] border-solid border-[1px] px-4 py-4 flex flex-col space-y-4">
                <h2 className="text-xl text-center">Adjaruli</h2>
                <img
                  className="w-[200px] h-[200px] rounded-full border-[#130711] border-[2px] border-solid px-4 py-4"
                  alt="image"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKx_1-BPuUdrW-TNHLoToaeEjkJAqd2nBeJvSE0Tbudk5aWWaSEwFf3xNKVIKi3jqH8UQ&usqp=CAU"
                />
                <div className="flex justify-center items-center">
                  <button className="bg-[#ebc6c6] rounded-full text-xl px-4 py-2 text-[#af2323]">
                  <a href="#Adjaruli">Explore Now</a>
                  </button>
                </div>
              </div>
              <div className="border-[#ebc6c6] border-solid border-[1px] px-4 py-4 flex flex-col space-y-4">
                <h2 className="text-xl text-center">Khorumi</h2>
                <img
                  className="w-[200px] h-[200px] rounded-full border-[#130711] border-[2px] border-solid px-4 py-4"
                  alt="image"
                  src="data:image/jpeg;base64,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"
                />
                <div className="flex justify-center items-center">
                  <button className="bg-[#ebc6c6] rounded-full text-xl px-4 py-2 text-[#af2323]">
                  <a href="#Khorumi">Explore Now</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="Kartuli">
          <div className="container flex items-center px-6 mx-auto mt-10">
            <div className="flex flex-col space-y-6 w-1/2">
              <h1 className="text-left text-2xl font-bold">Kartuli</h1>
              <p className="text-left text-xl max-w-[500px]">
                Kartuli dance, a unique style within Georgian dance, is known
                for its elegance and romantic essence. It embodies the emotions
                of love, courtship, and longing through graceful and flowing
                movements. With a minimum of two dancers, Kartuli dance creates
                a visually captivating performance, showcasing sweeping steps,
                gentle turns, and intricate hand movements. Its tender mood and
                synchronized choreography capture the enchanting beauty of
                romantic relationships in Georgian culture.
              </p>
            </div>
            <div className="w-1/2 rounded-sm border-[#130711] border-[2px] border-solid px-4 py-4">
              <a
                href="https://www.youtube.com/watch?v=w33nkOmsxQc"
                target="_blank"
              >
                <img
                  src="https://i.pinimg.com/originals/c1/d0/87/c1d087d2ecc8ab6a9586c96cf9f0d2e4.jpg"
                  alt="kartuli"
                />
              </a>
            </div>
          </div>
        </section>
        <section id="Adjaruli" className="mt-10">
          <div className="container flex items-center px-6 mx-auto mt-10">
            <div className="flex flex-col space-y-6 w-1/2">
              <h1 className="text-left text-2xl font-bold">Adjaruli</h1>
              <p className="text-left text-xl max-w-[500px]">
                Adjaruli dance is a unique style in Georgian dance known for its
                playful and flirtatious nature. It creates a lively and joyous
                mood, with expressive movements and dynamic footwork. Typically
                performed by a male and female pair, the dance requires
                synchronization and coordination. The basic moves include
                intricate footwork, spins, arm gestures, and flirtatious
                interactions. Adjaruli dance showcases the rich cultural
                heritage of the Adjara region, leaving a lasting impression on
                performers and spectators alike.
              </p>
            </div>
            <div className="w-1/2 border-[#130711] border-[2px] border-solid px-4 py-4">
              <a
                href="https://www.youtube.com/watch?v=ED6oowOpiXQ"
                target="_blank"
              >
                <img
                  className="rounded-sm"
                  src="https://visitsakartvelo.com/wp-content/uploads/2022/12/georgian-dance.jpg"
                  alt="adjaruli"
                />
              </a>
            </div>
          </div>
        </section>
        <section id="Khorumi ">
          <div className="container flex items-center px-6 mx-auto mt-10">
            <div className="flex flex-col space-y-6 w-1/2">
              <h1 className="text-left text-2xl font-bold">Kartuli</h1>
              <p className="text-left text-xl max-w-[500px]">
                Kartuli dance, a unique style within Georgian dance, is known
                for its elegance and romantic essence. It embodies the emotions
                of love, courtship, and longing through graceful and flowing
                movements. With a minimum of two dancers, Kartuli dance creates
                a visually captivating performance, showcasing sweeping steps,
                gentle turns, and intricate hand movements. Its tender mood and
                synchronized choreography capture the enchanting beauty of
                romantic relationships in Georgian culture.
              </p>
            </div>
            <div className="w-1/2 rounded-sm border-[#130711] border-[2px] border-solid px-4 py-4">
              <a
                href="https://www.youtube.com/watch?v=AZc1BTZqilI"
                target="_blank"
              >
                <img src="https://i.ytimg.com/vi/iQbi_0f3C1w/maxresdefault.jpg" alt="khorumi" />
              </a>
            </div>
          </div>
        </section>
        <section id="More">
          <div className="container flex flex-col justify-center items-center mx-auto mt-10 mb-[200px] space-y-4">
              <div>
                <h2 className="text-2xl">More</h2>
              </div>
              <div>
                  <Accordion/>
              </div>
            </div>
        </section>
      </main>
    </div>
  );
}

export default App;

