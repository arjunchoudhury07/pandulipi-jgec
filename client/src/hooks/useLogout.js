import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const logout = () => {
        localStorage.removeItem('pandulipi_user');
        dispatch({ type: 'LOGOUT' });
    }
    return { logout };
}