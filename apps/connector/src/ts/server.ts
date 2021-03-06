import {GitHubApi} from '@blinkk/editor.dev/dist/api/githubApi';
import {GitHubStorage} from '@blinkk/editor.dev/dist/storage/githubStorage';
import {StorageManager} from '@blinkk/editor.dev/dist/storage/storage';
import cors from 'cors';
import express from 'express';

const PORT = process.env.PORT || 9090;
const MODE = process.env.MODE || 'dev';
const originHosts = ['https://editor.dev', 'https://beta.editor.dev'];

// Only allow access from localhost when running in a dev environment.
if (MODE === 'dev') {
  originHosts.push('http://localhost:8080');
}

// App
const app = express();

// Cors for communicating with editor.dev.
app.use(
  cors({
    origin: originHosts,
  })
);

// Site files are managed by the storage manager to separate out the
// different projects and branches.
const storageManager = new StorageManager({
  rootDir: './sites',
  storageCls: GitHubStorage,
});

const githubApi = new GitHubApi(storageManager);
app.use('/gh/:organization/:project/:branch', githubApi.apiRouter);
app.use('/gh', githubApi.apiGenericRouter);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
