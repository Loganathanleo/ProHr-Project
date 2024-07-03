import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouters from "./routers/approuters";
import { AuthProvider } from "./contexts/AuthContext";
function App() {
  return (
    <AuthProvider>
      <AppRouters />
    </AuthProvider>
  );
}

export default App;
