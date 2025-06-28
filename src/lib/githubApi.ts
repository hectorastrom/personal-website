// get most recent github commit (for date) at next build time
export interface GitHubCommitInfo {
  lastUpdated: string;
  commitHash: string;
  commitMessage: string;
}

export async function getLastCommitFromGitHub(
  owner: string, 
  repo: string, 
  token?: string
): Promise<GitHubCommitInfo> {
  try {
    const headers: HeadersInit = {
      'User-Agent': 'Personal-Website-LastUpdated'
    };

    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`,
      { headers }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    const commits = await response.json();
    
    if (!commits || commits.length === 0) {
      throw new Error('No commits found');
    }

    const latestCommit = commits[0];
    
    return {
      lastUpdated: latestCommit.commit.committer.date,
      commitHash: latestCommit.sha.substring(0, 7),
      commitMessage: latestCommit.commit.message.split('\n')[0] // First line only
    };
  } catch (error) {
    console.error('Failed to fetch from GitHub API:', error);
    
    // Fallback with current date
    return {
      lastUpdated: new Date().toISOString(),
      commitHash: 'unknown',
      commitMessage: 'Unable to fetch commit info'
    };
  }
}

export async function getLastCommit(): Promise<GitHubCommitInfo> {
  const owner = 'hectorastrom';
  const repo = 'personal-website';
  
  return await getLastCommitFromGitHub(owner, repo);
} 