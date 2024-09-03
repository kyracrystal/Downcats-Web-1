import { Loader2 } from 'lucide-react';
import { SignIn, ClerkLoaded, ClerkLoading } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='min-h-screen grid grid-cols-1 grid-rows-1 bg-[#131316]'>
        <div className='h-full flex items-center justify-center px-4'>
            <div className='flex items-center justify-center'>
                <ClerkLoaded>
                    <SignIn path='/sign-in'/>
                </ClerkLoaded>
                <ClerkLoading>
                    <Loader2 className='animate-spin text-muted-foreground'/>
                </ClerkLoading>
            </div>
        </div>
    </div>
  );
}