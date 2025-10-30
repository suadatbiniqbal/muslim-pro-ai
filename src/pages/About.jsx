import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Code, Sparkles, Moon } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: <Moon className="w-6 h-6" />,
      title: 'Islamic Knowledge Base',
      description: 'Access comprehensive information about Islam, Quran, and Hadith',
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'AI-Powered Responses',
      description: 'Get intelligent, contextual answers to your questions',
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Built with Care',
      description: 'Designed with respect for Islamic values and teachings',
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Modern Technology',
      description: 'Built using React, AI, and modern web technologies',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="pt-16 min-h-screen"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Muslim Pro AI</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Your intelligent companion for exploring and understanding Islamic knowledge
            </p>
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-effect rounded-2xl p-8 mb-12"
          >
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Muslim Pro AI was created to provide an accessible, intelligent platform for Muslims and those interested in learning about Islam. Our goal is to make Islamic knowledge easily accessible through the power of artificial intelligence.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Whether you're seeking guidance on Islamic teachings, looking to understand the Quran better, or exploring Hadith, Muslim Pro AI is here to assist you with accurate and thoughtful responses.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-xl p-6 hover:border-purple-500/50 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Creator Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-effect rounded-2xl p-8 text-center border-2 border-purple-500/30"
          >
            <h2 className="text-2xl font-semibold mb-4">Created By</h2>
            <div className="flex items-center justify-center space-x-2 text-xl">
              <Code className="w-6 h-6 text-purple-400" />
              <span className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                SuadatBinIqbal
              </span>
            </div>
            <p className="text-gray-400 mt-4">
              Built with passion and dedication to serve the Muslim community
            </p>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-xl"
          >
            <p className="text-sm text-gray-300 text-center">
              <strong>Note:</strong> While Muslim Pro AI strives to provide accurate information, always consult qualified Islamic scholars for important religious matters and personal guidance.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About
