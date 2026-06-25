import { useEffect, useState } from 'react';

const normalizeResponse = (payload) => {
  if (!payload) return [];
  if (Array.isArray(payload)) return payload;
  const candidates = [
    payload.teams,
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

export default function Teams({ apiBaseUrl }) {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${apiBaseUrl}/teams/`)
      .then((response) => response.json())
      .then((json) => setTeams(normalizeResponse(json)))
      .catch((err) => setError(err.message || 'Failed to load teams'))
      .finally(() => setLoading(false));
  }, [apiBaseUrl]);

  return (
    <section className="container py-4">
      <h2>Teams</h2>
      {loading && <p>Loading teams…</p>}
      {error && <div className="alert alert-danger">{error}</div>}
      {!loading && !error && (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Members</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team) => (
                <tr key={team._id ?? team.id ?? team.name}>
                  <td>{team.name}</td>
                  <td>{team.description}</td>
                  <td>{Array.isArray(team.members) ? team.members.length : team.members}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
