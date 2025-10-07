export interface Proposal {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  votesFor: number;
  votesAgainst: number;
  creator: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  assignee: string;
}
