import { useEffect, useState } from 'react';

const normalizeResponse = (payload) => {
  if (!payload) return [];
  if (Array.isArray(payload)) return payload;
  const candidates = [
    payload.activities,
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

export default function Activities({ apiBaseUrl }) {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${apiBaseUrl}/activities/`)
      .then((response) => response.json())
      .then((json) => setActivities(normalizeResponse(json)))
      .catch((err) => setError(err.message || 'Failed to load activities'))
      .finally(() => setLoading(false));
  }, [apiBaseUrl]);

  return (
    <section className="container py-4">
      <h2>Activities</h2>
      {loading && <p>Loading activities…</p>}
      {error && <div className="alert alert-danger">{error}</div>}
      {!loading && !error && (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Type</th>
                <th>Duration</th>
                <th>Date</th>
                <th>Calories</th>
                <th>User ID</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity) => (
                <tr key={activity._id ?? activity.id ?? `${activity.type}-${activity.date}`}>
                  <td>{activity.type}</td>
                  <td>{activity.durationMinutes ?? activity.duration}</td>
                  <td>{activity.date ? new Date(activity.date).toLocaleString() : ''}</td>
                  <td>{activity.caloriesBurned}</td>
                  <td>{activity.userId ?? activity.user}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
