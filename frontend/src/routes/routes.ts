import CertificatesPage from "../pages/Certificates";
import FeedbackPage from "../pages/FeedbackPage";
import HomePage from "../pages/HomePage"
import LeaderboardPage from "../pages/LeaderboardPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import SettingsPage from "../pages/Settings";

export interface Route {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export const routes: Route[] = [
  { path: "/", component: HomePage },
  { path: "/login", component: LoginPage },
  { path: "/leaderboard", component: LeaderboardPage },
  { path: "/profile", component: ProfilePage },
  { path: "/feedback", component: FeedbackPage },
  { path: "/certificates", component: CertificatesPage },
  { path: "/settings", component: SettingsPage },
]