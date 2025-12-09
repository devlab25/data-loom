'use client';

import React, { useState } from 'react';
import { Star, Quote, TrendingUp, Clock, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TESTIMONIALS } from '@/lib/constants/business';
import { BUSINESS_INFO } from '@/lib/constants/business';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary-tech/10 text-primary-tech hover:bg-primary-tech/20">
            Testimoni Klien
          </Badge>
          <h2 className="text-responsive-xl font-heading font-bold text-gray-900 mb-4">
            Apa Kata Klien Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lebih dari {BUSINESS_INFO.socialProof.clientsServed} bisnis telah mempercayai kami untuk 
            mengubah data mereka menjadi wawasan berharga. Ini adalah kisah sukses mereka.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="mb-16">
          <Card className="bg-gradient-to-br from-primary-tech/5 to-accent-affordable/5 border-0 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div className="space-y-6">
                  <Quote className="w-12 h-12 text-primary-tech opacity-20" />
                  
                  <blockquote className="text-2xl text-gray-900 font-medium leading-relaxed">
                    "{TESTIMONIALS[activeTestimonial].content}"
                  </blockquote>
                  
                  <div className="flex items-center space-x-4">
                    {renderStars(TESTIMONIALS[activeTestimonial].rating)}
                    <span className="text-gray-600">
                      {TESTIMONIALS[activeTestimonial].rating}.0/5.0
                    </span>
                  </div>
                  
                  <div>
                    <div className="font-semibold text-gray-900 text-lg">
                      {TESTIMONIALS[activeTestimonial].name}
                    </div>
                    <div className="text-gray-600">
                      {TESTIMONIALS[activeTestimonial].role} at {TESTIMONIALS[activeTestimonial].company}
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {Object.entries(TESTIMONIALS[activeTestimonial].metrics).map(([key, value]) => (
                    <Card key={key} className="bg-white shadow-lg">
                      <CardContent className="p-6 text-center">
                        <div className="mb-2">
                          {key === 'timeSaved' && <Clock className="w-8 h-8 text-blue-500 mx-auto" />}
                          {key === 'accuracy' && <Award className="w-8 h-8 text-green-500 mx-auto" />}
                          {key === 'roi' && <TrendingUp className="w-8 h-8 text-orange-500 mx-auto" />}
                          {key === 'revenueIncrease' && <TrendingUp className="w-8 h-8 text-purple-500 mx-auto" />}
                          {key === 'decisionSpeed' && <Clock className="w-8 h-8 text-red-500 mx-auto" />}
                          {key === 'clientSatisfaction' && <Users className="w-8 h-8 text-yellow-500 mx-auto" />}
                          {key === 'efficiency' && <TrendingUp className="w-8 h-8 text-indigo-500 mx-auto" />}
                          {key === 'reportQuality' && <Award className="w-8 h-8 text-pink-500 mx-auto" />}
                          {key === 'support' && <Users className="w-8 h-8 text-teal-500 mx-auto" />}
                        </div>
                        <div className="text-2xl font-bold text-gray-900 mb-1">
                          {value}
                        </div>
                        <div className="text-sm text-gray-600 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-2 mb-12">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === activeTestimonial ? 'bg-primary-tech' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
                index === activeTestimonial ? 'ring-2 ring-primary-tech' : ''
              }`}
              onClick={() => setActiveTestimonial(index)}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <blockquote className="text-gray-700 mb-6 line-clamp-3">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-tech/10 rounded-full flex items-center justify-center">
                    <span className="text-primary-tech font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-primary-tech">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="mt-16 bg-gradient-to-r from-primary-tech to-accent-affordable rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">
                {BUSINESS_INFO.socialProof.spreadsheetsProcessed}
              </div>
              <div className="text-blue-100">
                Spreadsheet Diproses
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {BUSINESS_INFO.socialProof.clientsServed}+
              </div>
              <div className="text-blue-100">
                Klien Puas
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {BUSINESS_INFO.socialProof.yearsExperience}+
              </div>
              <div className="text-blue-100">
                Tahun Pengalaman
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {BUSINESS_INFO.socialProof.satisfactionRate}%
              </div>
              <div className="text-blue-100">
                Tingkat Kepuasan
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Siap Bergabung dengan Klien Puas Kami?
          </h3>
          <p className="text-gray-600 mb-6">
            Mari kita wujudkan transformasi data untuk bisnis Anda
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-primary-tech hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Mulai Sekarang
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;