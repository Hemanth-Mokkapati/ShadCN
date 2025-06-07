import { ChevronUp, LogOut, ReceiptIndianRupee, User, User2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from './ui/sidebar';

const Footerv1 = () => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton>
              <User2 />
              John Doe
              <ChevronUp className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" side="right">
            <DropdownMenuLabel>
              <div className="flex items-center gap-2">
                <User2 size={20} />
                John Doe
              </div>
              <DropdownMenuSeparator />
            </DropdownMenuLabel>
            <DropdownMenuItem>
              <User />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ReceiptIndianRupee />
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <LogOut /> Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default Footerv1;
