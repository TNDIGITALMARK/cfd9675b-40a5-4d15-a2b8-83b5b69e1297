'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export function Header() {
  return (
    <header className="bg-racing-navy text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-racing-gold rounded-full flex items-center justify-center">
              <span className="text-racing-navy font-bold text-sm">🏇</span>
            </div>
            <Link href="/" className="font-montserrat font-bold text-xl text-racing-gold">
              TURF KINGS
            </Link>
          </div>

          {/* Navigation Menu */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/race-results" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-racing-gold hover:text-racing-navy focus:bg-racing-gold focus:text-racing-navy focus:outline-none">
                    Race Results
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/upcoming-events" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-racing-gold hover:text-racing-navy focus:bg-racing-gold focus:text-racing-navy focus:outline-none">
                    Upcoming Events
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/horse-profiles" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-racing-gold hover:text-racing-navy focus:bg-racing-gold focus:text-racing-navy focus:outline-none">
                    Horse Profiles
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/betting-odds" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-racing-gold hover:text-racing-navy focus:bg-racing-gold focus:text-racing-navy focus:outline-none">
                    Betting Odds
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Login Button */}
          <Button
            variant="outline"
            className="hidden md:inline-flex border-racing-gold text-racing-gold hover:bg-racing-gold hover:text-racing-navy"
          >
            LOGIN
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-racing-gold hover:bg-racing-gold hover:text-racing-navy"
          >
            ☰
          </Button>
        </div>
      </div>
    </header>
  );
}