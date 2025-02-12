import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
      <Link href="/week-2">Week 2 Page</Link>
      </p>
      <p>
      <Link href="/week-3">Week 3 Page</Link>
      </p>
      <p>
        <Link href="/week-4">Week 4 Page</Link>
      </p>
    </main>
  );
}