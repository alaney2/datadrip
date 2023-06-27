
    import React from 'react';
    import path from 'path';
    import fs from 'fs';
    import PageContent from '@/components/PageContent/PageContent';

    const filename = 'a_quick_introduction_to_adam_optimization_algorithm.md';

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
    