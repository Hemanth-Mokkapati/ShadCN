'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LaptopMinimal, LogOut, Moon, Settings, Sun, User } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { SidebarTrigger } from './ui/sidebar';

const NavBar = () => {
  const { setTheme } = useTheme();
  return (
    <div className=" flex justify-between items-center p-4">
      {/* left */}
      {/* <PanelRightOpen /> */}
      <SidebarTrigger />

      {/* right */}
      <div className="flex align-items gap-4">
        {/* theme */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="size-8">
              <Sun className="h-[1.4rem] w-[1.4rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme('light')}>
              <Sun className="w-1 h-1 mr-2" /> Light
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setTheme('dark')}>
              <Moon className="w-1 h-1 mr-2" /> Dark
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setTheme('system')}>
              {/* <SunMoon className="w-1 h-1 mr-2" /> */}
              <LaptopMinimal className="w-1 h-1 mr-2" />
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* user menu */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="w-6 h-6">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" align="end" className="w-(--radix-dropdown-menu-trigger-width) min-w-35">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="w-1 h-1 mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="w-1 h-1 mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <LogOut className="w-1 h-1 mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default NavBar;
