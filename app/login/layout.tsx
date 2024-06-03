const Login = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-slate-100 h-screen flex flex-col items-center py-[50px]">
      <main className="bg-slate-100">{children}</main>
    </div>
  );
};

export default Login;
