# Editor.dev


## GitHub Client Secret

In order to use the GitHub api for the connector, a client secret is used.
For production builds this is injected in from the repository secrets.
For local testing of the connector core developers will be given a copy the client secret.
Use a GitHub app's client secret by creating a `secrets/github-client-secret.secret` file with the client secret as the file contents..
