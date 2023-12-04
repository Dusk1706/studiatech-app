import { useStateProvider } from "../context/StateContext";
import { reducerCases } from "../context/constants";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";

function Logout() {
  const [cookies, setCookies, removeCookie] = useCookies();
  const [{}, dispatch] = useStateProvider();

  const router = useRouter();
  useEffect(() => {
    removeCookie("jwt");
    dispatch({ type: reducerCases.SET_USER, userInfo: undefined });
    window.location.href = window.location.origin;
  }, [removeCookie, dispatch, router]);
  return (
    <div className="h-[80vh] flex items-center px-20 pt-20 flex-col">
      <h1 className="text-4xl text-center">
        Cierre de sesión exitoso. Estas siendo redirigido a la pagina principal.
      </h1>
    </div>
  );
}

export default Logout;