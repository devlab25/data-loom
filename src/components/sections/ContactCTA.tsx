'use client';

import React from 'react';
import { MessageCircle, ArrowRight, BarChart3, Zap, Shield, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BUSINESS_INFO } from '@/lib/constants/business';

const ContactCTA = () => {
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

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Respons Cepat',
      description: 'Tim kami merespons dalam waktu 15 menit saat jam kerja'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: '100% Gratis',
      description: 'Konsultasi tanpa biaya dan tanpa kewajiban'
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: 'Support 24/7',
      description: 'Bantuan teknikal tersedia kapan saja Anda butuhkan'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-tech to-accent-affordable relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-responsive-xl font-heading font-bold text-white mb-6">
            Siap Transformasi Data Anda?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Konsultasikan kebutuhan data Anda dengan tim expert kami. Dapatkan solusi yang tepat untuk bisnis Anda.
          </p>
        </div>

        {/* Main CTA Card */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-2xl max-w-4xl mx-auto">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Column - Content */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2 text-primary-tech">
                  <MessageCircle className="w-6 h-6" />
                  <span className="font-semibold">Konsultasi Gratis</span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                  Mari kita diskusikan bagaimana data dapat mengubah bisnis Anda
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  Tim kami siap membantu Anda memahami potensi data yang Anda miliki dan 
                  memberikan solusi yang tepat untuk kebutuhan bisnis Anda.
                </p>

                {/* Benefits */}
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary-tech/10 rounded-lg flex items-center justify-center text-primary-tech">
                        {benefit.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{benefit.title}</div>
                        <div className="text-sm text-gray-600">{benefit.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Pilih cara konsultasi Anda:
                  </h4>
                  
                  <div className="space-y-4">
                    <Button
                      size="lg"
                      onClick={() => handleWhatsAppClick('Halo Data Loom! Saya mau konsultasi gratis untuk analisis data saya.')}
                      className="w-full bg-green-500 hover:bg-green-600 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp Sekarang
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    
                    <div className="text-center text-gray-500 text-sm">
                      atau
                    </div>
                    
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => scrollToSection('pricing')}
                      className="w-full border-2 border-primary-tech text-primary-tech hover:bg-primary-tech hover:text-white py-4 text-lg font-semibold transition-all duration-300"
                    >
                      <BarChart3 className="w-5 h-5 mr-2" />
                      Lihat Paket Harga
                    </Button>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="text-center space-y-2">
                  <div className="text-sm text-gray-600">
                    Jam kerja: {BUSINESS_INFO.businessHours.weekdays}
                  </div>
                  <div className="text-sm text-gray-600">
                    Email: {BUSINESS_INFO.contact.email}
                  </div>
                  <div className="text-sm text-gray-600">
                    Telepon: {BUSINESS_INFO.contact.phone}
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="flex items-center justify-center space-x-2 text-green-600">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm font-medium">Garansi Kepuasan 100%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alternative Contact Methods */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary-tech/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-primary-tech" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">WhatsApp</h4>
              <p className="text-sm text-gray-600 mb-4">Respons tercepat untuk konsultasi cepat</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleWhatsAppClick(WHATSAPP_MESSAGES.greeting)}
                className="border-primary-tech text-primary-tech hover:bg-primary-tech hover:text-white"
              >
                Mulai Chat
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary-tech/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-primary-tech" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Demo Gratis</h4>
              <p className="text-sm text-gray-600 mb-4">Lihat bagaimana kami mengubah data Anda</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleWhatsAppClick('Halo Data Loom! Saya mau demo gratis.')}
                className="border-primary-tech text-primary-tech hover:bg-primary-tech hover:text-white"
              >
                Request Demo
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary-tech/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-6 h-6 text-primary-tech" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Call Back</h4>
              <p className="text-sm text-gray-600 mb-4">Tim kami akan menghubungi Anda</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleWhatsAppClick('Halo Data Loom! Mohon hubungi saya kembali.')}
                className="border-primary-tech text-primary-tech hover:bg-primary-tech hover:text-white"
              >
                Request Call
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;