import { useState } from "react";
import {
  Globe,
  Package,
  Truck,
  Plus,
  Minus,
  Send,
  Phone,
  Menu,
  Mail,
  MapPin,
  Facebook,
  ChartBarStacked,
  ShoppingBasket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NewsSlider from "./NewsSlider";
import { HeroImages } from "./HeroImages";
import ProductCarousel from "./ProductsCarousel";
import { Product } from "@/types/product";
import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  //   const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Submitted email:", email);
    setEmail("");
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle contact form submission here
    console.log("Contact form submitted:", {
      contactName,
      contactEmail,
      contactMessage,
    });
    setContactName("");
    setContactEmail("");
    setContactMessage("");
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What countries do you export to?",
      answer:
        "We export to over 100 countries worldwide, covering major markets in North America, Europe, Asia, and Australia. Contact us for specific country information.",
    },
    {
      question: "How do you ensure product quality?",
      answer:
        "We have strict quality control measures in place, including regular supplier audits, pre-shipment inspections, and adherence to international standards and certifications.",
    },
    {
      question: "What are your shipping terms?",
      answer:
        "We offer various shipping terms including FOB, CIF, and DDP. The specific terms depend on the destination and order volume. We'll work with you to determine the best option for your needs.",
    },
    {
      question: "How long does shipping usually take?",
      answer:
        "Shipping times vary depending on the destination and chosen method. Typically, it ranges from 7-30 days. We provide detailed timelines and tracking information for each shipment.",
    },
  ];

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Products", href: "#" },
    { label: "Services", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const products: Product[] = [
    {
      id: "hcnjewkmce",
      name: "Sesame Seeds",
      image: "https://img1.wsimg.com/isteam/ip/1919f62b-8c9f-47b6-a247-7486da73ea0c/sesame-seeds-globexia-1.jpeg/:/cr=t:30%25,l:32.26%25,w:35.47%25,h:40%25/rs=w:388,h:292,cg:true,m/qt=q:31",
      description: "Fresh Sesame Seeds sourced from Nigeria",
    },
    {
      id: "cnjavskcd",
      name: "Dark Nigerian Charcoal",
      image: "https://img1.wsimg.com/isteam/ip/1919f62b-8c9f-47b6-a247-7486da73ea0c/71A3MufPxzL._AC_SL1500_.jpg/:/cr=t:14.57%25,l:26.78%25,w:44.14%25,h:44.25%25/rs=w:388,h:292,cg:true,m/qt=q:31",
      description: "Our dark high quality Nigerian Charcoal",
    },
    {
      id: "cmjcdkcdekmcd",
      name: "Hibiscus Flower",
      image: "https://img1.wsimg.com/isteam/ip/1919f62b-8c9f-47b6-a247-7486da73ea0c/H.jpeg/:/cr=t:27.27%25,l:29.84%25,w:40.31%25,h:45.45%25/rs=w:388,h:292,cg:true,m/qt=q:31",
      description: "Dried hibiscus flower for export.",
    },
    {
      id: "cokmoicei",
      name: "Dried Ginger",
      image: "https://img1.wsimg.com/isteam/ip/1919f62b-8c9f-47b6-a247-7486da73ea0c/ginger.webp/:/cr=t:19.35%25,l:19.56%25,w:80.44%25,h:80.65%25/rs=w:388,h:292,cg:true,m/qt=q:31",
      description: "Organic Dried Ginger",
    },
    {
      id: "mckmookmce",
      name: "Cashew Nuts",
      image: "https://img1.wsimg.com/isteam/ip/1919f62b-8c9f-47b6-a247-7486da73ea0c/cashhheww.jpeg/:/cr=t:0%25,l:35.45%25,w:46.47%25,h:100%25/rs=w:388,h:292,cg:true/qt=q:31",
      description: "Organic Cashew Nuts.",
    },
    {
      id: "ckmwkmckc",
      name: "Soya Beans supply & Export",
      image: "https://img1.wsimg.com/isteam/ip/1919f62b-8c9f-47b6-a247-7486da73ea0c/soybeans-globexia-4.jpeg/:/cr=t:27.88%25,l:30.38%25,w:39.24%25,h:44.25%25/rs=w:388,h:292,cg:true,m/qt=q:31",
      description: "Soya Beans ready for supply & Export",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <ShoppingBasket className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">
              ARTESANA
            </span>
          </div>
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-gray-900"
              >
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
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900"
                  >
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Featured Products
        </h2>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Global Reach",
                description:
                  "Access markets worldwide with our extensive network.",
              },
              {
                icon: Truck,
                title: "Efficient Logistics",
                description: "Streamlined shipping and delivery processes.",
              },
              {
                icon: Package,
                title: "Custom Packaging",
                description: "Tailored packaging solutions for your products.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
              >
                <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="flex justify-between items-center w-full px-4 py-4 sm:px-6 text-left"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
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
      {/* Contact Us Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact  Form */}
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
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Get in touch</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">info@artesana.com.ng</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">123 Export Street, Global City, EX 12345</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Business Hours</h4>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
              <div className="mt-6">
                <Button
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                  onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Let's talk on WhatsApp!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Newsletter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="newsletter-email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email Address
              </label>
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
              <p className="text-gray-400">Artesana is a leading provider of export solutions, connecting businesses worldwide with high-quality products and services.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Products</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400">123 Export Street<br />Global City, EX 12345<br />contact@artesana.com.ng</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col items-center">
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <TwitterLogoIcon className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <InstagramLogoIcon className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
            <p className="text-gray-400">&copy; 2024 Artesana. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
