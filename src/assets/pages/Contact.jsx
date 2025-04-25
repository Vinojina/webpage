import Pets from '../images/dog-cat.png';

function Contact() {
  return (
    <>
      <div className="contact-form">
        <h2>Bark at Us!</h2>
        <p>
          Have a paw-some story? Want to share a cute picture or ask a pet question? 
          Fill out the form below—we are all ears! 🐾
        </p>
        <img src={Pets} alt="A dog and a cat" className="pet-image" />
        <form className="contact-form-element">
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Message:
            <textarea name="message" rows="4" required></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Contact