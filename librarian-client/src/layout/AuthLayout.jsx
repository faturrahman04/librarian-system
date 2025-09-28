import { Outlet, useLocation } from "react-router"

const AuthLayout = () => {

  const location = useLocation();
  const auth = location.pathname == '/login'
  return (
    <div>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        { auth ? 'Login' : 'Sign up' }
      </h2>
      <Outlet />
    </div>
  )
}

export default AuthLayout