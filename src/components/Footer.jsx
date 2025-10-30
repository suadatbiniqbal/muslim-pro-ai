import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Github } from 'lucide-react'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="border-t border-white/10 mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2 text-gray-400">
            <span>© 2025 Muslim Pro AI — Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by</span>
            <a
              href="https://github.com/suadatbiniqbal"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:text-purple-400 transition-colors inline-flex items-center space-x-1"
            >
              <span>SuadatBinIqbal</span>
            </a>
          </div>
          
          {/* GitHub Link with Icon */}
          <motion.a
            href="https://github.com/suadatbiniqbal"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-4 py-2 glass-effect rounded-full hover:border-purple-500/50 transition-all group"
          >
            <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
              Follow on GitHub
            </span>
          </motion.a>

          <p className="text-sm text-gray-500">
            Your intelligent companion for Islamic knowledge
          </p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
