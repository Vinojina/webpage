import Puppy from "/src/assets/images/dog.avif";
import Kitten from "/src/assets/images/cat.avif";
import React from "react";

function Home() {
  return (
    <div className="home">
      <section className="section">
        <h2>Who We Are</h2>
        <img src={Puppy} alt="A cute puppy" className="home-image" />
        <p>
          PawPrints Haven is a cozy online spot made for animal lovers of all kinds. 
          Whether you adore dogs, cherish cats, or smile at squirrels, this space is all 
          about celebrating the joy pets bring into our lives.
        </p>
      </section>
      <section className="section">
        <h2>Tails, Tips & Treats</h2>
        <img src={Kitten} alt="A cute kitten" className="home-image" />
        <p>
          From pet care tips and fun facts to adoption stories and animal-friendly products, 
          we’ve got your furry needs covered. Sit. Stay. Explore! 🐶
        </p>
      </section>
    </div>
  );
}

export default Home;
