import { Shield } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-orange-200 bg-orange-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Shield className="h-8 w-8 text-orange-500 mr-2" />
            <span className="text-2xl font-bold text-orange-500">Satark</span>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-4">
            <a href="#" className="text-orange-600 hover:text-orange-800">Privacy Policy</a>
            <a href="#" className="text-orange-600 hover:text-orange-800">Terms of Service</a>
            <a href="#" className="text-orange-600 hover:text-orange-800">Contact Us</a>
          </nav>
        </div>
        <p className="mt-8 text-center text-sm text-orange-600">
          © {new Date().getFullYear()} Satark. All rights reserved. Stay safe, stay informed.
        </p>
      </div>
    </footer>
  )
}