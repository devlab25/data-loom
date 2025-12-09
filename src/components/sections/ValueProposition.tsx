'use client';

import React from 'react';
import { ArrowRight, CheckCircle, TrendingUp, Database, BarChart3, PieChart, Shield, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PROCESS_STEPS, TECHNOLOGY_STACK } from '@/lib/constants/business';
import { BUSINESS_INFO } from '@/lib/constants/business';

const ValueProposition = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const beforeAfterData = [
    {
      before: 'Manual Excel processing',
      after: 'Automated data workflows',
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      before: 'Human errors in data',
      after: '99.5% accuracy guaranteed',
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      before: 'Hours spent on cleaning',
      after: 'Minutes with AI-powered tools',
      icon: <Clock className="w-5 h-5" />
    },
    {
      before: 'Static boring reports',
      after: 'Interactive dashboards',
      icon: <BarChart3 className="w-5 h-5" />
    }
  ];

  const personaContent = [
    {
      title: 'Professionals',
      subtitle: 'Data Analysts & Office Workers',
      description: 'Automate repetitive tasks and focus on strategic analysis',
      features: [
        'Excel automation macros',
        'Custom reporting templates',
        'Data validation rules',
        'Time-saving workflows'
      ],
      color: 'blue',
      icon: <Database className="w-6 h-6" />
    },
    {
      title: 'Business Owners',
      subtitle: 'CEOs & Entrepreneurs',
      description: 'Get actionable insights to drive business growth',
      features: [
        'Executive dashboards',
        'KPI tracking systems',
        'Revenue analytics',
        'Market insights'
      ],
      color: 'green',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Managers',
      subtitle: 'Team & Department Heads',
      description: 'Improve team productivity with automated reporting',
      features: [
        'Team performance metrics',
        'Automated monthly reports',
        'Resource allocation insights',
        'Productivity analytics'
      ],
      color: 'purple',
      icon: <PieChart className="w-6 h-6" />
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-900',
        icon: 'text-blue-600',
        badge: 'bg-blue-100 text-blue-800'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-900',
        icon: 'text-green-600',
        badge: 'bg-green-100 text-green-800'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-purple-900',
        icon: 'text-purple-600',
        badge: 'bg-purple-100 text-purple-800'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary-tech/10 text-primary-tech hover:bg-primary-tech/20">
            Nilai Proposition
          </Badge>
          <h2 className="text-responsive-xl font-heading font-bold text-gray-900 mb-4">
            Transformasi Data yang Nyata
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lihat perbedaan signifikan yang kami bawa untuk proses data bisnis Anda
          </p>
        </div>

        {/* Before/After Comparison */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Sebelum vs Sesudah Data Loom
            </h3>
            <p className="text-gray-600">
              Perubahan nyata yang akan Anda rasakan
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-900 flex items-center">
                  <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    ❌
                  </span>
                  Sebelum Data Loom
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {beforeAfterData.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 text-red-500">
                      {item.icon}
                    </div>
                    <span className="text-red-900">{item.before}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* After */}
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-900 flex items-center">
                  <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    ✅
                  </span>
                  Sesudah Data Loom
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {beforeAfterData.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 text-green-500">
                      {item.icon}
                    </div>
                    <span className="text-green-900">{item.after}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* ROI Calculator */}
        <div className="mb-20">
          <Card className="bg-gradient-to-r from-primary-tech/5 to-accent-affordable/5 border-2 border-primary-tech/20">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  ROI Calculator
                </h3>
                <p className="text-gray-600">
                  Estimasi penghematan waktu dan biaya dengan Data Loom
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary-tech mb-2">20+</div>
                  <div className="text-sm text-gray-600">Jam hemat per minggu</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">300%</div>
                  <div className="text-sm text-gray-600">ROI rata-rata</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">99.5%</div>
                  <div className="text-sm text-gray-600">Akurasi data</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">24jam</div>
                  <div className="text-sm text-gray-600">Waktu proses</div>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                  className="bg-primary-tech hover:bg-primary-dark text-white"
                >
                  Hitung ROI Anda
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Persona-Specific Content */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Solusi untuk Setiap Peran
            </h3>
            <p className="text-gray-600">
              Kami memahami kebutuhan unik setiap profesional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {personaContent.map((persona, index) => {
              const colors = getColorClasses(persona.color);
              return (
                <Card
                  key={index}
                  className={`border-2 ${colors.border} ${colors.bg} hover:shadow-lg transition-shadow duration-300`}
                >
                  <CardHeader>
                    <div className={`w-12 h-12 ${colors.badge} rounded-full flex items-center justify-center mb-4`}>
                      {persona.icon}
                    </div>
                    <CardTitle className={`${colors.text}`}>
                      {persona.title}
                    </CardTitle>
                    <p className="text-sm text-gray-600">{persona.subtitle}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className={`${colors.text}`}>
                      {persona.description}
                    </p>
                    <ul className="space-y-2">
                      {persona.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      size="sm"
                      className={`w-full ${colors.border} ${colors.text} hover:${colors.bg}`}
                      onClick={() => scrollToSection('contact')}
                    >
                      Pelajari Lebih Lanjut
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Powered by Technology
            </h3>
            <p className="text-gray-600">
              Menggunakan tools terkini untuk hasil terbaik
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TECHNOLOGY_STACK.map((tech, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary-tech/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="w-6 h-6 text-primary-tech" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{tech.name}</h4>
                  <p className="text-sm text-gray-600">{tech.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Elements */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Mengapa Mempercayai Data Loom?
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Keamanan Terjamin</h4>
              <p className="text-sm text-gray-600">Data Anda dienkripsi dengan AES-256</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Garansi Kualitas</h4>
              <p className="text-sm text-gray-600">99.5% akurasi atau uang kembali</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Tepat Waktu</h4>
              <p className="text-sm text-gray-600">Proses cepat 24 jam untuk paket standar</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Hasil Terbukti</h4>
              <p className="text-sm text-gray-600">ROI 300% untuk klien kami</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;