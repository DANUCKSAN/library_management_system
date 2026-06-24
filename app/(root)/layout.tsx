import { auth } from '@/auth';
import Header from '@/components/Header'
<<<<<<< HEAD
import React, { ReactNode } from 'react'
import { redirect } from 'next/navigation';




const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  if (!session) redirect("/sign-in");

=======
import { redirect } from 'next/navigation';
import React from 'react'


const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (!session) redirect("/sign-in"); 
>>>>>>> dan
  return (
    <main className="root-container">
      <div className="mx-auto max-w-7xl">
        <Header session={session} />

        <div className="mt-20 pb-20">{children}</div>
      </div>
    </main>
  );
};

<<<<<<< HEAD
export default Layout;
=======
<div className='mt-20 pb-20'>
<Header session={session}   />
 {children}
    </div>
</div>
   </main>
  )
}

export default layout
>>>>>>> dan
