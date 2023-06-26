
    import React from 'react';
    import path from 'path';
    import fs from 'fs';
    import PageContent from '@/components/PageContent/PageContent';

    const filename = 'copula-based_machine_learning_methods.md';

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
    