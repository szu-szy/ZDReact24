import './Header.scss';

type HeaderProps = {
  title: string;
  list: string[];
}

export const Header = ({title, list}: HeaderProps) => {
  return (
    <header>
      <h3>{title}</h3>
      <nav>
        <ul className="nav-list">
          {list.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </nav>
    </header>
  );
}