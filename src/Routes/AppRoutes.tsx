import { ArticlesPage } from '@/components/Articlepage'
import Dashboard from '@/Pages/Dashboard'
import { Routes, Route } from 'react-router-dom'


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path='/articles' element={<ArticlesPage/>}/>
    </Routes>
  )
}
