// components/AuthCard.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const flipVariants = {
  hidden: { rotateY: 90, opacity: 0 },
  visible: { rotateY: 0, opacity: 1 },
  exit: { rotateY: -90, opacity: 0 },
};

export default function AuthCard() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="font-open-sans flex items-center justify-center backdrop-blur-3xl bg-20 backdrop-filter bg-[#dcdcdc3e] lg:px-8 lg:py-12 rounded-2xl ">
      <motion.div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 sm:p-10 perspective-1000"
        style={{ perspective: 1000 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isLogin ? "login" : "register"}
            variants={flipVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5}}
          >
            {isLogin ? (
              <div>
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Login</h2>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
                  >
                    Log In
                  </button>
                </form>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Register</h2>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                  >
                    Register
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 text-center text-sm text-gray-500">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <button
                onClick={() => setIsLogin(false)}
                className="text-purple-600 hover:underline font-medium"
              >
                Register
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setIsLogin(true)}
                className="text-indigo-600 hover:underline font-medium"
              >
                Log In
              </button>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}
