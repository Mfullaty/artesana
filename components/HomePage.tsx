import { useState } from 'react'
import { ChevronRight, Globe, Package, Truck, Plus, Minus, Send, Phone, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import NewsSlider from './NewsSlider'
import { HeroImages } from './HeroImages'
import ProductCarousel from './ProductsCarousel'
import { Product } from '@/types/product'

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactMessage, setContactMessage] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Submitted email:', email)
    setEmail('')
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle contact form submission here
    console.log('Contact form submitted:', { contactName, contactEmail, contactMessage })
    setContactName('')
    setContactEmail('')
    setContactMessage('')
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "What countries do you export to?",
      answer: "We export to over 100 countries worldwide, covering major markets in North America, Europe, Asia, and Australia. Contact us for specific country information."
    },
    {
      question: "How do you ensure product quality?",
      answer: "We have strict quality control measures in place, including regular supplier audits, pre-shipment inspections, and adherence to international standards and certifications."
    },
    {
      question: "What are your shipping terms?",
      answer: "We offer various shipping terms including FOB, CIF, and DDP. The specific terms depend on the destination and order volume. We'll work with you to determine the best option for your needs."
    },
    {
      question: "How long does shipping usually take?",
      answer: "Shipping times vary depending on the destination and chosen method. Typically, it ranges from 7-30 days. We provide detailed timelines and tracking information for each shipment."
    }
  ]

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Products", href: "#" },
    { label: "Services", href: "#" },
    { label: "Contact", href: "#" },
  ]

  const products: Product[] = [
    {
      name: 'Organic Mango',
      image: '/images/mango.jpg',
      description: 'Fresh organic mango from Nigeria.',
    },
    {
      name: 'Shea Butter',
      image: '/images/shea-butter.jpg',
      description: 'Pure organic shea butter.',
    },
    {
      name: 'Hibiscus Flower',
      image: '/images/hibiscus-flower.jpg',
      description: 'Dried hibiscus flower for export.',
    },
    {
      name: 'Ginger',
      image: '/images/ginger.jpg',
      description: 'Organic ginger root.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">GlobalExport</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-gray-600 hover:text-gray-900">
                {item.label}
              </a>
            ))}
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} className="text-gray-600 hover:text-gray-900">
                    {item.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* News Plugin */}
      <section>
        <NewsSlider />
      </section>

      {/* Hero Section */}
      <HeroImages />
      {/* <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Exporting Excellence Worldwide</h1>
          <p className="text-xl mb-8 max-w-2xl">Connecting businesses across borders with premium products and reliable services.</p>
          <a href="#" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            Explore Our Products
          </a>
        </div>
      </section> */}

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Products</h2>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {['Electronics', 'Textiles', 'Machinery'].map((product) => (
            <div key={product} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={`/placeholder.svg?height=200&width=400`} alt={product} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product}</h3>
                <p className="text-gray-600 mb-4">High-quality {product.toLowerCase()} for global markets.</p>
                <a href="#" className="text-blue-600 font-semibold flex items-center">
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div> */}
        <ProductCarousel products={products} />
      </section>

      {/* Services */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: 'Global Reach', description: 'Access markets worldwide with our extensive network.' },
              { icon: Truck, title: 'Efficient Logistics', description: 'Streamlined shipping and delivery processes.' },
              { icon: Package, title: 'Custom Packaging', description: 'Tailored packaging solutions for your products.' },
            ].map((service) => (
              <div key={service.title} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="flex justify-between items-center w-full px-4 py-4 sm:px-6 text-left"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                {openFaq === index ? (
                  <Minus className="h-5 w-5 text-blue-600" />
                ) : (
                  <Plus className="h-5 w-5 text-blue-600" />
                )}
              </button>
              {openFaq === index && (
                <div className="px-4 pb-4 sm:px-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
              <form onSubmit={handleContactSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    rows={4}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
            {/* WhatsApp Contact */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-4">Contact via WhatsApp</h3>
              <p className="text-gray-600 mb-6">For quick inquiries, you can reach us directly on WhatsApp. Our team is available to assist you during business hours.</p>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600 transition duration-300 flex items-center justify-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="newsletter-email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
              <input
                type="email"
                id="newsletter-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
            >
              Subscribe to Our Newsletter
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">GlobalExport is a leading provider of export solutions, connecting businesses worldwide with high-quality products and services.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400  hover:text-white">Products</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400">123 Export Street<br />Global City, EX 12345<br />contact@globalexport.com</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">&copy; 2024 GlobalExport. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}