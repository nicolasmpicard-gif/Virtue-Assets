import { useWallet } from '@txnlab/use-wallet-react'
import { Link } from 'react-router-dom'

/**
 * Home Page
 * Virtue Assets landing page
 */
export default function Home() {
  const { activeAddress } = useWallet()

  return (
    <div className="bg-indigo-50 dark:bg-indigo-950">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <div className="inline-block mb-4 px-3 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400 text-sm font-medium rounded-full">
            Virtue Assets
          </div>

          <h1 className="mt-4 text-5xl sm:text-6xl font-semibold text-indigo-900 dark:text-white leading-tight tracking-tight">
            Trusted infrastructure for real-world asset tokenization
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-indigo-700 dark:text-indigo-300 max-w-2xl mx-auto leading-relaxed">
            Build, issue, and manage tokenized assets with clarity and control. Designed for operators and institutions exploring real-world asset workflows.
          </p>

          <p className="mt-4 text-sm text-indigo-600 dark:text-indigo-400">
            A streamlined demo environment on Algorand for rapid evaluation and prototyping.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/tokenize"
              className={`px-8 py-3 rounded-lg font-semibold transition text-white shadow-sm ${
                activeAddress
                  ? 'bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400'
                  : 'bg-indigo-300 cursor-not-allowed'
              }`}
            >
              Launch Token
            </Link>

            <a
              className="px-8 py-3 border border-indigo-200 dark:border-indigo-800 text-indigo-900 dark:text-indigo-200 rounded-lg font-semibold hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition"
              target="_blank"
              rel="noreferrer"
              href="https://dev.algorand.co/concepts/assets/overview/"
            >
              Learn the model
            </a>
          </div>

          {!activeAddress && (
            <p className="mt-6 text-indigo-600 dark:text-indigo-400">
              Connect your wallet in the top-right to begin.
            </p>
          )}
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-semibold text-indigo-900 dark:text-white">How it works</h2>
          <p className="mt-3 text-indigo-700 dark:text-indigo-300">
            A clear path from asset definition to on-chain operation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Step 1 */}
          <div className="rounded-xl border border-indigo-100 dark:border-indigo-800 bg-white dark:bg-indigo-900/40 p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-8 w-8 flex items-center justify-center rounded-full bg-amber-500 dark:bg-amber-400 text-white text-sm font-bold">1</span>
              <h3 className="text-lg font-semibold text-indigo-900 dark:text-white">Connect wallet</h3>
            </div>
            <p className="text-sm text-indigo-700 dark:text-indigo-300">
              Authenticate securely using supported Algorand wallets to initiate transactions.
            </p>
          </div>

          {/* Step 2 */}
          <div className="rounded-xl border border-indigo-100 dark:border-indigo-800 bg-white dark:bg-indigo-900/40 p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-8 w-8 flex items-center justify-center rounded-full bg-amber-500 dark:bg-amber-400 text-white text-sm font-bold">2</span>
              <h3 className="text-lg font-semibold text-indigo-900 dark:text-white">Structure asset</h3>
            </div>
            <p className="text-sm text-indigo-700 dark:text-indigo-300">
              Define supply, permissions, and metadata aligned with your real-world asset.
            </p>
          </div>

          {/* Step 3 */}
          <div className="rounded-xl border border-indigo-100 dark:border-indigo-800 bg-white dark:bg-indigo-900/40 p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-8 w-8 flex items-center justify-center rounded-full bg-amber-500 dark:bg-amber-400 text-white text-sm font-bold">3</span>
              <h3 className="text-lg font-semibold text-indigo-900 dark:text-white">Issue on-chain</h3>
            </div>
            <p className="text-sm text-indigo-700 dark:text-indigo-300">
              Mint as an Algorand Standard Asset with predictable and transparent execution.
            </p>
          </div>

          {/* Step 4 */}
          <div className="rounded-xl border border-indigo-100 dark:border-indigo-800 bg-white dark:bg-indigo-900/40 p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-8 w-8 flex items-center justify-center rounded-full bg-amber-500 dark:bg-amber-400 text-white text-sm font-bold">4</span>
              <h3 className="text-lg font-semibold text-indigo-900 dark:text-white">Operate lifecycle</h3>
            </div>
            <p className="text-sm text-indigo-700 dark:text-indigo-300">
              Simulate transfers and manage asset behavior in a controlled environment.
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-indigo-900 dark:text-white">
              Designed for control, governance, and trust
            </h2>
            <p className="mt-4 text-indigo-700 dark:text-indigo-300">
              Core capabilities reflect real operational needs — from permissions to recovery flows.
            </p>

            <ul className="mt-8 space-y-4 text-sm text-indigo-800 dark:text-indigo-300">
              <li className="flex gap-2">
                <span className="text-amber-600 dark:text-amber-400">✓</span>
                Role-based management controls
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600 dark:text-amber-400">✓</span>
                Account-level transfer restrictions
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600 dark:text-amber-400">✓</span>
                Clawback-enabled recovery mechanisms
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600 dark:text-amber-400">✓</span>
                Linked off-chain documentation via metadata
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-indigo-900/40 border border-indigo-100 dark:border-indigo-800 rounded-xl p-8">
            <div className="bg-indigo-50 dark:bg-indigo-900/60 rounded-lg border border-indigo-200 dark:border-indigo-700 p-6">
              <p className="text-xs text-indigo-500 dark:text-indigo-400 mb-4 uppercase tracking-wide">
                Example asset
              </p>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-indigo-500">Asset:</span>{' '}
                  <span className="font-medium text-indigo-900 dark:text-white">Real Estate Token</span>
                </div>
                <div>
                  <span className="text-indigo-500">Symbol:</span>{' '}
                  <span className="font-medium text-indigo-900 dark:text-white">PROPERTY</span>
                </div>
                <div>
                  <span className="text-indigo-500">Supply:</span>{' '}
                  <span className="font-medium text-indigo-900 dark:text-white">1,000,000</span>
                </div>
                <div>
                  <span className="text-indigo-500">Decimals:</span>{' '}
                  <span className="font-medium text-indigo-900 dark:text-white">2</span>
                </div>
                <div>
                  <span className="text-indigo-500">Manager:</span>{' '}
                  <span className="font-medium text-indigo-900 dark:text-white">Connected wallet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-indigo-100 dark:border-indigo-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl font-semibold text-indigo-900 dark:text-white">
            Start building with confidence
          </h2>
          <p className="mt-4 text-indigo-700 dark:text-indigo-300 max-w-2xl mx-auto">
            Explore how real-world assets can be structured, issued, and managed on-chain using a clean, controlled workflow.
          </p>

          <div className="mt-8">
            <Link
              to="/tokenize"
              className={`inline-block px-8 py-3 rounded-lg font-semibold transition ${
                activeAddress
                  ? 'bg-amber-500 text-white hover:bg-amber-600 dark:bg-amber-400 dark:hover:bg-amber-500'
                  : 'bg-amber-300 text-white cursor-not-allowed'
              }`}
            >
              Begin demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}