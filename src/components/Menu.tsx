 export function Menu() {
  return (
      <ul className="menu">
          <li className="menu-item">
              <button onClick={() => console.log("Copying...")}>Copy</button>
          </li>
          <div className="menu-divider"></div>
          <li className="menu-item">
              <button onClick={() => console.log("Deleting...")}>Delete</button>
          </li>
          <div className="menu-divider"></div>
          <li className="menu-item">
              <button onClick={() => console.log("Renaming...")}>Rename</button>
          </li>
      </ul>
  );
}
