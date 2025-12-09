'use client';

import React from 'react';
import { ArrowRight, BarChart3, TrendingUp, Clock, CheckCircle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BUSINESS_INFO } from '@/lib/constants/business';

const Hero = () => {
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

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563EB' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary-tech/10 text-primary-tech px-4 py-2 rounded-full text-sm font-medium">
              <Zap className="w-4 h-4" />
              <span>Professional & Terjangkau</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-responsive-2xl font-heading font-bold text-gray-900 leading-tight">
                Transform Raw Data Into
                <span className="text-primary-tech"> Business Intelligence</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Solusi data engineering profesional untuk bisnis dan profesional di Indonesia. 
                Ubah data mentah menjadi wawasan berharga yang menggerakkan pertumbuhan bisnis Anda.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl">
              <div className="flex items-center space-x-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium">99.5% Akurasi</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <Clock className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-sm font-medium">24 Jam Proses</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <TrendingUp className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-sm font-medium">ROI 300%</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => handleWhatsAppClick('Halo Data Loom! Saya mau analisis data gratis.')}
                className="bg-primary-tech hover:bg-primary-dark text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                Analisis Data Gratis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('pricing')}
                className="border-2 border-primary-tech text-primary-tech hover:bg-primary-tech hover:text-white px-8 py-6 text-lg font-semibold transition-all duration-300"
              >
                Lihat Contoh Hasil
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-tech">500+</div>
                <div className="text-sm text-gray-600">Spreadsheet Diproses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-tech">100+</div>
                <div className="text-sm text-gray-600">Klien Puas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-tech">98%</div>
                <div className="text-sm text-gray-600">Tingkat Kepuasan</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Dashboard Illustration */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-4">
                  {/* Chart Header */}
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Sales Dashboard</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Mock Chart */}
                  <div className="h-48 bg-gradient-to-r from-primary-tech/20 to-accent-affordable/20 rounded-lg flex items-end justify-around p-4">
                    <div className="w-8 bg-primary-tech rounded-t" style={{height: '60%'}}></div>
                    <div className="w-8 bg-primary-tech rounded-t" style={{height: '80%'}}></div>
                    <div className="w-8 bg-accent-affordable rounded-t" style={{height: '45%'}}></div>
                    <div className="w-8 bg-primary-tech rounded-t" style={{height: '90%'}}></div>
                    <div className="w-8 bg-accent-affordable rounded-t" style={{height: '70%'}}></div>
                    <div className="w-8 bg-primary-tech rounded-t" style={{height: '85%'}}></div>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">+24%</div>
                      <div className="text-xs text-gray-600">Revenue</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">1,234</div>
                      <div className="text-xs text-gray-600">Customers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-600">89%</div>
                      <div className="text-xs text-gray-600">Retention</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium">Data Cleaned</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 transform rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium">+300% ROI</span>
                </div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-tech/10 to-accent-affordable/10 rounded-3xl blur-3xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-300 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;