import { useState } from "react"
import { DataTable } from "@/components/Datatable"
import { articles } from "@/Data/Articles"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { IconBrandWordpress } from "@tabler/icons-react"
import type { ColumnDef } from "@/components/Datatable"

// Define the Article type according to your data structure
type Article = {
  title: string
  keyword: string
  words: number
  createdOn: string
  status: string
  // add other fields if needed
}

const TABS = [
  { value: "generated", label: "Generated Articles" },
  { value: "published", label: "Published Articles" },
  { value: "scheduled", label: "Scheduled Articles" },
  { value: "archived", label: "Archived Articles" },
]

export function ArticlesPage() {
  const [tab, setTab] = useState("generated")
  const [search, setSearch] = useState("")

  // Filter articles by tab and search
  const filtered = articles
    .filter((a: Article) => a.status === tab)
    .filter((a: Article) =>
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.keyword.toLowerCase().includes(search.toLowerCase())
    )

  // Table columns
  const columns: ColumnDef<Article>[] = [
    {
      accessorKey: "title",
      header: "Article Title",
      cell: ({ row }) => (
        <span className="font-medium">{row.original.title}</span>
      ),
    },
    {
      accessorKey: "keyword",
      header: "Keyword [Traffic]",
      cell: ({ row }) => (
        <span>{row.original.keyword}</span>
      ),
    },
    {
      accessorKey: "words",
      header: "Words",
      cell: ({ row }) => row.original.words,
    },
    {
      accessorKey: "createdOn",
      header: "Created On",
      cell: ({ row }) => row.original.createdOn,
    },
    {
      id: "action",
      header: "Action",
      cell: ({ row }) => (
        <Button size="sm" variant="outline">
          View
        </Button>
      ),
    },
    {
      id: "publish",
      header: "Publish",
      cell: ({ row }) => (
        <IconBrandWordpress className="text-blue-500" />
      ),
    },
  ]

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Articles</h1>
      <Tabs value={tab} onValueChange={setTab} className="mb-4 flex justify-center">
        <TabsList>
          {TABS.map(t => (
            <TabsTrigger key={t.value} value={t.value}>
              {t.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <div className="flex items-center justify-between mb-4">
        <Input
          placeholder="Search for Title & Keywords..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-80"
        />
        <Badge variant="secondary">
          Total {filtered.length} Article Titles
        </Badge>
      </div>
      <DataTable columns={columns} data={filtered} />
    </div>
  )
}