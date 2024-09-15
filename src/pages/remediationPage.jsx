import React from 'react'
import Sidebar from '@/Components/sidebar';
import Remediate from '@/Components/Remediate';
export default function RemediationPage() {
 return (
   <>
     <main className="flex">
       <Sidebar />
       <div className="flex-1 ml-16 p-4">
        <Remediate/>
       </div>
     </main>
   </>
 );
}
