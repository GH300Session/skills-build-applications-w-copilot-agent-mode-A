import { useEffect, useState } from 'react';

const normalizeResponse = (payload) => {
  if (!payload) return [];
  if (Array.isArray(payload)) return payload;
  const candidates = [
    payload.leaderboard,
    payload.data,
    payload.items,
    payload.results,
    payload?.data?.items,
    payload?.data?.results,
  ];
  for (const item of candidates) {
    if (Array.isArray(item)) return item;
  }
  return Object.values(payload).find(Array.isArray) ?? [];
};

export default function Leaderboard({ apiBaseUrl }) {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${apiBaseUrl}/leaderboard/`)
      .then((response) => response.json())
      .then((json) => setLeaderboard(normalizeResponse(json)))
      .catch((err) => setError(err.message || 'Failed to load leaderboard'))
      .finally(() => setLoading(false));
  }, [apiBaseUrl]);

  return (
    <section className="container py-4">
      <h2>Leaderboard</h2>
      {loading && <p>Loading leaderboard…</p>}
      {error && <div className="alert alert-danger">{error}</div>}
      {!loading && !error && (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Rank</th>
                <th>User ID</th>
                <th>Points</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((item) => (
                <tr key={item._id ?? `${item.userId}-${item.rank}`}>
                  <td>{item.rank}</td>
                  <td>{item.userId}</td>
                  <td>{item.points}</td>
                  <td>{item.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
