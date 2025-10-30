import React from 'react'
import { motion } from 'framer-motion'
import { User, Bot } from 'lucide-react'

const ChatMessage = ({ message, isUser, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`flex items-start gap-2 sm:gap-3 ${isUser ? 'flex-row-reverse' : ''}`}
    >
      {/* Avatar */}
      <div
        className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
          isUser ? 'bg-white/10' : 'bg-gradient-to-br from-purple-500 to-pink-500'
        }`}
      >
        {isUser ? (
          <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        ) : (
          <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        )}
      </div>

      {/* Message Bubble */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className={`flex-1 px-3 py-2 sm:px-4 sm:py-3 rounded-2xl max-w-[85%] sm:max-w-[80%] ${
          isUser
            ? 'bg-white/10 text-white'
            : 'glass-effect text-gray-100'
        }`}
      >
        <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap break-words">
          {message}
        </p>
      </motion.div>
    </motion.div>
  )
}

export default ChatMessage
