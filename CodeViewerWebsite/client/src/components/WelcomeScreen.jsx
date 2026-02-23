import { motion } from 'framer-motion'
import { Code2, Sparkles, Rocket, Target, Brain, Trophy } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
}

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export default function WelcomeScreen() {
  const features = [
    { icon: Code2, title: '100+ Problems', description: 'Comprehensive DSA solutions', color: 'from-blue-500 to-cyan-500' },
    { icon: Brain, title: 'Pattern Based', description: 'Learn problem-solving patterns', color: 'from-purple-500 to-pink-500' },
    { icon: Target, title: 'Interview Ready', description: 'Curated for tech interviews', color: 'from-orange-500 to-red-500' },
    { icon: Trophy, title: 'All Topics', description: 'Trees, Graphs, DP & more', color: 'from-green-500 to-emerald-500' },
  ]

  const stats = [
    { label: 'Problems Solved', value: '100+' },
    { label: 'Categories', value: '25+' },
    { label: 'Patterns', value: '15+' },
    { label: 'Data Structures', value: '10+' },
  ]

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-4xl mx-auto text-center py-12"
    >
      {/* Hero section */}
      <motion.div variants={itemVariants} className="mb-12">
        <motion.div 
          variants={floatingVariants}
          animate="animate"
          className="inline-block mb-6"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 blur-3xl opacity-30 rounded-full" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative p-6 rounded-3xl bg-gradient-to-br from-primary-500 via-purple-500 to-pink-500 shadow-2xl"
            >
              <Code2 className="w-16 h-16 text-white" />
            </motion.div>
          </div>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-4"
          variants={itemVariants}
        >
          Welcome to <span className="gradient-text">WinterPep</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          A comprehensive collection of Data Structures & Algorithms solutions, 
          crafted with passion for mastering problem-solving skills.
        </motion.p>
      </motion.div>

      {/* Stats */}
      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-4 rounded-2xl glass border border-slate-200/50 dark:border-slate-700/50"
          >
            <p className="text-3xl font-bold gradient-text">{stat.value}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Features */}
      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="flex items-center gap-4 p-5 rounded-2xl glass border border-slate-200/50 dark:border-slate-700/50 text-left group"
          >
            <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} shadow-lg group-hover:shadow-xl transition-shadow`}>
              <feature.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-white">{feature.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div variants={itemVariants}>
        <motion.div 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 text-white font-medium shadow-lg"
          animate={{ 
            boxShadow: [
              "0 10px 30px rgba(14, 165, 233, 0.3)",
              "0 10px 30px rgba(139, 92, 246, 0.3)",
              "0 10px 30px rgba(236, 72, 153, 0.3)",
              "0 10px 30px rgba(14, 165, 233, 0.3)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Sparkles className="w-5 h-5" />
          <span>Select a problem from the sidebar to begin</span>
          <Rocket className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>
    </motion.div>
  )
}
