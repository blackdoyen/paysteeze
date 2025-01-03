import React from 'react';

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] md:w-[320px] h-[500px] bg-black rounded-[45px] border-[10px] border-black dark:border-gray-800 shadow-xl overflow-hidden transform lg:translate-y-12">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-5 bg-black dark:bg-gray-800 rounded-b-2xl"></div>
      <div className="h-full w-full bg-white dark:bg-gray-900 overflow-hidden">
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between mb-4">
            <div className="text-xs text-gray-500">PaySteeze</div>
            <div className="text-xs text-green-500">Connected</div>
          </div>
          
          {/* Transaction Success Animation */}
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl space-y-3 animate-fade-in">
            <div className="w-12 h-12 bg-green-500 rounded-full mx-auto flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-gray-800 dark:text-white">Transaction Successful!</div>
              <div className="text-xs text-gray-500">$250.00 sent to John</div>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="space-y-2 mt-4">
            {[
              { name: "Sarah", amount: "-$120.00", time: "2m ago" },
              { name: "Mike", amount: "+$45.50", time: "1h ago" },
            ].map((tx, i) => (
              <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                <div>
                  <div className="text-sm font-medium dark:text-white">{tx.name}</div>
                  <div className="text-xs text-gray-500">{tx.time}</div>
                </div>
                <div className={tx.amount.includes('+') ? 'text-xs text-green-500' : 'text-xs text-gray-600 dark:text-gray-300'}>
                  {tx.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}