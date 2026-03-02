import React, { useState } from 'react';
import { 
  Truck, 
  Package, 
  Globe, 
  Building2, 
  Search, 
  MapPin, 
  ChevronRight, 
  User,
  Phone,
  ShieldCheck,
  Clock
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('Courier');
  const [pincodes, setPincodes] = useState({ from: '', to: '' });

  const services = [
    {
      id: 'Courier',
      title: 'Courier Services',
      desc: 'Domestic & Express Delivery',
      icon: <Package className="w-8 h-8 text-orange-500" />,
      color: 'border-orange-500',
      btnColor: 'bg-green-600'
    },
    {
      id: 'Transport',
      title: 'Transport Services',
      desc: 'House Shifting & Industrial',
      icon: <Truck className="w-8 h-8 text-blue-500" />,
      color: 'border-blue-500',
      btnColor: 'bg-orange-600'
    },
    {
      id: 'International',
      title: 'International Shipping',
      desc: 'Air & Sea Freight',
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      color: 'border-purple-500',
      btnColor: 'bg-purple-600'
    },
    {
      id: 'Business',
      title: 'Business MSME',
      desc: 'Bulk B2B & Supply Chain',
      icon: <Building2 className="w-8 h-8 text-cyan-500" />,
      color: 'border-cyan-500',
      btnColor: 'bg-blue-600'
    },
    {
      id: 'Track',
      title: 'Track & Trace',
      desc: 'Real-time Shipment Tracking',
      icon: <Search className="w-8 h-8 text-blue-400" />,
      color: 'border-blue-900',
      btnColor: 'bg-blue-900'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation */}
      <nav className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight">Apni Manzil</span>
              <span className="text-[10px] uppercase tracking-widest opacity-80">One Solution For All Deliveries</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
              <a href="#" className="hover:text-blue-200 transition">Home</a>
              <a href="#" className="hover:text-blue-200 transition">Tracking</a>
              <button className="bg-green-500 hover:bg-green-600 px-4 py-1.5 rounded flex items-center gap-2 transition">
                <User size={16} /> Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="py-12 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 italic">Logistics Aggregator Platform</h1>
        <p className="text-gray-600">Manage all your shipping needs in one place</p>
      </header>

      {/* Service Grid */}
      <main className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {services.map((service) => (
            <div 
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`cursor-pointer bg-white rounded-xl shadow-sm border-t-4 ${service.color} p-4 flex flex-col items-center text-center transition-all hover:shadow-md hover:-translate-y-1 ${activeTab === service.id ? 'ring-2 ring-blue-400' : ''}`}
            >
              <div className="mb-4 bg-gray-50 p-3 rounded-full">
                {service.icon}
              </div>
              <h3 className="font-bold text-sm text-gray-800 mb-1">{service.title}</h3>
              <p className="text-[10px] text-gray-500 mb-4">{service.desc}</p>
              <button className={`${service.btnColor} text-white text-[10px] font-bold py-1 px-6 rounded transition opacity-90 hover:opacity-100`}>
                Select
              </button>
            </div>
          ))}
        </div>

        {/* Quick Price Check Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto border border-gray-100">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-blue-600 font-bold flex items-center gap-2">
              <Truck size={20} /> Quick Price Check
            </h2>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-1">
                  <MapPin size={12} /> From Pincode
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. 110001"
                  className="w-full border-b-2 border-gray-200 focus:border-blue-600 outline-none py-2 text-lg font-semibold transition"
                  value={pincodes.from}
                  onChange={(e) => setPincodes({...pincodes, from: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-1">
                  <MapPin size={12} /> To Pincode
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. 400001"
                  className="w-full border-b-2 border-gray-200 focus:border-blue-600 outline-none py-2 text-lg font-semibold transition"
                  value={pincodes.to}
                  onChange={(e) => setPincodes({...pincodes, to: e.target.value})}
                />
              </div>

              <div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-blue-200 transition-all active:scale-95">
                  Get Estimate <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 flex flex-wrap justify-around gap-4 text-[11px] text-blue-800 font-medium">
            <span className="flex items-center gap-1"><ShieldCheck size={14}/> Secure Delivery</span>
            <span className="flex items-center gap-1"><Clock size={14}/> Real-time Tracking</span>
            <span className="flex items-center gap-1"><Phone size={14}/> 24/7 Support</span>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-16 text-center text-gray-400 text-xs">
          <p>© 2026 Apni Manzil - Logistics Aggregator</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600">Terms of Service</a>
            <a href="#" className="hover:text-blue-600">Contact Us</a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
