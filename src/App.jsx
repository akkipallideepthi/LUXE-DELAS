import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductGalleryPage from './pages/ProductGalleryPage'
import PDPPage from './pages/PDPPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductGalleryPage />} />
      <Route path="/gallery" element={<ProductGalleryPage />} />
      <Route path="/product/:id" element={<PDPPage />} />
    </Routes>
  )
}
