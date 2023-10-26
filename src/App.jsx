import './App.css'

function App() {

  return  (
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/book/:username" element={"wait"} />  // mettre page d'accueil
      <Route path="*" element={<ErrorPage />} />

    </Routes>
  )
}

export default App
