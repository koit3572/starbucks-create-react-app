import Navbar from './components/navbar/Navbar';
import Notice from './components/notice/Notice';
import Rewards from './components/rewards/Rewards';
import SeasonProduct from './components/seasonProduct/SeasonProduct';
import Visual from './components/visual/Visual';
import Youtube from './components/youtube/Youtube';
import ReserveCoffee from './components/reserveCoffee/ReserveCoffee'
import PickYourFavorite from './components/pickYourFavorite/PickYourFavorite';
import ReserveStore from './components/reserveStore/ReserveStore';
import FindStore from './components/findStore/FindStore';
import { useEffect } from 'react';
import ScrollMagic from 'scrollmagic'
import Awards from './components/awards/Awards';
import Footer from './components/footer/Footer';
function App() {
  useEffect(() => {
    const spyEls = document.querySelectorAll(".scroll-spy");
    spyEls.forEach((spyEl) => {
      new ScrollMagic.Scene({
        triggerElement: spyEl,
        triggerHook: 0.8, 
      })
        .setClassToggle(spyEl, "show")
        .addTo(new ScrollMagic.Controller());
    });
  },[])
  return (
    <>
      <header>
        <Navbar />
      </header>

      <section>
        <article>
          <Visual />
        </article>
        <article>
          <Notice />
        </article>
        <article>
          <Rewards />
        </article>
        <article>
          <Youtube />
        </article>
        <article className="scroll-spy">
          <SeasonProduct />
        </article>
        <article className="scroll-spy">
          <ReserveCoffee />
        </article>
        <article className="scroll-spy">
          <PickYourFavorite />
        </article>
        <article>
          <ReserveStore />
        </article>
        <article className="scroll-spy">
          <FindStore />
        </article>
      </section>

      <footer>
        <article>
          <Awards/>
        </article>
        <article>
          <Footer />
        </article>
      </footer>
    </>
  );
}

export default App;
  