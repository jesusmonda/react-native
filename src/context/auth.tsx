import { useRootNavigation, usePathname, router } from "expo-router";
import React from "react";
import { init } from "../redux/reducers/loginSlice";
import { store } from "../redux/store";
import { Login } from "../types/loginType";

// This hook will protect the route access based on user authentication.
export default function useProtectedRoute(protectedScreen: boolean, user: object | undefined = undefined) {
  const pathname = usePathname();
  const navigationState = useRootNavigation();

  React.useEffect(() => {
    console.log("Accediendo a la url", pathname, "con el usuario", user)

    if (navigationState?.isReady && protectedScreen){
      if (
        // If usernot signed in and the initial segment is not anything in the auth group.
        !user
      ) {
        // Redirect to the login page.
        router.replace('/login');
      } else if (user) {
        // Redirect away from the login page.
        router.replace('/home');
      }
    }
  }, [user, navigationState]);
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
      router.replace('/login');
    },
    user,
  }
}