export interface ChallengeAnnouncement {
  id: string;
  title: string;
  content: string;
  createdAt: string; // ISO date
}

export interface ChallengeSubmission {
  id: string;
  challengeId: string;
  userId: string;
  fileUrl?: string;
  repoUrl?: string;
  notes?: string;
  submittedAt: string; // ISO date
  status: "pending" | "approved" | "rejected";
}

export interface Challenge {
  id: string;
  title: string;
  slug: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
  tags?: string[];
  createdAt: string; // ISO date
  updatedAt?: string;

  announcements?: ChallengeAnnouncement[];
  submissions?: ChallengeSubmission[];
}
