import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Trash2 } from 'lucide-react'
import ChatMessage from '../components/ChatMessage'
import LoadingSpinner from '../components/LoadingSpinner'

const Chat = () => {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom()
    }
  }, [messages])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    
    setMessages((prev) => [...prev, { text: userMessage, isUser: true }])
    setIsLoading(true)

    try {
      const response = await fetch(
        `https://bf31jhdm60.execute-api.eu-west-2.amazonaws.com/dev/ask/${encodeURIComponent(
          userMessage
        )}`,
        {
          headers: {
            Accept: 'application/json',
          },
        }
      )

      const data = await response.json()
      const aiReply = data?.choices?.[0]?.message?.content || 'Sorry, I could not process your request.'

      setMessages((prev) => [...prev, { text: aiReply, isUser: false }])
    } catch (error) {
      console.error('Error:', error)
      setMessages((prev) => [
        ...prev,
        {
          text: 'Sorry, there was an error connecting to the AI. Please try again.',
          isUser: false,
        },
      ])
    } finally {
      setIsLoading(false)
      inputRef.current?.focus()
    }
  }

  const clearChat = () => {
    setMessages([])
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full h-screen flex flex-col pt-16"
      style={{ height: '100vh', height: '100dvh' }}
    >
      {/* Header - Fixed Top */}
      <div className="flex-none w-full px-3 sm:px-4 md:px-6 py-3 sm:py-4 border-b border-white/10 bg-black z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white truncate">
              Muslim Pro AI
            </h1>
            <p className="text-xs sm:text-sm text-gray-400 truncate">
              Ask anything about Islam
            </p>
          </div>
          {messages.length > 0 && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={clearChat}
              className="flex-none p-2 sm:p-2.5 glass-effect rounded-full hover:bg-red-500/20 transition-colors"
              aria-label="Clear chat"
            >
              <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          )}
        </div>
      </div>

      {/* Messages Area - Scrollable */}
      <div className="flex-1 w-full overflow-y-auto overflow-x-hidden">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 py-4">
          {messages.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center min-h-[50vh]"
            >
              <div className="glass-effect rounded-2xl p-4 sm:p-6 md:p-8 w-full max-w-2xl">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 text-center">
                  Welcome to Muslim Pro AI
                </h2>
                <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 text-center">
                  Ask questions about Islamic teachings, Quran, Hadith, or any Islamic topic
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {[
                    'Five pillars of Islam?',
                    'Significance of Ramadan',
                    'About Prophet Muhammad (PBUH)',
                    'Meaning of Tawhid?',
                  ].map((suggestion, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setInput(suggestion)}
                      className="p-3 sm:p-4 glass-effect rounded-lg text-xs sm:text-sm hover:border-purple-500/50 transition-all text-left"
                    >
                      {suggestion}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="space-y-3 sm:space-y-4 pb-4">
              <AnimatePresence>
                {messages.map((msg, index) => (
                  <ChatMessage
                    key={index}
                    message={msg.text}
                    isUser={msg.isUser}
                    index={index}
                  />
                ))}
              </AnimatePresence>
              {isLoading && <LoadingSpinner />}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
      </div>

      {/* Input Box - Fixed Bottom */}
      <div className="flex-none w-full border-t border-white/10 bg-black z-10">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4">
          <form onSubmit={handleSubmit}>
            <div className="glass-effect rounded-xl sm:rounded-2xl p-2 sm:p-3 border border-white/10">
              <div className="flex items-center gap-2 sm:gap-3">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-transparent outline-none text-white placeholder-gray-500 text-sm sm:text-base px-2 py-2"
                  disabled={isLoading}
                  autoComplete="off"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className={`flex-none p-2 sm:p-3 rounded-full transition-all ${
                    input.trim() && !isLoading
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/50'
                      : 'bg-gray-700 opacity-50 cursor-not-allowed'
                  }`}
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  )
}

export default Chat
