// src/data/articles.ts
export interface Article {
    id: number;
    title: string;
    keyword: string;
    words: number;
    createdOn: string;
    status: "generated" | "published" | "draft";
}


// / src/data/articles.ts
export interface Article {
    id: number;
    title: string;
    keyword: string;
    words: number;
    createdOn: string;
    status: "generated" | "published" | "draft";
}

export const articles: Article[] = [
    {
        id: 1,
        title: "How to Use React",
        keyword: "react tutorial",
        words: 1200,
        createdOn: "2024-06-01",
        status: "generated",
    },
    {
        id: 2,
        title: "Understanding TypeScript",
        keyword: "typescript basics",
        words: 950,
        createdOn: "2024-06-02",
        status: "published",
    },
    {
        id: 3,
        title: "Mastering Redux for State Management",
        keyword: "redux state",
        words: 1100,
        createdOn: "2024-06-03",
        status: "draft",
    },
    {
        id: 4,
        title: "Building REST APIs with Node.js",
        keyword: "nodejs api",
        words: 1300,
        createdOn: "2024-06-04",
        status: "published",
    },
    {
        id: 5,
        title: "A Guide to CSS Flexbox",
        keyword: "css flexbox",
        words: 800,
        createdOn: "2024-06-05",
        status: "generated",
    },
    {
        id: 6,
        title: "Responsive Web Design Principles",
        keyword: "responsive design",
        words: 1050,
        createdOn: "2024-06-06",
        status: "draft",
    },
    {
        id: 7,
        title: "Getting Started with Next.js",
        keyword: "nextjs guide",
        words: 1150,
        createdOn: "2024-06-07",
        status: "published",
    },
    {
        id: 8,
        title: "JavaScript ES6 Features",
        keyword: "es6 javascript",
        words: 900,
        createdOn: "2024-06-08",
        status: "generated",
    },
    {
        id: 9,
        title: "Deploying Apps with Docker",
        keyword: "docker deployment",
        words: 1250,
        createdOn: "2024-06-09",
        status: "draft",
    },
    {
        id: 10,
        title: "Introduction to GraphQL",
        keyword: "graphql basics",
        words: 1000,
        createdOn: "2024-06-10",
        status: "published",
    },
    {
        id: 11,
        title: "Unit Testing in JavaScript",
        keyword: "javascript testing",
        words: 950,
        createdOn: "2024-06-11",
        status: "generated",
    },
    {
        id: 12,
        title: "Building Mobile Apps with React Native",
        keyword: "react native",
        words: 1400,
        createdOn: "2024-06-12",
        status: "draft",
    },
    {
        id: 13,
        title: "Authentication with JWT",
        keyword: "jwt authentication",
        words: 1100,
        createdOn: "2024-06-13",
        status: "published",
    },
    {
        id: 14,
        title: "Optimizing Web Performance",
        keyword: "web performance",
        words: 1200,
        createdOn: "2024-06-14",
        status: "generated",
    },
    {
        id: 15,
        title: "Introduction to MongoDB",
        keyword: "mongodb basics",
        words: 1000,
        createdOn: "2024-06-15",
        status: "draft",
    },
    {
        id: 16,
        title: "TypeScript Generics Explained",
        keyword: "typescript generics",
        words: 950,
        createdOn: "2024-06-16",
        status: "published",
    },
    {
        id: 17,
        title: "Server-Side Rendering with Next.js",
        keyword: "ssr nextjs",
        words: 1150,
        createdOn: "2024-06-17",
        status: "generated",
    },
    {
        id: 18,
        title: "Using Axios for HTTP Requests",
        keyword: "axios http",
        words: 850,
        createdOn: "2024-06-18",
        status: "draft",
    },
    {
        id: 19,
        title: "Managing Forms in React",
        keyword: "react forms",
        words: 1050,
        createdOn: "2024-06-19",
        status: "published",
    },
    {
        id: 20,
        title: "Introduction to Webpack",
        keyword: "webpack basics",
        words: 900,
        createdOn: "2024-06-20",
        status: "generated",
    },
];

// DataTable expects columns and data props.
// Example columns definition for DataTable:
export const articleColumns = [
    { Header: "ID", accessor: "id" },
    { Header: "Title", accessor: "title" },
    { Header: "Keyword", accessor: "keyword" },
    { Header: "Words", accessor: "words" },
    { Header: "Created On", accessor: "createdOn" },
    { Header: "Status", accessor: "status" },
    // Removed 'limit' column as 'limit' does not exist on Article type
];

// Export both for use in DataTable
export const articleData = articles;

