import { useEffect, useState } from "react";
import Sidebar from "../../components/SideBar";
import { supabase } from "./../../supabaseClient";
import "./Home.css";

function Home() {
  const [user, setUser] = useState(null);

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


  return (
    <div className="containerHome">
      <Sidebar />
    </div>
  );
}

export default Home;
