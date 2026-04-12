import { Routes, Route } from "react-router-dom"
import { Login } from "./pages/Login/Login"
import { Register } from "./pages/Register/Register"
import { Dashboard } from "./pages/Dashboard/Dashboard"
import { CreateOrder } from "./pages/CreateOrder/CreateOrder"
import { CreateUser } from "./pages/CreateUser/CreateUser"
import { Menu } from "./pages/Menu/Menu"
import { ViewOrders } from "./pages/ViewOrders/ViewOrders"
import { Index } from "./pages/Index/Index"

function App() {

  return (
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-order" element={<CreateOrder />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/view-orders" element={<ViewOrders />} />
      </Routes>
  )
}

export default App
