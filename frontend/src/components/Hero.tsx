import React from 'react';
import { ArrowRight, Shield, Truck, Zap, Cpu, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import GlowingButton from './GlowingButton';
import TechBackground from './TechBackground';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      <TechBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <AnimatedText 
                text="Next-Gen Laptops for Digital Pioneers"
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              />
              <motion.p 
                className="text-xl text-gray-300 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Experience the future of computing with our cutting-edge collection. 
                From AI-powered gaming rigs to ultra-portable workstations.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <GlowingButton onClick={() => window.location.href = '/products'}>
                <span>Explore Collection</span>
                <ArrowRight className="h-5 w-5 ml-2" />
              </GlowingButton>
              <GlowingButton 
                variant="secondary" 
                onClick={() => window.location.href = '/products?category=gaming'}
              >
                Gaming Laptops
              </GlowingButton>
            </motion.div>

            {/* Features */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Lightning Fast</h3>
                  <p className="text-sm text-gray-300">Next-gen processors</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Protected</h3>
                  <p className="text-sm text-gray-300">3-year warranty</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg">
                  <Truck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Free Delivery</h3>
                  <p className="text-sm text-gray-300">Worldwide shipping</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Tech Showcase */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <div className="text-center space-y-6">
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Cpu className="text-3xl font-bold text-white" />
                </motion.div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-2">AI-Powered Performance</h3>
                  <p className="text-gray-300 mb-4">
                    Experience next-generation computing with our flagship models
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Processing Power</span>
                    <div className="flex space-x-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-8 bg-gradient-to-t from-blue-500 to-purple-500 rounded"
                          initial={{ height: 8 }}
                          animate={{ height: [8, 32, 8] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Graphics</span>
                    <Monitor className="h-6 w-6 text-blue-400" />
                  </div>
                </div>

                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  From $999
                </div>
                
                <GlowingButton onClick={() => window.location.href = '/products'}>
                  Discover More
                </GlowingButton>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


