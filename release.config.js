import {readFileSync} from 'fs';

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
                    commitPartial: readFileSync('./.changelog-templates/commit.hbs', 'utf8'),
                    transform: (commit, context) => {

                        const allowed_types = ['feat', 'fix', 'refactor'];

                        if (!allowed_types.includes(commit.type?.toLowerCase())) {
                          return;
                        }

                        const is_merge_commit =
                            commit.subject &&
                            (commit.subject.startsWith('Merge pull request') ||
                                commit.subject.startsWith('Merge branch'));

                        if (is_merge_commit) {
                            return;
                        }


                        return {
                            ...commit,
                            type: commit.type === 'refactor' ? 'Refactor' : commit.type,
                        };
                    }
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
