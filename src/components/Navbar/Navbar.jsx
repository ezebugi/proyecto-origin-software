import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

export const Navbar = ({ children, onLogout }) => {
  return (
    <div>
      <div className={styles.containerNavbar}>
        <img
          src="https://res.cloudinary.com/dfbl1tifi/image/upload/v1681849319/6353785_t2bz3d.png"
          alt="Este es el logo de la empresa"
        />
        <h2>Acciones Origin</h2>
        <ul style={{ display: "flex", gap: "30px" }}>
          <li>Acciones</li>
          <li>Cedears</li>
          <li>Bonos</li>
          <li>Fondos</li>
          <li>Cauciones</li>
          <li>Cheques</li>
          <li>Monedas</li>
          <li>Obligaciones negociables</li>
        </ul>
        <button onClick={onLogout}>Cerrar sesión</button>
        <CartWidget />
      </div>
      {children}
    </div>
  );
};
