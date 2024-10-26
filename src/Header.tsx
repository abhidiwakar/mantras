import logo from "./assets/logo.png";

export default function Header() {
  return (
    <header className="flex p-6 gap-4 sticky top-0 border-b z-[1000] bg-base-100">
      <img src={logo} alt="Dipak" className="size-16 md:size-24 rounded-lg" />
      <div>
        <p className="text-4xl md:text-6xl">Chalisa</p>
        <p className="text-sm md:text-lg">All Hindu Religion Chalisa</p>
      </div>
    </header>
  );
}
