import { useEffect, useState } from 'react';

export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState(ids[0] ?? '');

  useEffect(() => {
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (nodes.length === 0) return;

    const visibility = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibility.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }

        let next = ids[0];
        let best = -1;
        for (const id of ids) {
          const score = visibility.get(id) ?? 0;
          if (score > best) {
            best = score;
            next = id;
          }
        }

        if (best > 0) setActive(next);
      },
      {
        rootMargin: '-18% 0px -42% 0px',
        threshold: [0.1, 0.2, 0.35, 0.5, 0.75],
      },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
