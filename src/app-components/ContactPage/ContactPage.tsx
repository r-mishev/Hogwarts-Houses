export const ContactPage = () => {
  return (
    <>
      <p id="name">Cornelius Oswald Fudge,</p>
      <p id="ministry">Ministry of Magic Headquarters,</p>
      <p id="location">
        Underground of Whitehall and the HM Treasury building,
      </p>
      <p id="city">London,</p>
      <p id="country">Great Britain</p>
      {/* Picture tag goes over the children and renders the first element it
      can. Webp images are smaller and faster to load than jpgs, however some
      browsers (IE, Safari) do not support webp images. The picture tag allows
      us to render a jpg if the browser does not support webp. */}
      <picture>
        <source
          srcSet="/src/app-assets/webp/Corneliushogwarts.webp"
          type="image/webp"
        />
        <img
          src="/src/app-assets/jpg/Corneliushogwarts.jpg"
          alt="Cornelius Fudge"
        />
      </picture>
    </>
  );
};
