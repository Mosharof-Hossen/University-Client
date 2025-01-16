import MainLayout from "./components/layout/MainLayout"
import ProtectedRoute from "./routes/ProtectedRoute"


function App() {

  return (
    <ProtectedRoute>
      <MainLayout></MainLayout>
    </ProtectedRoute>
  )
}

export default App
