import { redirect } from "next/navigation";
import { getSession } from "./sessions";

export async function logout() {
  const session = await getSession();
  session.destroy();
  return redirect("/login");
}
