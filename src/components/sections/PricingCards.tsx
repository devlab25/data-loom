'use client';

import React, { useState } from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PACKAGES, CURRENCY } from '@/lib/constants/business';
import { BUSINESS_INFO } from '@/lib/constants/business';

const PricingCards = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [hoveredPackage, setHoveredPackage] = useState<string | null>(null);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat(CURRENCY.locale, {
      style: 'currency',
      currency: CURRENCY.code,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleWhatsAppClick = (packageName: string, message: string) => {
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
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary-tech/10 text-primary-tech hover:bg-primary-tech/20">
            Harga Terjangkau
          </Badge>
          <h2 className="text-responsive-xl font-heading font-bold text-gray-900 mb-4">
            Paket yang Sesuai Kebutuhan Anda
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Solusi data engineering yang fleksibel untuk berbagai skala bisnis. 
            Dari startup hingga enterprise, kami punya paket yang tepat untuk Anda.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-lg font-medium ${!isAnnual ? 'text-primary-tech' : 'text-gray-500'}`}>
              Bulanan
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-200 ${
                isAnnual ? 'bg-primary-tech' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-200 ${
                  isAnnual ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg font-medium ${isAnnual ? 'text-primary-tech' : 'text-gray-500'}`}>
              Tahunan
              <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-200">
                Hemat 20%
              </Badge>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {PACKAGES.map((pkg) => (
            <Card
              key={pkg.id}
              className={`relative overflow-hidden transition-all duration-300 ${
                pkg.popular
                  ? 'ring-2 ring-primary-tech shadow-2xl scale-105'
                  : 'shadow-lg hover:shadow-xl hover:scale-102'
              } ${
                hoveredPackage === pkg.id ? 'transform -translate-y-2' : ''
              }`}
              onMouseEnter={() => setHoveredPackage(pkg.id)}
              onMouseLeave={() => setHoveredPackage(null)}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-primary-tech text-white px-4 py-1 rounded-bl-lg">
                  <span className="text-sm font-semibold">Paling Populer</span>
                </div>
              )}

              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {pkg.name}
                </CardTitle>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                
                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">
                      {formatCurrency(isAnnual ? pkg.price.annually / 12 : pkg.price.monthly)}
                    </span>
                    <span className="text-gray-500 ml-2">/bulan</span>
                  </div>
                  {isAnnual && (
                    <p className="text-sm text-green-600 mt-2">
                      Dibayar {formatCurrency(pkg.price.annually)} per tahun
                    </p>
                  )}
                </div>

                <Button
                  size="lg"
                  className={`w-full ${
                    pkg.popular
                      ? 'bg-primary-tech hover:bg-primary-dark text-white'
                      : 'bg-white border-2 border-primary-tech text-primary-tech hover:bg-primary-tech hover:text-white'
                  }`}
                  onClick={() => handleWhatsAppClick(
                    pkg.name,
                    `Halo Data Loom! Saya tertarik dengan paket ${pkg.name}. Bisa dijelaskan lebih detail?`
                  )}
                >
                  {pkg.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Features */}
                <div className="space-y-4">
                  <div className="text-sm font-semibold text-gray-900 mb-2">
                    Yang Anda dapatkan:
                  </div>
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  
                  {/* Limitations */}
                  {pkg.limitations.length > 0 && (
                    <div className="pt-4 border-t border-gray-200">
                      <div className="text-sm font-semibold text-gray-900 mb-2">
                        Keterbatasan:
                      </div>
                      {pkg.limitations.map((limitation, index) => (
                        <div key={index} className="flex items-start space-x-3 text-gray-500">
                          <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-center">•</span>
                          <span className="text-sm">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Trust Indicators */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center space-x-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-center text-sm text-gray-600 mt-2">
                    Dipercaya oleh {BUSINESS_INFO.socialProof.clientsServed}+ klien
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Package CTA */}
        <div className="text-center bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Butuh Solusi Kustom?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Kami juga menyediakan solusi data engineering yang disesuaikan dengan kebutuhan spesifik bisnis Anda. 
            Konsultasikan kebutuhan Anda dengan tim kami.
          </p>
          <Button
            size="lg"
            variant="outline"
            onClick={() => handleWhatsAppClick(
              'Custom',
              'Halo Data Loom! Saya butuh solusi data kustom untuk perusahaan saya.'
            )}
            className="border-2 border-primary-tech text-primary-tech hover:bg-primary-tech hover:text-white px-8"
          >
            Hubungi Sales
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-6 py-3 rounded-full">
            <span className="text-2xl">🛡️</span>
            <span className="font-semibold">Garansi Kepuasan 100% - Uang Kembali</span>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Jika Anda tidak puas dengan layanan kami, kami akan mengembalikan uang Anda tanpa pertanyaan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingCards;