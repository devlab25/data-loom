'use client';

import React from 'react';
import { Upload, Search, Cpu, CheckCircle, Headphones, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PROCESS_STEPS } from '@/lib/constants/business';

const ProcessSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getStepIcon = (iconName: string) => {
    const icons = {
      upload: <Upload className="w-6 h-6" />,
      search: <Search className="w-6 h-6" />,
      cpu: <Cpu className="w-6 h-6" />,
      'check-circle': <CheckCircle className="w-6 h-6" />,
      headphones: <Headphones className="w-6 h-6" />
    };
    return icons[iconName as keyof typeof icons] || <Upload className="w-6 h-6" />;
  };

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary-tech/10 text-primary-tech hover:bg-primary-tech/20">
            Proses Kerja
          </Badge>
          <h2 className="text-responsive-xl font-heading font-bold text-gray-900 mb-4">
            Proses Sederhana, Hasil Luar Biasa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami mempermudah proses transformasi data Anda dalam 5 langkah sederhana
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-5 gap-6 mb-16">
          {PROCESS_STEPS.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Step Card */}
              <Card className={`h-full transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                index % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'
              }`}>
                <CardContent className="p-6 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary-tech text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary-tech/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-tech">
                    {getStepIcon(step.icon)}
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {step.description}
                  </p>
                  
                  {/* Duration */}
                  <div className="inline-flex items-center space-x-1 text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    <span>⏱️</span>
                    <span>{step.duration}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Connection Line */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary-tech transform -translate-y-1/2">
                  <ArrowRight className="w-4 h-4 text-primary-tech absolute -top-2 -right-2" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Process Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Left Column - Visual Process */}
          <Card className="bg-gradient-to-br from-primary-tech/5 to-accent-affordable/5 border-2 border-primary-tech/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Bagaimana Prosesnya Berjalan
              </h3>
              
              <div className="space-y-4">
                {PROCESS_STEPS.map((step, index) => (
                  <div key={step.id} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-primary-tech text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {step.id}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {step.description}
                      </p>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <span>⏱️ {step.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Right Column - Benefits */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Mengapa Proses Kami Efektif?
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Transparan</h4>
                      <p className="text-sm text-gray-600">Anda dapat melihat setiap tahap proses</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Cepat</h4>
                      <p className="text-sm text-gray-600">Proses otomatis dengan validasi manual</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Aman</h4>
                      <p className="text-sm text-gray-600">Data Anda dienkripsi dan terlindungi</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Fleksibel</h4>
                      <p className="text-sm text-gray-600">Dapat disesuaikan dengan kebutuhan Anda</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-green-900 mb-3">
                  🎯 Hasil yang Dapat Diandalkan
                </h3>
                <ul className="space-y-2 text-sm text-green-800">
                  <li>• 99.5% akurasi data</li>
                  <li>• Penghematan waktu hingga 80%</li>
                  <li>• ROI rata-rata 300%</li>
                  <li>• Kepuasan klien 98%</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Siap Memulai Proses Transformasi Data Anda?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Mari kita mulai dengan konsultasi gratis. Tim kami akan membantu Anda memahami 
            potensi data dan memberikan solusi yang tepat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-primary-tech hover:bg-primary-dark text-white px-8"
            >
              Mulai Konsultasi Gratis
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('pricing')}
              className="border-2 border-primary-tech text-primary-tech hover:bg-primary-tech hover:text-white px-8"
            >
              Lihat Paket Harga
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;