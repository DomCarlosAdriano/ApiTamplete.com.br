import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import { supabase } from "./../../supabaseClient";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Verifica se o usuário está autenticado
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
    };

    fetchUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    // Limpa o listener quando o componente é desmontado
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <i className="fa-solid fa-cube"></i>
          <h1>ApiTamplate.com.br</h1>
        </div>

        <div className={styles.menuContainer}>
          {/* Menu Desktop */}
          <nav className={styles.nav}>
            {user ? (
              <>
                <a href="/home">Tamplates</a>
                <a href="#">Docs</a>
                <a href="#">Support</a>
                <a href="#">Conta</a>
                <a className={styles.logout} onClick={handleLogout} >Sair</a>
              </>
            ) : (
              <>
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">Docs</a>
                <a href="#">Support</a>
                <a href="/login">Login</a>
                <a href="/register" className={styles.getStarted}>
                  Cadastre-se Agora
                </a>
              </>
            )}
          </nav>
        </div>

        {/* Botão Mobile */}
        <div
          className={styles.mobileMenuIcon}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <nav className={styles.mobileMenu}>
           {user ? (
              <>
                <a href="/home">Tamplates</a>
                <a href="#">Docs</a>
                <a href="#">Support</a>
                <a href="#">Conta</a>
                <a className={styles.logout} onClick={handleLogout}>Sair</a>
              </>
            ) : (
              <>
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">Docs</a>
                <a href="#">Support</a>
                <a href="/login">Login</a>
                <a href="/register" className={styles.getStarted}>
                  Cadastre-se Agora
                </a>
              </>
            )}
        </nav>
      )}
    </header>
  );
}
