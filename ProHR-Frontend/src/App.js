import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouters from "./routers/approuters";
import { AuthProvider } from "./contexts/Authcontext";
function App() {
  return (
    <AuthProvider>
      <AppRouters />
    </AuthProvider>
  );
}

export default App;
