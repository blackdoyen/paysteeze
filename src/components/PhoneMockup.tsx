import React from 'react';
import { Check } from 'lucide-react';

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] md:w-[320px] h-[580px] bg-black rounded-[45px] border-[10px] border-black dark:border-gray-800 shadow-xl overflow-hidden transform translate-y-6 lg:translate-y-8 mb-7">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-5 bg-black dark:bg-gray-800 rounded-b-2xl"></div>
      <div className="h-full w-full bg-[#E5DDD5] dark:bg-[#0C1317]">
        {/* Header */}
        <div className="bg-[#075E54] dark:bg-[#1F2C34] p-1.5 flex items-center space-x-2">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-[10px] text-white font-bold">P</span>
          </div>
          <div>
            <div className="text-[10px] font-medium text-white">PaySteeze</div>
            <div className="text-[8px] text-gray-200">online</div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="p-1.5 space-y-1.5">
          <div className="flex justify-start">
            <div className="bg-white dark:bg-[#202C33] rounded-lg p-1.5 max-w-[75%] shadow-sm">
              <div className="text-[11px] text-gray-800 dark:text-gray-200">Send ₦400,500 to Nana Kwame (+233•••••9876)?</div>
              <div className="mt-1.5 border-t dark:border-gray-600 pt-1">
                <div className="grid grid-cols-1 divide-y divide-gray-200 dark:divide-gray-600">
                  <button className="text-[#00A884] dark:text-[#00A884] text-[11px] py-1.5 font-medium">YES</button>
                  <button className="text-[#00A884] dark:text-[#00A884] text-[11px] py-1.5 font-medium">NO</button>
                  <button className="text-[#00A884] dark:text-[#00A884] text-[11px] py-1.5 font-medium">CANCEL</button>
                </div>
              </div>
              <div className="flex justify-end items-center mt-0.5">
                <div className="text-[8px] text-gray-500">12:44</div>
              </div>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="bg-white dark:bg-[#202C33] rounded-lg p-1.5 max-w-[75%] shadow-sm">
              <div className="text-[11px] text-gray-800 dark:text-gray-200">Please enter your 4-digit PIN to confirm:</div>
              <div className="flex justify-end items-center">
                <div className="text-[8px] text-gray-500">12:44</div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="bg-[#E7FFDB] dark:bg-[#005C4B] rounded-lg p-1.5 max-w-[75%] shadow-sm">
              <div className="text-[11px] text-gray-800 dark:text-gray-200">****</div>
              <div className="flex justify-end items-center">
                <div className="text-[8px] text-gray-500">12:45</div>
                <Check className="w-2.5 h-2.5 text-[#53BDEB] ml-0.5" />
                <Check className="w-2.5 h-2.5 text-[#53BDEB] -ml-1.5" />
              </div>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="bg-white dark:bg-[#202C33] rounded-lg p-1.5 max-w-[75%] shadow-sm">
              <div className="text-[11px] text-gray-800 dark:text-gray-200">✅ Transaction Successful!</div>
              <div className="text-[10px] text-gray-800 dark:text-gray-200 mt-1 space-y-0.5">
                <div>Amount: GH₵ 3,809.25</div>
                <div>To: Nana Kwame</div>
                <div>Phone: +233•••••9876</div>
                <div className="mt-0.5 pt-0.5 border-t dark:border-gray-600">Current Balance: ₦2,267,800.00</div>
              </div>
              <div className="flex justify-end items-center">
                <div className="text-[8px] text-gray-500">12:45</div>
              </div>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="bg-white dark:bg-[#202C33] rounded-lg p-1.5 max-w-[75%] shadow-sm">
              <div className="text-[11px] text-gray-800 dark:text-gray-200">What would you like to do next?</div>
              <div className="mt-1.5 border-t dark:border-gray-600 pt-1">
                <div className="grid grid-cols-1 divide-y divide-gray-200 dark:divide-gray-600">
                  <button className="text-[#00A884] dark:text-[#00A884] text-[11px] py-1.5 font-medium">Send Funds</button>
                  <button className="text-[#00A884] dark:text-[#00A884] text-[11px] py-1.5 font-medium">Add Funds</button>
                  <button className="text-[#00A884] dark:text-[#00A884] text-[11px] py-1.5 font-medium">Withdraw</button>
                  <button className="text-[#00A884] dark:text-[#00A884] text-[11px] py-1.5 font-medium">Settings</button>
                  <button className="text-[#00A884] dark:text-[#00A884] text-[11px] py-1.5 font-medium">Support</button>
                </div>
              </div>
              <div className="flex justify-end items-center mt-0.5">
                <div className="text-[8px] text-gray-500">12:45</div>
              </div>
            </div>
          </div>
        </div>

        {/* Input */}
        <div className="absolute bottom-0 w-full bg-[#F0F2F5] dark:bg-[#202C33] p-1.5 flex items-center space-x-2">
          <div className="flex-1 bg-white dark:bg-[#2A3942] rounded-full px-3 py-1">
            <div className="text-[10px] text-gray-400">Type a message</div>
          </div>
        </div>
      </div>
    </div>
  );
}