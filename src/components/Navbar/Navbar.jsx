// import { Button } from "@mui/material";
import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import { Outlet, Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className={styles.categories}>
        <div className={styles.containerNavbar}>
          <Link to="/">Origin software</Link>
          <ul style={{ display: "flex", gap: "30px" }}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : styles.noActive
              }
            >
              Cotizaciones
            </NavLink>
            <NavLink
              to="/category/acciones"
              className={({ isActive }) =>
                isActive ? styles.active : styles.noActive
              }
            >
              Acciones
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.noActive
              }
              to="/category/Cedears"
            >
              Cedears
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.noActive
              }
              to="/category/Bonos"
            >
              Bonos
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.noActive
              }
              to="/category/Fondos"
            >
              Fondos
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.noActive
              }
              to="/category/Cauciones"
            >
              Cauciones
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.noActive
              }
              to="/category/Cheques"
            >
              Cheques
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.noActive
              }
              to="/category/Monedas"
            >
              Monedas
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.noActive
              }
              to="/category/Obligaciones negociables"
            >
              Obligaciones negociables
            </NavLink>
          </ul>
          <CartWidget />
        </div>
      </div>
      <Outlet />
    </div>
  );
};
