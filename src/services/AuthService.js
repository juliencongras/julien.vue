import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

/**
 * Récupère l'utilisateur connecté de manière asynchrone (attend l'init de Firebase)
 */
export const getCurrentUser = () => {
  // onAuthStateChanged est une fonction de Firebase qui renvoie une promesse qui se résout avec 
  // l'utilisateur connecté ou null si aucun utilisateur n'est connecté.
  return new Promise((resolve, reject) => {
    // removeListener est une fonction qui permet de supprimer l'écouteur d'événements une fois que l'utilisateur est récupéré.
    const removeListener = onAuthStateChanged(
      //Dans onAuthStateChanged, on passe en paramètre l'objet auth qui est l'instance de Firebase Auth, 
      // et une fonction de rappel qui sera appelée lorsque l'état de l'utilisateur change (connexion/déconnexion).
      auth,
      (user) => {
        // removeListener est appelée en cas de déconnexion de l'utilisateur.
        removeListener();
        // resolve est une fonction qui permet de résoudre la promesse avec l'utilisateur connecté.
        resolve(user);
      },
      // reject est une fonction qui permet de rejeter la promesse en cas d'erreur.
      reject
    );
  });
};


/**
 * Déconnecte l'utilisateur actuellement authentifié auprès de Firebase
 * @returns {Promise<void>}
 */
export const logout = () => {
  return signOut(auth);
};