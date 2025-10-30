import React from 'react'
import { motion } from 'framer-motion'
import { User, Bot } from 'lucide-react'

const ChatMessage = ({ message, isUser, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`flex items-start space-x-3 mb-6 ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}
    >
      {/* Avatar */}
      <div
        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
          isUser ? 'bg-white/10' : 'bg-gradient-to-br from-purple-500 to-pink-500'
        }`}
      >
        {isUser ? (
          <User className="w-5 h-5 text-white" />
        ) : (
          <Bot className="w-5 h-5 text-white" />
        )}
      </div>

      {/* Message Bubble */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`flex-1 px-4 py-3 rounded-2xl max-w-[80%] ${
          isUser
            ? 'bg-white/10 text-white ml-auto'
            : 'glass-effect text-gray-100'
        }`}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message}</p>
      </motion.div>
    </motion.div>
  )
}

export default ChatMessage
