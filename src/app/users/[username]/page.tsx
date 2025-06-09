import CardList from '@/components/CardList';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { BadgeCheck, Candy, Citrus, Shield } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Progress } from '@/components/ui/progress';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
const SingleUserPage = async ({ params }: { params: Promise<{ username: string }> }) => {
  const { username } = await params;
  const Cusername = username[0].toUpperCase() + username.slice(1);
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{Cusername}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* container */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* left */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* badge container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Badges</h1>
            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck size={36} className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2" />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-sm text-muted-foreground">This user has been verified by the admin.</p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield size={36} className="rounded-full bg-green-800/30 border-1 border-green-800/50 p-2" />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Admin</h1>
                  <p className="text-sm text-muted-foreground">
                    Admin users have access to all features and can manage users.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy size={36} className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2" />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Awarded</h1>
                  <p className="text-sm text-muted-foreground">This user has been awarded for their contributions.</p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus size={36} className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2" />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Popular</h1>
                  <p className="text-sm text-muted-foreground">This user has been popular in the community.</p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>

          {/* information container */}
          <div className="w-full bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-semibold">User Information</h1>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Edit User</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                      This action cannot be undone. This will permanently delete your account and remove your data from
                      our servers.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>

            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">Profie Completion</p>
                <Progress value={66} />
              </div>

              <div className="mt-4">
                <dl className="grid grid-cols-[max-content_1ch_minmax(0,1fr)] gap-x-6 gap-y-2">
                  <dt className="font-medium">Firstname</dt>
                  <dd className="text-center">:</dd>
                  <dd>{Cusername}</dd>

                  <dt className="font-medium">Lastname</dt>
                  <dd className="text-center">:</dd>
                  <dd>Mokkapati</dd>

                  <dt className="font-medium">Username</dt>
                  <dd className="text-center">:</dd>
                  <dd>{username}</dd>

                  <dt className="font-medium">Email</dt>
                  <dd className="text-center">:</dd>
                  <dd className="break-words whitespace-normal text-ellipsis">{username}.mokkapati@gmail.com</dd>

                  <dt className="font-medium">Phone</dt>
                  <dd className="text-center">:</dd>
                  <dd>+91 98765 43210</dd>

                  <dt className="font-medium">Location</dt>
                  <dd className="text-center">:</dd>
                  <dd>Hyderabad, TG</dd>

                  <dt className="font-medium">Role</dt>
                  <dd className="text-center">:</dd>
                  <dd>
                    <Badge variant="default">Admin</Badge>
                  </dd>
                </dl>
              </div>

              <p className="text-sm text-muted-foreground mt-6">Joined on 2025.01.01</p>
              {/* NOTE:Another way to acheive this */}
              {/* <div className="grid grid-cols-[max-content_1ch_1fr] gap-x-2 gap-y-1 text-sm mt-4">
                <div className="font-medium">Username</div>
                <div className="text-center">:</div>
                <div>sumanayana</div>

                <div className="font-medium">Email</div>
                <div className="text-center">:</div>
                <div>sumanayana@gmail.com</div>

                <div className="font-medium">Phone</div>
                <div className="text-center">:</div>
                <div>+91 12345 67890</div>

                <div className="font-medium">Location</div>
                <div className="text-center">:</div>
                <div>Hyderabad, TG</div>

                <div className="font-medium">Role</div>
                <div className="text-center">:</div>
                <div>
                  <span className="bg-muted px-2 py-0.5 rounded text-xs">Admin</span>
                </div>
              </div>
 */}
            </div>
          </div>

          {/* user card container */}
          <div className="w-full bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transactions" />
          </div>
        </div>

        {/* right */}
        <div className="w-full xl:w-2/3 space-y-6">
          {/* user card container */}
          <div className="w-full bg-primary-foreground p-4 rounded-lg">UserCard</div>
          {/* chart container */}
          <div className="w-full bg-primary-foreground p-4 rounded-lg">Chart Container</div>
          {/* user card container */}
        </div>
      </div>
    </div>
  );
};

export default SingleUserPage;
