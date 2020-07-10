import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { requestLogout } from "../../firebase/auth";
import { ROUTES } from "../../constants/routes";

const LogoutPage = () => {
  const history = useHistory();

  useEffect(() => {
    const logout = async () => {
      await requestLogout();
    };
    logout();
    history.push(ROUTES.LANDING);
  }, [history]);

  return null;
};

export default LogoutPage;
