'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Globe, Package, TrendingUp, Phone, Mail, MapPin, ChevronLeft, ChevronRight, ArrowRight, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const products = [
  { name: "Organic Spices", image: "/placeholder.svg?height=400&width=600", description: "Ethically sourced, premium quality spices from around the world." },
  { name: "Handcrafted Textiles", image: "/placeholder.svg?height=400&width=600", description: "Exquisite fabrics and garments made by skilled artisans." },
  { name: "Sustainable Furniture", image: "/placeholder.svg?height=400&width=600", description: "Eco-friendly, durable furniture pieces for modern homes." },
  { name: "Gourmet Foods", image: "/placeholder.svg?height=400&width=600", description: "Delectable delicacies and specialty foods from various cuisines." },
  { name: "Artisanal Crafts", image: "/placeholder.svg?height=400&width=600", description: "Unique, handmade decorative items showcasing cultural heritage." },
  { name: "Natural Cosmetics", image: "/placeholder.svg?height=400&width=600", description: "Organic beauty and skincare products made from pure ingredients." },
]

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className} before:content-none z-10 right-4`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <ChevronRight className="w-10 h-10 text-blue-600 bg-white rounded-full p-2 shadow-lg" />
    </div>
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className} before:content-none z-10 left-4`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <ChevronLeft className="w-10 h-10 text-blue-600 bg-white rounded-full p-2 shadow-lg" />
    </div>
  )
}

export function LandingPageComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const sliderRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <Globe className={`h-8 w-8 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
              <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>GlobalExport</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              {['Home', 'Products', 'About Us', 'Contact'].map((item) => (
                <Link key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className={`text-sm font-medium ${isScrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-blue-200'} transition-colors`}>
                  {item}
                </Link>
              ))}
            </nav>
            <Button
              variant="outline"
              className={`md:hidden ${isScrolled ? 'text-gray-900 border-gray-900' : 'text-white border-white'}`}
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-blue-600 text-white p-4 flex flex-col">
          <div className="flex justify-end">
            <Button variant="ghost" onClick={() => setIsMenuOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-grow space-y-8">
            {['Home', 'Products', 'About Us', 'Contact'].map((item) => (
              <Link key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-2xl font-medium" onClick={() => setIsMenuOpen(false)}>
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <main className="flex-1">
        <section id="home" className="relative bg-gray-900 text-white min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/placeholder.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
          </div>
          <div className="relative container mx-auto px-4 py-32 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl mb-6 leading-tight">
                <span className="block text-blue-400">Global Reach,</span>
                <span className="block">Local Excellence</span>
              </h1>
              <p className="mt-6 text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
                Connecting quality products with international markets, ensuring seamless export solutions for businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button size="lg" className="w-full sm:w-auto text-lg bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
                  Explore Our Products
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg text-white border-white hover:bg-white hover:text-gray-900 transition-colors duration-300">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <span className="text-sm mb-2 text-gray-300">Scroll to discover</span>
            <ArrowRight className="h-6 w-6 animate-bounce text-blue-400" />
          </div>
        </section>

        <section id="products" className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-4">Our Premium Products</h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">Discover our curated selection of high-quality products, sourced from the finest suppliers around the globe.</p>
            <div className="product-slider">
              <Slider ref={sliderRef} {...settings}>
                {products.map((product, index) => (
                  <div key={index} className="px-2">
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
                      <Image src={product.image} alt={product.name} width={600} height={400} className="w-full h-64 object-cover" />
                      <div className="p-6">
                        <h3 className="font-bold text-xl mb-2 text-gray-900">{product.name}</h3>
                        <p className="text-gray-700">{product.description}</p>
                        <Button variant="link" className="mt-4 text-blue-600 hover:text-blue-800 transition-colors duration-300">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>

        <section id="about-us" className="py-24 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-1/2 lg:pr-12">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">About GlobalExport</h2>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  With over two decades of experience, GlobalExport has established itself as a leader in the international trade industry. Our commitment to quality, reliability, and customer satisfaction sets us apart in the global marketplace.
                </p>
                <ul className="space-y-6">
                  {[
                    { icon: Globe, text: "Extensive global network spanning 50+ countries" },
                    { icon: Package, text: "Diverse range of high-quality products from trusted suppliers" },
                    { icon: TrendingUp, text: "Consistent growth and adaptation to market trends" },
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="bg-blue-100 rounded-full p-3 mr-4">
                        <item.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <span className="text-lg text-gray-800">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 lg:mt-0 lg:w-1/2">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="About GlobalExport"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-2xl"
                  />
                  <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white p-6 rounded-lg shadow-xl">
                    <p className="text-3xl font-bold">20+</p>
                    <p className="text-sm uppercase tracking-wide">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-4">Get in Touch</h2>
            <p className="text-xl text-center mb-12 max-w-3xl mx-auto">Have questions or ready to start your global journey? Reach out to our expert team today.</p>
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <ul className="space-y-6">
                  {[
                    { icon: Phone, text: "+1 (555) 123-4567" },
                    { icon: Mail, text: "info@globalexport.com" },
                    { icon: MapPin, text: "123 Export Avenue, Global City, 12345" },
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="bg-white rounded-full p-3 mr-4">
                        <item.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <span className="text-lg">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2">
                <form className="space-y-4 bg-white p-8 rounded-lg shadow-xl">
                  <Input type="text" placeholder="Your Name" className="bg-gray-100 border-transparent focus:border-blue-500 focus:ring-blue-500" />
                  <Input type="email" placeholder="Your Email" className="bg-gray-100 border-transparent focus:border-blue-500 focus:ring-blue-500" />
                  <Input type="text" placeholder="Subject" className="bg-gray-100 border-transparent focus:border-blue-500 focus:ring-blue-500" />
                  <Textarea placeholder="Your Message" className="bg-gray-100 border-transparent focus:border-blue-500  focus:ring-blue-500" rows={4} />
                  <Button type="submit" className="w-full bg-blue-600  hover:bg-blue-700 text-white transition-colors duration-300">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Globe className="h-6 w-6 mr-2 text-blue-400" />
                <span className="text-xl font-bold">GlobalExport</span>
              </div>
              <p className="text-gray-400">Your trusted partner in global trade.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'Products', 'About Us', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                  <a key={social} href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">{social}</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            © {new Date().getFullYear()} GlobalExport. All rights reserved.
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .slick-list {
          margin: 0 -10px;
        }
        .slick-slide > div {
          padding: 0 10px;
        }
        .slick-prev,
        .slick-next {
          z-index: 10;
          width: 40px;
          height: 40px;
        }
        .slick-prev {
          left: -10px;
        }
        .slick-next {
          right: -10px;
        }
        .slick-prev:before,
        .slick-next:before {
          display: none;
        }
      `}</style>
    </div>
  )
}