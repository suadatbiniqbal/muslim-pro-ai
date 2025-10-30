import React from 'react'
import { motion } from 'framer-motion'
import { Moon } from 'lucide-react'

const LoadingSpinner = () => {
  return (
    <div className="flex items-center space-x-2 px-4 py-3">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      >
        <Moon className="w-5 h-5 text-purple-400" />
      </motion.div>
      <div className="flex space-x-1">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-purple-400 rounded-full"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default LoadingSpinner
