import { useRootNavigation, usePathname, router } from "expo-router";
import { useEffect } from "react";
import { init } from "../redux/reducers/loginSlice";
import { store } from "../redux/store";
import { Login } from "../types/loginType";

// This hook will protect the route access based on user authentication.
export default function useProtectedRoute(protectedScreen: string, user: Login | undefined = undefined) {
  const pathname = usePathname();
  const navigationState = useRootNavigation();

  useEffect(() => {
    console.log("Accediendo a la url", pathname, "con el usuario", user)
    
    if (navigationState?.isReady){
      if (protectedScreen === "autenticated") {
        // TODO Validar token, si es invalido redireccionar a /
        console.log("vista autentificada")
      } else if(protectedScreen === "nonAutenticated") {
        console.log("vista no autentificada", user)
        if (user) {
          router.replace('/');
        }
      }
    }
  });
}

export function useAuth() {
  const user = store.getState()["login"] as Login;

  return {
    signIn: (props: Login) => {
      store.dispatch(init(props));
      router.replace('/home');
    },
    signOut: () => {
      store.dispatch(init(null));
      router.replace('/');
    },
    user,
  }
}