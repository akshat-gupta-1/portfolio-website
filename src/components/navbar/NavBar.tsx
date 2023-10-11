const items = ['home', 'about', 'projects', 'resume'];
const navBarItems = [
  { name: 'home', href: '/' },
  { name: 'about', href: '/about' },
  { name: 'projects', href: '/projects' },
  { name: 'resume', href: '/resume' },
];
interface Props {
  children: React.ReactNode;
}
const NavBar = ({ children }: Props) => {
  return (
    <div className="flex justify-end">
      <ul className="flex sm:space-x-8 space-x-4">
        {navBarItems.map((item) => (
          <li
            key={item.name}
            className="text-text font-semibold cursor-pointer hover:text-primary"
          >
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
        <li>{children}</li>
      </ul>
    </div>
  );
};

export default NavBar;
