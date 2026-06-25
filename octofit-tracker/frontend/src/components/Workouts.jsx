import { useEffect, useState } from 'react';

const normalizeResponse = (payload) => {
  if (!payload) return [];
  if (Array.isArray(payload)) return payload;
  const candidates = [
    payload.workouts,
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

export default function Workouts({ apiBaseUrl }) {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${apiBaseUrl}/workouts/`)
      .then((response) => response.json())
      .then((json) => setWorkouts(normalizeResponse(json)))
      .catch((err) => setError(err.message || 'Failed to load workouts'))
      .finally(() => setLoading(false));
  }, [apiBaseUrl]);

  return (
    <section className="container py-4">
      <h2>Workouts</h2>
      {loading && <p>Loading workouts…</p>}
      {error && <div className="alert alert-danger">{error}</div>}
      {!loading && !error && (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Title</th>
                <th>Duration</th>
                <th>Intensity</th>
                <th>Focus</th>
              </tr>
            </thead>
            <tbody>
              {workouts.map((workout) => (
                <tr key={workout._id ?? workout.id ?? workout.title}>
                  <td>{workout.title}</td>
                  <td>{workout.durationMinutes ?? workout.duration}</td>
                  <td>{workout.intensity}</td>
                  <td>{workout.focus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
