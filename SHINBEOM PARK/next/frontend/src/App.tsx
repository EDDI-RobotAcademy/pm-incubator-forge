import './App.css'
import BoardList from './components/BoardList'
import { mockPosts } from './mockData'

function App() {
  
  return (
    <div>
      <BoardList posts={mockPosts} />
    </div>
  )
}

export default App
