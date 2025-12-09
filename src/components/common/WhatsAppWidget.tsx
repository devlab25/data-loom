'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BUSINESS_INFO, WHATSAPP_MESSAGES } from '@/lib/constants/business';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isAvailable, setIsAvailable] = useState(true);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Check business hours
    const checkAvailability = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      
      // Sunday (0) or outside business hours
      if (day === 0 || hour < 9 || hour >= 18) {
        setIsAvailable(false);
      } else {
        setIsAvailable(true);
      }
    };

    checkAvailability();
    const interval = setInterval(checkAvailability, 60000); // Check every minute

    // Show notification after 5 seconds
    const notificationTimer = setTimeout(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(notificationTimer);
    };
  }, []);

  const handleWhatsAppClick = (customMessage?: string) => {
    const finalMessage = customMessage || message || WHATSAPP_MESSAGES.greeting;
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.contact.whatsapp.replace(/[^\d]/g, '')}?text=${encodeURIComponent(finalMessage)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  const quickMessages = [
    { text: 'Tanya paket harga', message: WHATSAPP_MESSAGES.packageInterest.replace('{packageName}', 'Professional') },
    { text: 'Konsultasi gratis', message: WHATSAPP_MESSAGES.freeAnalysis },
    { text: 'Solusi kustom', message: WHATSAPP_MESSAGES.customQuote },
  ];

  if (!isOpen) {
    return (
      <>
        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-50">
          {/* Notification */}
          {showNotification && (
            <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-4 mb-2 min-w-[250px] animate-bounce">
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-gray-900">
                  Butuh bantuan dengan data Anda?
                </span>
              </div>
            </div>
          )}

          <Button
            onClick={() => setIsOpen(true)}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 relative group"
            size="lg"
          >
            <MessageCircle className="w-6 h-6" />
            
            {/* Pulse Animation */}
            <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></span>
            
            {/* Availability Indicator */}
            <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
              isAvailable ? 'bg-green-400' : 'bg-gray-400'
            }`}></div>
            
            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white text-sm rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              {isAvailable ? 'Kami tersedia' : 'Kami offline'}
            </div>
          </Button>
        </div>
      </>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80">
      {/* Chat Window */}
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-green-500 text-white p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold">Data Loom Support</div>
              <div className="text-xs text-green-100 flex items-center space-x-1">
                <div className={`w-2 h-2 rounded-full ${isAvailable ? 'bg-white' : 'bg-gray-300'}`}></div>
                <span>{isAvailable ? 'Online - Biasa respons cepat' : 'Offline - Kami balas segera'}</span>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-white/20 p-1"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Business Hours Notice */}
        {!isAvailable && (
          <div className="bg-yellow-50 border-b border-yellow-200 p-3">
            <div className="flex items-center space-x-2 text-yellow-800 text-sm">
              <Clock className="w-4 h-4" />
              <span>
                Jam kerja: {BUSINESS_INFO.businessHours.weekdays} (Senin-Jumat)
              </span>
            </div>
          </div>
        )}

        {/* Welcome Message */}
        <div className="p-4 bg-gray-50">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">DL</span>
            </div>
            <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm">
              <p className="text-sm text-gray-900">
                Halo! 👋 Selamat datang di Data Loom. Ada yang bisa kami bantu terkait jasa data engineering?
              </p>
            </div>
          </div>

          {/* Quick Messages */}
          <div className="space-y-2 mb-4">
            <p className="text-xs text-gray-600 font-medium">Pesan cepat:</p>
            {quickMessages.map((quickMsg, index) => (
              <button
                key={index}
                onClick={() => handleWhatsAppClick(quickMsg.message)}
                className="w-full text-left bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm text-gray-700 hover:text-primary-tech transition-colors duration-200"
              >
                {quickMsg.text}
              </button>
            ))}
          </div>

          {/* Custom Message */}
          <div className="space-y-3">
            <p className="text-xs text-gray-600 font-medium">Ata ketik pesan kustom:</p>
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleWhatsAppClick()}
                placeholder="Ketik pertanyaan Anda..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-tech focus:border-transparent text-sm"
              />
              <Button
                onClick={() => handleWhatsAppClick()}
                disabled={!message.trim()}
                className="bg-green-500 hover:bg-green-600 text-white p-2"
                size="sm"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-xs text-gray-600">
                <CheckCircle className="w-3 h-3 text-green-500" />
                <span>Respons cepat</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-600">
                <CheckCircle className="w-3 h-3 text-green-500" />
                <span>Konsultasi gratis</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-600">
                <CheckCircle className="w-3 h-3 text-green-500" />
                <span>Tidak ada kewajiban membeli</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppWidget;