'use client';

import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, Shield, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { BUSINESS_INFO } from '@/lib/constants/business';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = (message: string) => {
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.contact.whatsapp.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigation = [
    { name: 'Beranda', href: '#home' },
    { name: 'Layanan', href: '#services' },
    { name: 'Paket Harga', href: '#pricing' },
    { name: 'Testimoni', href: '#testimonials' },
    { name: 'Proses', href: '#process' },
    { name: 'Kontak', href: '#contact' }
  ];

  const services = [
    'Data Cleaning',
    'Data Visualization',
    'Dashboard Creation',
    'API Integration',
    'Custom Reports',
    'Data Analytics'
  ];

  const trustBadges = [
    { icon: <Shield className="w-5 h-5" />, text: 'AES-256 Encryption' },
    { icon: <CheckCircle className="w-5 h-5" />, text: 'GDPR Compliant' },
    { icon: <CheckCircle className="w-5 h-5" />, text: 'Secure Payment' },
    { icon: <CheckCircle className="w-5 h-5" />, text: '24/7 Support' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-tech rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">DL</span>
              </div>
              <span className="font-heading font-bold text-xl">Data Loom</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transform raw data into business intelligence. Professional and affordable data engineering services for Indonesian businesses.
            </p>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                  <div className="text-primary-tech">{badge.icon}</div>
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-primary-tech transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href.substring(1));
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-primary-tech transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('services');
                    }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-tech" />
                <div>
                  <p className="text-gray-300">{BUSINESS_INFO.contact.phone}</p>
                  <p className="text-sm text-gray-400">WhatsApp Available</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-tech" />
                <p className="text-gray-300">{BUSINESS_INFO.contact.email}</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-tech" />
                <p className="text-gray-300">{BUSINESS_INFO.contact.address}</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary-tech" />
                <div>
                  <p className="text-gray-300">{BUSINESS_INFO.businessHours.weekdays}</p>
                  <p className="text-sm text-gray-400">{BUSINESS_INFO.businessHours.saturday}</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <Button
              onClick={() => handleWhatsAppClick('Halo Data Loom! Saya mau konsultasi gratis.')}
              className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white"
            >
              <Send className="w-4 h-4 mr-2" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Data Loom. All rights reserved.
            </div>
            
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-tech transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-tech transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-tech transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Footer */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center text-xs text-gray-500">
            <p>
              Jasa rekayasa data Indonesia | Data cleaning Excel | Visualisasi data bisnis | 
              Data engineering services | Data analytics Indonesia | Business intelligence Jakarta | 
              Data transformation services | Excel automation Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;