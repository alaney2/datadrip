
    import React from 'react';
    import path from 'path';
    import fs from 'fs';
    import PageContent from '@/components/PageContent/PageContent';

    const filename = 'proximal_gradient_methods_for_nonconvex_problems.md';

    export default function MarkdownPage({ markdownContent }) {
    return <PageContent content={markdownContent} filename={filename} />;
    }

    export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'data', filename);
    const markdownContent = fs.readFileSync(filePath, 'utf8');
    return {
        props: {
        markdownContent,
        },
    };
    }
    