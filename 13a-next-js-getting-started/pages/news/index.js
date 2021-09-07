// domain.com/news
import React from 'react';
import Link from 'next/link';

export default function NewsPage(props) {
  return (<>
    <h1>News Page</h1>
    <ul>
      <li>
        <Link href='./news/breaking-news'>Breaking News</Link>
      </li>
      <li>
        <Link href='./news/normal-news'>Normal News</Link>
      </li>
    </ul>
  </>)
}