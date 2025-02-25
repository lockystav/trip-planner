import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import MainScreenLayout from './layouts/MainScreen.tsx'
import Home from './pages/Home.tsx'
import Board from './pages/Board.tsx'
import Accomodation from './pages/Accomodation.tsx'
import Polls from './pages/Polls.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
		<Routes>
			<Route element={<MainScreenLayout />} >
				<Route index element={<Home />} />
				<Route path="board" element={<Board />} />
				<Route path="accomodation" element={<Accomodation />} />
				<Route path="polls" element={<Polls />} />
			</Route>
		</Routes>
  	</BrowserRouter>
  </StrictMode>
)
