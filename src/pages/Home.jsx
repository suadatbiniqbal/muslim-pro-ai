import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MessageCircle, BookOpen, Shield, Zap, Moon, Star, Github, Code } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Islamic Knowledge',
      description: 'Ask questions about Quran, Hadith, and Islamic teachings',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Instant Responses',
      description: 'Get accurate answers powered by advanced AI technology',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'No Signup Required',
      description: 'Start chatting immediately without any registration',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="pt-16 min-h-screen"
    >
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center"
        >
          {/* Decorative Elements */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Moon className="w-12 h-12 text-purple-400" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-8 h-8 text-yellow-400" />
            </motion.div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Muslim Pro AI
          </h1>

          <p className="text-xl sm:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Your intelligent companion for Islamic knowledge
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/chat"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Start Chatting</span>
            </Link>
          </motion.div>

          {/* GitHub Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <motion.a
              href="https://github.com/suadatbiniqbal/muslim-pro-ai"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-6 py-3 glass-effect rounded-full hover:border-purple-500/50 transition-all group"
            >
              <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                Star on GitHub
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-effect rounded-2xl p-8 text-center group hover:border-purple-500/50 transition-all"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action with Creator Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-32 text-center"
        >
          <div className="glass-effect rounded-3xl p-12 max-w-4xl mx-auto border-2 border-white/10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to learn more about Islam?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Start your journey with Muslim Pro AI today. Ask questions about the Quran, Hadith, Islamic history, and more.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mb-8"
            >
              <Link
                to="/chat"
                className="inline-block px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors"
              >
                Get Started Now
              </Link>
            </motion.div>

            {/* Creator Card */}
            <div className="pt-8 border-t border-white/10">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-3">
                  <Code className="w-6 h-6 text-purple-400" />
                  <div className="text-left">
                    <p className="text-sm text-gray-500">Created by</p>
                    <p className="font-bold text-white">SuadatBinIqbal</p>
                  </div>
                </div>
                <motion.a
                  href="https://github.com/suadatbiniqbal"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 rounded-full hover:bg-white/10 transition-all"
                >
                  <Github className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-400">@suadatbiniqbal</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Home
