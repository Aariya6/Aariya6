# Local use and GitHub Pages

## Preview locally

From this directory, run:

```powershell
python -m http.server 4173
```

Open <http://localhost:4173>. Stop the server with `Ctrl+C`.

The site is static: no build step, package install, API key, or analytics setup is required.

## Publish the website with GitHub Pages

After the files are pushed to the public `Aariya6` repository:

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Choose branch **main** and folder **/(root)**, then select **Save**.
4. Wait for the Pages deployment check to finish. The project site URL should be `https://aariya6.github.io/Aariya6/`.
5. Add that URL to the profile README only after it responds successfully.

The website uses relative asset paths and is intended to work from the repository Pages subpath. No custom domain is assumed.

## Refresh the profile README

The root `README.md` is intended for the special public repository named `Aariya6`. Once that repository exists, it will render on the GitHub profile. Keep the README and website files together in the repository root.

## Before publishing

- Confirm that the project descriptions and identity wording are accurate.
- Add verified employment, education, or contact details only if desired.
- The LinkedIn URL came from the supplied profile link; automated access to LinkedIn was blocked during verification.
- Projects not verifiable in public repositories were intentionally omitted.
