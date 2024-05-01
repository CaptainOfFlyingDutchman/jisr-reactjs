type MenuProps = {
  fileName: string;
  closeMenu: () => void;
};

export function Menu({ fileName, closeMenu }: MenuProps) {
  return (
    <ul className="menu">
      <li className="menu-item">
        <button
          onClick={() => {
            console.log(`Copying... ${fileName}`);
            closeMenu();
          }}
        >
          Copy
        </button>
      </li>
      <div className="menu-divider"></div>
      <li className="menu-item">
        <button
          onClick={() => {
            console.log(`Deleting... ${fileName}`);
            closeMenu();
          }}
        >
          Delete
        </button>
      </li>
      <div className="menu-divider"></div>
      <li className="menu-item">
        <button
          onClick={() => {
            console.log(`Renaming... ${fileName}`);
            closeMenu();
          }}
        >
          Rename
        </button>
      </li>
    </ul>
  );
}
