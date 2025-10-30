import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Eye, Lock, Database } from 'lucide-react'

const Privacy = () => {
  const sections = [
    {
      icon: <Database className="w-6 h-6" />,
      title: 'No Data Collection',
      content: 'Muslim Pro AI does not collect, store, or share any personal information. Your conversations are not saved to our servers.',
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'No Authentication Required',
      content: 'You can use Muslim Pro AI without creating an account or providing any personal details. Simply start chatting.',
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Session Privacy',
      content: 'Your chat sessions exist only in your browser and are cleared when you refresh or close the page.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Third-Party API',
      content: 'We use an external AI API to process your questions. Please note that your queries are sent to this service for processing.',
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Privacy Policy</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-400">
              Your privacy is important to us
            </p>
          </div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-effect rounded-2xl p-8 mb-12"
          >
            <p className="text-gray-300 leading-relaxed mb-4">
              At Muslim Pro AI, we are committed to protecting your privacy. This privacy policy explains how we handle your information when you use our service.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Last updated: October 30, 2025
            </p>
          </motion.div>

          {/* Privacy Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6 mb-12"
          >
            {sections.map((section, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 10 }}
                className="glass-effect rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{section.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-effect rounded-2xl p-8 mb-8"
          >
            <h2 className="text-2xl font-semibold mb-4">Cookies and Local Storage</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Muslim Pro AI does not use cookies or local storage to track you. Any data stored in your browser is solely for the functionality of the application during your current session.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Changes to This Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center p-6 glass-effect rounded-xl"
          >
            <h3 className="text-xl font-semibold mb-3">Questions?</h3>
            <p className="text-gray-400">
              If you have any questions about this privacy policy or your data, please contact the creator:{' '}
              <span className="text-purple-400 font-semibold">suadatbiniqbal@outlook.com</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Privacy
