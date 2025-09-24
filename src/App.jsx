import Header from './components/Header'
import Sections from './components/Sections'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Sections />
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}

export default App
