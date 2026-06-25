import { connectDb } from '../db.js';
import { UserModel } from '../models/user.js';
import { TeamModel } from '../models/team.js';
import { ActivityModel } from '../models/activity.js';
import { LeaderboardModel } from '../models/leaderboard.js';
import { WorkoutModel } from '../models/workout.js';

/**
 * Seed the octofit_db database with test data.
 */
async function seed() {
  await connectDb();

  await Promise.all([
    UserModel.deleteMany({}),
    TeamModel.deleteMany({}),
    ActivityModel.deleteMany({}),
    LeaderboardModel.deleteMany({}),
    WorkoutModel.deleteMany({})
  ]);

  const teams = await TeamModel.insertMany([
    { name: 'Octo Pioneers', description: 'Elite training crew for high-performance athletes.', members: 14 },
    { name: 'Fit Waves', description: 'Community team focused on endurance and recovery.', members: 10 },
  ]);

  const users = await UserModel.insertMany([
    { name: 'Alex Octo', email: 'alex@octofit.io', role: 'coach', teamId: teams[0]._id.toString() },
    { name: 'Morgan Fit', email: 'morgan@octofit.io', role: 'member', teamId: teams[0]._id.toString() },
    { name: 'Riley Core', email: 'riley@octofit.io', role: 'member', teamId: teams[1]._id.toString() }
  ]);

  await ActivityModel.insertMany([
    { userId: users[0]._id.toString(), type: 'run', durationMinutes: 42, date: new Date('2026-06-20T07:00:00Z'), caloriesBurned: 520 },
    { userId: users[1]._id.toString(), type: 'strength', durationMinutes: 55, date: new Date('2026-06-21T18:30:00Z'), caloriesBurned: 610 },
    { userId: users[2]._id.toString(), type: 'yoga', durationMinutes: 35, date: new Date('2026-06-22T06:15:00Z'), caloriesBurned: 220 }
  ]);

  await LeaderboardModel.insertMany([
    { rank: 1, userId: users[1]._id.toString(), points: 1140, category: 'weekly' },
    { rank: 2, userId: users[0]._id.toString(), points: 980, category: 'weekly' },
    { rank: 1, userId: users[2]._id.toString(), points: 2600, category: 'monthly' }
  ]);

  await WorkoutModel.insertMany([
    { title: 'HIIT Sprint', durationMinutes: 20, intensity: 'high', focus: 'cardio' },
    { title: 'Strength Flow', durationMinutes: 40, intensity: 'medium', focus: 'full body' },
    { title: 'Recovery Stretch', durationMinutes: 30, intensity: 'low', focus: 'mobility' }
  ]);

  console.log('Seed the octofit_db database with test data');
  console.log('Inserted:', {
    users: users.length,
    teams: teams.length,
    activities: 3,
    leaderboard: 3,
    workouts: 3,
  });
  process.exit(0);
}

seed().catch((error) => {
  console.error('Seed failed:', error);
  process.exit(1);
});
