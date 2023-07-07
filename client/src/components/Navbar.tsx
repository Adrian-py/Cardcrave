import logo from "../assets/logo.png";

function Navbar() {
  return (
    <header className="w-full px-[4.167vw] py-[2.5rem] flex justify-between">
      {/* Logo */}
      <div className="flex justify-start items-center gap-[0.75rem]">
        <img
          src={logo}
          alt="CardCrave Logo"
          className="w-[1.75rem] aspect-square"
        />

        <h1 className="font-bold text-[2rem] text-on-surface">CardCrave</h1>
      </div>

      {/* Sign in and up button */}
      <div className="flex font-[1.25rem] text-on-surface bg-surface-1 rounded-[20px]">
        <a className="px-[2rem] flex justify-center items-center" href="#">
          Login
        </a>

        <a
          className="px-[2rem] py-[1.1rem] bg-primary-variant-darker rounded-[20px]"
          href="#"
        >
          Register
        </a>
      </div>
    </header>
  );
}

export default Navbar;
