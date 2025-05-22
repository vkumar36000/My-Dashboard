import { DataTable } from '@/components/Datatable'
import { articles } from '@/Data/Articles'
import { AppSidebar } from '@/components/Appsidebar'
import { SidebarProvider } from '@/components/ui/sidebar'

// Map users to the required DataTable shape

export default function Dashboard() {
  return (
    <SidebarProvider>  
     <div className="flex min-h-screen">
       <AppSidebar />
        <main className="flex-1 p-4">
          <DataTable data={articles} columns={[
            { accessorKey: 'id', header: 'ID'},
            { accessorKey: 'title', header: 'Header' },
            // { accessorKey: 'type', header: 'Type' }, // Make sure 'type' exists in Article type
            { accessorKey: 'status', header: 'Status' },
            //            { accessorKey: 'target', header: 'Target' },
            //  { accessorKey: 'limit', header: 'Limit' },
            //            { accessorKey: 'reviewer', header: 'Reviewer' },
          ]} />
        </main>
     </div>
    </SidebarProvider>
  )
}
