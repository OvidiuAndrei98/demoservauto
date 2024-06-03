import { getSession } from "@/actions/login/sessions";
import { redirect } from "next/navigation";
import LoginForm from "./components/LoginForm";

const Login = async () => {
  const session = await getSession();

  if (session.isLoggedIn) {
    redirect("/");
  }

  return (
    <>
      <LoginForm />
    </>
  );
};

export default Login;
