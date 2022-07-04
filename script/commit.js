const git = require('simple-git');

const getGitDiff = () => {
  return new Promise((resolve, reject) => {
    git().diffSummary((err, diffSummary) => {
      if (err) {
        reject(err);
      }

      resolve(diffSummary);
    });
  });
};

const commitGit = async () => {
  const diff = await getGitDiff();
  if (!diff) {
    throw new Error('Git diff undefined');
  }
  // Check for diff inside dist
  if (diff.changed !== 0) {
    // Add files to commit
    git()
      .add('./*')
      .addConfig('user.name', 'Ayanami Tech')
      .addConfig('user.email', 'ayanamitech@protonmail.com')
      .commit('Automated chain & token data update');
  }
}

commitGit();
