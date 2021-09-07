// domain.com/news/_name_
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NewsPage (props) {
  const router = useRouter();

  // Any dynamic value leads to this component
  // But we can output different content based on input
  const newsId = router.query.newsId;

  return (<>
    <h1>This is new of id: {newsId}</h1>
    <Link href='../news'><button>Back</button></Link>
  </>)
}