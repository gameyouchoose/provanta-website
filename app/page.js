'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, CheckCircle2, Globe, Zap, Brain, BarChart3, Users, Code2 } from 'lucide-react';

const ProvantaWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Competitive Intelligence",
      description: "AI-powered market landscape analysis. Understand competitor moves, market trends, and white spaces before they become obvious.",
      color: "from-blue-600 to-cyan-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "GTM Strategy",
      description: "Domain-expert-led go-to-market acceleration. Bridge the gap between regulatory approval and commercial excellence.",
      color: "from-purple-600 to-pink-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Launch Acceleration",
      description: "Compressed timelines from development to market. Proven playbooks for India, US, and Europe across therapeutic areas.",
      color: "from-emerald-600 to-teal-500"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "AI-Native Operations",
      description: "Intelligent automation for commercial ops. From MAR workflows to real-time market monitoring and execution.",
      color: "from-orange-600 to-red-500"
    }
  ];

  const testimonials = [
    {
      name: "Indegene Collaboration",
      role: "Board-Level AI Governance Initiative",
      quote: "Deep expertise in agentic AI applications for pharmaceutical operations. GxP, MLR, and 21 CFR Part 11 compliance integrated from day one."
    },
    {
      name: "Global GTM Positioning",
      role: "Multi-Market Entry Strategy",
      quote: "Seamless translation of scientific insight into commercial strategy across regulated markets. Domain expertise that scales."
    },
    {
      name: "Emerging Markets Leadership",
      role: "India → US/Europe Expansion",
      quote: "Strategic clarity for Indian pharma companies entering regulated markets. Execution capability that matches ambition."
    }
  ];

  const team = [
    {
      name: "Rashmi Upadhyay",
      role: "Founder & Chief Strategy Officer",
      bio: "18+ years in pharmaceutical commercialization across India, US, and Europe. Ex-Merck Group. PhD Molecular Biology (IISc), MBA (Colorado State).",
      focus: ["Board-level strategy", "AI governance", "Global expansion"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            PROVANTA
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="#services" className="text-sm text-slate-300 hover:text-cyan-400 transition">Services</a>
            <a href="#why" className="text-sm text-slate-300 hover:text-cyan-400 transition">Why Provanta</a>
            <a href="#team" className="text-sm text-slate-300 hover:text-cyan-400 transition">Team</a>
            <a href="#contact" className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-md border-b border-slate-800 p-6 space-y-4">
            <a href="#services" className="block text-slate-300 hover:text-cyan-400">Services</a>
            <a href="#why" className="block text-slate-300 hover:text-cyan-400">Why Provanta</a>
            <a href="#team" className="block text-slate-300 hover:text-cyan-400">Team</a>
            <a href="#contact" className="block px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-sm font-semibold text-center">Get Started</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-slate-800/50 border border-cyan-500/30 rounded-full">
            <span className="text-xs font-semibold text-cyan-400">AI-NATIVE PHARMACEUTICAL COMMERCIALIZATION</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              GTM Excellence
            </span>
            <br />
            <span className="text-slate-100">Powered by Domain Expertise</span>
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Provanta bridges the execution gap between regulatory approval and commercial success. We combine AI-native intelligence with 18+ years of pharmaceutical commercialization expertise across India, US, and Europe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-bold hover:shadow-xl hover:shadow-cyan-500/50 transition transform hover:scale-105 flex items-center justify-center gap-2">
              Start Your GTM Journey <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 border border-slate-600 rounded-lg font-bold hover:border-cyan-500/50 hover:bg-slate-900/50 transition">
              View Case Studies
            </button>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-slate-800/50">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">18+</div>
              <div className="text-sm text-slate-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">3</div>
              <div className="text-sm text-slate-400">Global Markets</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-sm text-slate-400">Launches</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">100%</div>
              <div className="text-sm text-slate-400">AI-Native</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
              What We Do
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Four core capabilities that drive GTM excellence from molecule to market
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                onClick={() => setActiveService(idx)}
                className={`group relative p-8 rounded-xl border transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                  activeService === idx
                    ? 'border-cyan-500/50 bg-slate-800/80 shadow-xl shadow-cyan-500/20'
                    : 'border-slate-700/50 bg-slate-800/30 hover:border-slate-600'
                }`}
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} p-3 mb-4 text-white group-hover:scale-110 transition`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.description}</p>
                <div className="mt-6 flex items-center text-cyan-400 group-hover:gap-2 gap-1 transition">
                  <span className="text-sm font-semibold">Learn more</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Provanta Section */}
      <section id="why" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-black mb-8 leading-tight">
                Why <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Provanta</span>
              </h2>

              <div className="space-y-6">
                {[
                  "Domain experts first, technologists second—AI augments human judgment, never replaces it",
                  "AI-native from day one—designed for pharmaceutical operations (GxP, MAR, HITL workflows)",
                  "Global playbooks—proven across India, US, and Europe regulatory environments",
                  "Launch velocity—compressed timelines from strategy to market execution",
                  "Governance-embedded—21 CFR Part 11, MLR compliance built into every workflow"
                ].map((point, idx) => (
                  <div key={idx} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <p className="text-lg text-slate-300 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-slate-900/80 border border-slate-700 rounded-2xl p-8 space-y-8">
                <div className="flex items-start gap-4">
                  <BarChart3 className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">The GTM Gap</h4>
                    <p className="text-sm text-slate-400">The execution chasm between regulatory approval and commercial success is where pharma loses time, money, and market position.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Our Difference</h4>
                    <p className="text-sm text-slate-400">We don't consult from the sidelines. We embed AI-native intelligence into your operations and accelerate execution with scientific rigor.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
            Proven Track Record
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <div key={idx} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-cyan-500/30 transition">
                <p className="text-slate-300 mb-6 leading-relaxed italic">"{item.quote}"</p>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-cyan-400">★</span>
                  ))}
                </div>
                <h4 className="font-bold text-lg">{item.name}</h4>
                <p className="text-sm text-slate-400">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16">Meet the Team</h2>

          <div className="grid md:grid-cols-1 gap-12">
            {team.map((member, idx) => (
              <div key={idx} className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-2">
                    <h3 className="text-3xl font-bold mb-2">{member.name}</h3>
                    <p className="text-cyan-400 font-semibold mb-4">{member.role}</p>
                    <p className="text-slate-300 text-lg leading-relaxed mb-6">{member.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.focus.map((area, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-full text-sm text-slate-300">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="w-full aspect-square bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl border border-slate-700 flex items-center justify-center">
                      <Users className="w-24 h-24 text-slate-600" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-slate-900/50 border border-slate-700/50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Strategic Advisory Board</h3>
            <p className="text-slate-400 mb-6">Supported by seasoned pharma and healthcare technology advisors from leading global companies, bringing deep expertise in market access, regulatory strategy, and digital transformation.</p>
            <button className="px-6 py-2 border border-cyan-500/50 rounded-lg text-sm font-semibold text-cyan-400 hover:bg-cyan-500/10 transition">
              View Advisory Board
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border-y border-slate-700/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-6">Ready to Close Your GTM Gap?</h2>
          <p className="text-xl text-slate-300 mb-10">
            Let's talk about your commercialization challenge. Whether you're launching in a new market, accelerating a pipeline, or building AI-native operations—we have the expertise and tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="your@email.com"
              className="px-6 py-4 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition w-full sm:flex-1"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-bold hover:shadow-xl hover:shadow-cyan-500/50 transition transform hover:scale-105 whitespace-nowrap">
              Schedule Demo
            </button>
          </div>

          <p className="text-sm text-slate-500 mt-6">We'll respond within 24 hours. No spam, just pharma strategy conversations.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                PROVANTA
              </div>
              <p className="text-sm text-slate-400">AI-native pharmaceutical commercialization.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition">Competitive Intelligence</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">GTM Strategy</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Launch Acceleration</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">AI Operations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#team" className="hover:text-cyan-400 transition">About</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Terms</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; 2026 Provanta Life Tech. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-cyan-400 transition">LinkedIn</a>
              <a href="#" className="hover:text-cyan-400 transition">Twitter</a>
              <a href="#" className="hover:text-cyan-400 transition">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProvantaWebsite;
