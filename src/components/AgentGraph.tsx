/**
 * Signature visual: a labeled agent-orchestration graph — Manager coordinating
 * Research / Coding / Writer agents that feed into a Review step. Purely
 * decorative (aria-hidden) since the hero copy already conveys the meaning.
 */
export function AgentGraph() {
  const nodes = [
    { id: 'manager', label: 'Manager', x: 600, y: 70 },
    { id: 'research', label: 'Research', x: 380, y: 250 },
    { id: 'coding', label: 'Coding', x: 600, y: 250 },
    { id: 'writer', label: 'Writer', x: 820, y: 250 },
    { id: 'review', label: 'Review', x: 600, y: 430 },
  ]

  const edges: Array<[string, string, string]> = [
    ['manager', 'research', '0s'],
    ['manager', 'coding', '0.8s'],
    ['manager', 'writer', '1.6s'],
    ['research', 'review', '2.4s'],
    ['coding', 'review', '3.2s'],
    ['writer', 'review', '4s'],
  ]

  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]))

  return (
    <svg
      className="agent-graph pointer-events-none absolute inset-0 hidden opacity-55 md:block"
      viewBox="0 0 1200 500"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {edges.map(([from, to]) => {
        const a = byId[from]
        const b = byId[to]
        return <line key={`${from}-${to}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
      })}
      {edges.map(([from, to, delay]) => {
        const a = byId[from]
        const b = byId[to]
        return (
          <line
            key={`${from}-${to}-signal`}
            className="signal"
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            style={{ animationDelay: delay }}
          />
        )
      })}
      {nodes.map((n) => (
        <g key={n.id}>
          <circle className="node" cx={n.x} cy={n.y} r={n.id === 'manager' || n.id === 'review' ? 6 : 5} />
          <text
            x={n.x}
            y={n.y - 14}
            textAnchor="middle"
            className="agent-graph-label"
            style={{ font: '500 12px "IBM Plex Mono", monospace', letterSpacing: '0.04em' }}
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  )
}
