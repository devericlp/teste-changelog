export default {
    branches: ['main'],
    plugins: [
        [
            '@semantic-release/commit-analyzer',
            {
                preset: 'angular',
                releaseRules: [
                    {type: 'refactor', release: 'patch'},
                    {type: 'chore', release: false},
                ],
                parserOpts: {
                    noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
                },
            }
        ],
        [
            '@semantic-release/release-notes-generator',
            {
                preset: 'angular',
                writerOpts: {
                    transform: (commit, context) => {
                        // mantém o body
                        return {
                            ...commit,
                            body: commit.body,
                        };
                    },
                },
            }
        ],
        [
            '@semantic-release/changelog',
            {
                changelogFile: 'CHANGELOG.md',
            }
        ],
        [
            '@semantic-release/git',
            {
                assets: ['CHANGELOG.md'],
                message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
            }
        ],
        '@semantic-release/github'
    ],
};
