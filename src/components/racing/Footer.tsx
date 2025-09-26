import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-racing-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-racing-gold rounded-full flex items-center justify-center">
                <span className="text-racing-navy font-bold text-sm">🏇</span>
              </div>
              <span className="font-montserrat font-bold text-xl text-racing-gold">
                TURF KINGS
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your premier destination for comprehensive horse racing coverage, analysis, and live results.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="font-montserrat font-semibold text-racing-gold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><Link href="/races" className="text-gray-300 hover:text-racing-gold text-sm transition-colors">Today's Races</Link></li>
              <li><Link href="/results" className="text-gray-300 hover:text-racing-gold text-sm transition-colors">Results</Link></li>
              <li><Link href="/tracks" className="text-gray-300 hover:text-racing-gold text-sm transition-colors">Track Guide</Link></li>
              <li><Link href="/horses" className="text-gray-300 hover:text-racing-gold text-sm transition-colors">Horse Profiles</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h4 className="font-montserrat font-semibold text-racing-gold mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-racing-gold text-sm transition-colors">About Us</Link></li>
              <li><Link href="/privacy" className="text-gray-300 hover:text-racing-gold text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-racing-gold text-sm transition-colors">Terms of Service</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-racing-gold text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="col-span-1">
            <h4 className="font-montserrat font-semibold text-racing-gold mb-4">
              Connect
            </h4>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm">Email: info@turf-kings.com</p>
              <p className="text-gray-300 text-sm">Phone: (555) 123-RACE</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="w-8 h-8 bg-racing-gold/20 rounded-full flex items-center justify-center hover:bg-racing-gold hover:text-racing-navy transition-colors">
                  𝕏
                </a>
                <a href="#" className="w-8 h-8 bg-racing-gold/20 rounded-full flex items-center justify-center hover:bg-racing-gold hover:text-racing-navy transition-colors">
                  f
                </a>
                <a href="#" className="w-8 h-8 bg-racing-gold/20 rounded-full flex items-center justify-center hover:bg-racing-gold hover:text-racing-navy transition-colors">
                  📷
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-racing-gold/20 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Turf Kings. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Responsible gambling. Must be 18+.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}