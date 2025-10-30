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
  const chatContainerRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
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
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="pt-16 min-h-screen flex flex-col"
    >
      <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold">Chat with Muslim Pro AI</h1>
            <p className="text-gray-400 mt-2">Ask me anything about Islam, Hadith, or Quran</p>
          </div>
          {messages.length > 0 && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={clearChat}
              className="p-3 glass-effect rounded-full hover:bg-red-500/20 transition-colors"
              title="Clear chat"
            >
              <Trash2 className="w-5 h-5" />
            </motion.button>
          )}
        </motion.div>

        {/* Messages Container */}
        <div 
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto mb-6 space-y-4 scroll-smooth"
          style={{ maxHeight: 'calc(100vh - 350px)' }}
        >
          {messages.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center justify-center h-full text-center py-20"
            >
              <div className="glass-effect rounded-3xl p-12 max-w-2xl">
                <h2 className="text-2xl font-semibold mb-4">Welcome to Muslim Pro AI</h2>
                <p className="text-gray-400 mb-8">
                  Start a conversation by asking questions about Islamic teachings, Quran verses, Hadith, or any Islamic topic.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                  {[
                    'What are the five pillars of Islam?',
                    'Explain the significance of Ramadan',
                    'Tell me about Prophet Muhammad (PBUH)',
                    'What is the meaning of Tawhid?',
                  ].map((suggestion, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setInput(suggestion)}
                      className="p-4 glass-effect rounded-xl text-sm hover:border-purple-500/50 transition-all text-left"
                    >
                      {suggestion}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
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
          )}
          {isLoading && <LoadingSpinner />}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          onSubmit={handleSubmit}
          className="glass-effect rounded-2xl p-4 border border-white/10 sticky bottom-0"
        >
          <div className="flex items-center space-x-4">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about Islam, Hadith, or Quran..."
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-500"
              disabled={isLoading}
              autoComplete="off"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              disabled={!input.trim() || isLoading}
              className={`p-3 rounded-full transition-all ${
                input.trim() && !isLoading
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/50'
                  : 'bg-gray-700 opacity-50 cursor-not-allowed'
              }`}
            >
              <Send className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.form>
      </div>
    </motion.div>
  )
}

export default Chat
