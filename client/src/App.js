import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Landing,Error,ProtectedRoute,Home,CreatePin,PinDetails,UserPins,CategoryPins,CurrentUserPins} from  "./components/index.js"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/Home" element={
            <ProtectedRoute>
                <Home/>
            </ProtectedRoute>
          }/>
          <Route path="/createPin" element={<CreatePin/>}/>

          <Route path="/pinsDetail/:id" element={<PinDetails/>}/>

          <Route path="/userPins/:userId" element={<UserPins/>}/>

          <Route path="/categoryPins/:category" element={<CategoryPins/>}/>


          <Route path="/currentUserPins" element={<CurrentUserPins/>}/>

          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
