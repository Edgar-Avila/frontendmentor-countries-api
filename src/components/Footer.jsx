function Footer({ className }) {
  return (
    <footer className={`text-center italic font-bold p-2 ${className} mt-8 dark:bg-dark-els dark:text-dark-text`}>
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io/?ref=challenge"
        className="text-blue-700 dark:text-green-500"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a 
        href="https://github.com/Edgar-Avila" 
        className="text-blue-700 dark:text-green-500"
      >
        Edgar Avila
      </a>
    </footer>
  );
}

export default Footer;
