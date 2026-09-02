'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Zap, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.subject && !newErrors.message;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setStatus('sending');
    setErrors({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    try {

      const response = await fetch('https://formspree.io/f/xpwoonea', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'soulaimanok@gmail.com',
      href: 'mailto:soulaimanok@gmail.com',
      color: 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900',
    },
    {
      icon: Phone,
      label: 'Phone / WhatsApp',
      value: '+212 773 171 275',
      href: 'https://wa.me/212631843619',
      color: 'bg-emerald-600 text-white',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Morocco',
      href: null,
      color: 'bg-sky-600 text-white',
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="transition-all duration-500">
          {/* Header with badge */}
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
              <Zap className="h-4 w-4" />
              Let&apos;s Connect
            </div>
            
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Get In Touch
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              Have a project in mind? Let&apos;s work together to bring your ideas to life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="relative">
                <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm transition-all dark:border-slate-800 dark:bg-slate-900/85">
                  <div className="mb-4 flex items-center gap-3">
                    <MessageCircle className="h-6 w-6 text-slate-700 dark:text-slate-200" />
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        Let&apos;s Talk
                    </h3>
                  </div>
                  <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                    I&apos;m always interested in hearing about new projects and opportunities. 
                    Whether you have a question or just want to say hi, feel free to reach out!
                  </p>
                </div>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  
                  return (
                    <div
                      key={index}
                      className="group relative transition-colors duration-200 hover:bg-slate-100/70 dark:hover:bg-slate-900/60"
                    >
                      <div className="relative rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
                        <div className="flex items-center gap-4">
                          <div className={`inline-flex rounded-xl p-3 ${info.color}`}>
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <p className="mb-1 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-400">
                              {info.label}
                            </p>
                            {info.href ? (
                              <a
                                href={info.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-slate-900 transition-colors hover:text-slate-600 dark:text-white dark:hover:text-slate-300"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="font-semibold text-slate-900 dark:text-white">
                                {info.value}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quick Contact Button */}
              <a
                href="https://wa.me/212631843619"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-emerald-500"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-gray-900 transition-colors placeholder:text-gray-400 focus:border-slate-900 focus:outline-none dark:bg-slate-800 dark:text-white ${
                      errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-gray-900 transition-colors placeholder:text-gray-400 focus:border-slate-900 focus:outline-none dark:bg-slate-800 dark:text-white ${
                      errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-gray-900 transition-colors placeholder:text-gray-400 focus:border-slate-900 focus:outline-none dark:bg-slate-800 dark:text-white ${
                      errors.subject ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                    }`}
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full resize-none rounded-xl border bg-white px-4 py-3 text-gray-900 transition-colors placeholder:text-gray-400 focus:border-slate-900 focus:outline-none dark:bg-slate-800 dark:text-white ${
                      errors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                    }`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`inline-flex w-full items-center justify-center gap-3 rounded-xl px-8 py-4 font-semibold text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${
                    status === 'success' ? 'bg-emerald-600' : 'bg-slate-900 hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200'
                  }`}
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin relative z-10" />
                      <span className="relative z-10">Sending...</span>
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5 relative z-10" />
                      <span className="relative z-10">Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                      <span className="relative z-10">Send Message</span>
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl animate-pulse">
                      <p className="text-green-700 dark:text-green-400 text-center text-sm font-medium flex items-center justify-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Thank you! I&apos;ll get back to you soon.
                    </p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl animate-pulse">
                    <p className="text-red-700 dark:text-red-400 text-center text-sm font-medium flex items-center justify-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      Oops! Something went wrong. Please try again.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}