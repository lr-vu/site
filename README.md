# https://lr.cs.vu.nl/

This repo hosts the source code of the website. It's built with Jekyll.
This README is an onboarding document. If you find anything to be updated, including
this README, please make a branch and a pull request (PR). If your Github account is not
added [here](https://github.com/orgs/lr-vu/people), ask people around you to add you.

By building a website with Jekyll and hosting as a Github page, we don't have to worry
about traditional web development. Ideally, we only have to modify markdown files.

Although at the moment some people are more active in the web development, anyone can
make changes / contributions by creating a branch and making a PR to the main
branch. For example, adding / modifying your profile can be easily done by you.

## Prerequisites

1. [Install Ruby, Jekyll, and Bundler](https://jekyllrb.com/docs/)
1. In the root repo directory, install the necessary gems by running `bundle install`.

## Run the website locally

1. Run `bundle exec jekyll serve --baseurl /`
1. Type http://127.0.0.1:4000/ on your web browser.

## Adding or modifying a user profile at https://lr.cs.vu.nl/about/people

<details>
   <summary>The correct way</summary>

1. Clone this repo by running `git clone https://github.com/lr-vu/site.git`
1. Create a new branch (e.g., `git checkout -b add-bob`)
1. Add your profile image in [`./images/people/`](./images/people/).
1. Add your entry in [`./_data/people.yaml`](./_data/people.yaml). The names are ordered
   in an alphabetical order.
1. [Test locally if it works](#run-the-website-locally).
1. Push your code to Github (e.g., `git push --set-upstream origin add-bob`)
1. [Create a PR to the main branch](https://github.com/lr-vu/site/pulls). Add reviewers who can check your code (e.g., Taewoon Kim).
1. After the PR is merged, see if it works [here](https://lr.cs.vu.nl/about/people).

</details>

<details>
   <summary>The easy way</summary>

1. Add your profile image [here](https://github.com/lr-vu/site/tree/main/images/people),
   by clicking the button "Add file/Upload files"
1. Add your entry [here](https://github.com/lr-vu/site/blob/main/_data/people.yaml), by
   clicking pencil icon button. The names are ordered in an alphabetical order.
1. See if it works [here](https://lr.cs.vu.nl/about/people). You might have to wait a few minutes. Trying in incognito mode shows faster results.

</details>

## Adding or modifying a project at https://lr.cs.vu.nl/research

See [`./research/index.md`](about/projects.md).

## Adding or modifying news at https://lr.cs.vu.nl/

We write short news in one or two sentences, which appear at the bottom of our landing page. At the moment this is manually added by modifying [this file](index.md).

In the (near) future, we'll make a separate file for the news.


## Adding or modifying a publications at https://lr.cs.vu.nl/research/publications

First, [join our Zotero group](https://www.zotero.org/groups/4989916/lrvu-publications). Ask people around you to accept your join request. Our publications are all maintained in [the Zotero library](https://www.zotero.org/groups/4989916/lrvu-publications/library). If you have your DOI ready, click "Add by Identifier". Otherwise add your pulibcation manually by clicking the icon "New Item".

Once you've added your publication, [our Github Action](.github/workflows/cron_update_bibliography.yml) will update it to the website. This might take an hour. If you are impatient, [you can run the workflow manually](https://github.com/lr-vu/site/actions/workflows/cron_update_bibliography.yml).
