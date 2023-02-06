function Footer({ className }) {
  return (
    <footer className={`text-center italic font-bold p-2 ${className}`}>
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io/?ref=challenge"
        className="text-blue-700"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a href="https://github.com/Edgar-Avila" className="text-blue-700">
        Edgar Avila
      </a>
    </footer>
  );
}

export default Footer;
