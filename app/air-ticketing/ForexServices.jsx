import Image from 'next/image';

export default function ForexServices() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-black text-lg" style={{ fontFamily: 'Times New Roman, serif' }}>
      <div className="flex flex-col md:flex-row items-center md:justify-between mb-6">
        <h1 className="text-4xl font-bold md:w-1/2">
          Forex Services – <span className="text-orange-500">VJC Overseas</span>
        </h1>
        <Image 
          src="/forex.webp" 
          alt="Forex Trading" 
          width={400} 
          height={250} 
          className="rounded-lg"
        />
      </div>
      
      <p className="mb-4">Welcome to <span className="text-orange-500">VJC Overseas</span>, your trusted partner in navigating the dynamic world of Forex trading...</p>
      
      <h2 className="text-3xl font-bold mt-6">Why Choose <span className="text-orange-500">VJC Overseas</span> for Forex Trading?</h2>
      <ul className="list-disc ml-6 mb-4">
        <li className="text-xl"><strong>Competitive Exchange Rates:</strong> Best value for your trades.</li>
        <li className="text-xl"><strong>Comprehensive Market Access:</strong> Trade major, minor, and exotic currency pairs.</li>
        <li className="text-xl"><strong>Advanced Trading Tools:</strong> Real-time charts, analysis tools, and automation.</li>
        <li className="text-xl"><strong>Educational Resources:</strong> Tutorials, webinars, and market analysis.</li>
        <li className="text-xl"><strong>24/7 Support:</strong> Assistance whenever you need it.</li>
      </ul>
      
      <h2 className="text-3xl font-bold mt-6">What We Offer</h2>
      <ol className="list-decimal ml-6 mb-4">
        <li className="text-xl"><strong>Forex Trading Accounts:</strong> Open demo or live trading accounts.</li>
        <li className="text-xl"><strong>Market Analysis:</strong> Get daily reports and market insights.</li>
        <li className="text-xl"><strong>Currency Pairs:</strong> Trade a variety of global currencies.</li>
        <li className="text-xl"><strong>Automated Trading:</strong> Implement strategies with expert advisors.</li>
        <li className="text-xl"><strong>Risk Management Tools:</strong> Manage exposure with stop-loss and take-profit levels.</li>
        <li className="text-xl"><strong>Forex Hedging:</strong> Protect trades from market volatility.</li>
      </ol>
      
      <h2 className="text-3xl font-bold mt-6">Get Started Today</h2>
      <p className="text-xl mb-4">Open an account, deposit funds, and start trading with <span className="text-orange-500">VJC Overseas</span> today!</p>
      
      <div className="text-center mt-6">
        <button className="bg-orange-500 text-white py-3 px-8 text-xl rounded-lg shadow-md hover:bg-orange-600">
          Start Trading Now
        </button>
      </div>
    </div>
  );
}
