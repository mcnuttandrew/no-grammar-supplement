# No Grammar Supplementary Materials

This repo contains of the supplementary materials for the paper ["No Grammar To Rule Them All: A Survey of JSON-Style DSLs for Visualization"](https://arxiv.org/pdf/2207.07998.pdf) by Andrew McNutt.
Specifically it consists of

- a repository of example programs for each of the surveyed languages (code-examples/). (Nb: this contains a number of languages which were at some point included in our survey, such as tracery, which were eventually ruled to be excluded by our survey criterion.)
- an interactive website for exploring those samples and our associated analysis as well as several charts (src/)
- a notebook for constructing the "family tree" figure from the paper (analysis-nbs/analysis.ipynb)
- a list of relationships between languages in the survey (analysis-nbs/relationships.tsv)
- a table showing our analysis for each of the languages (public/lang-meta.tsv)

The interactive website is made available at https://vis-json-dsls.netlify.app/


## Local instructions

While it is much easier to simply view these materials at the link provided above, if you wish to run them locally you can do so by running the following commands in the terminal

```
yarn
yarn dev
```

And then pointing a browser to http://localhost:5000/ This requires that node/yarn be already installed. See the [node website](https://nodejs.org/en/) and [yarn website](https://yarnpkg.com/) respectively for installation instructions.

If you wish to run the analysis notebook, run the following terminal commands

```
mkdir venv
python3 -m venv venv
source venv/bin/activate
pip install -r py-requires.txt
```

(The slightly unusual name for the requirements file is to prevent netlify from installing python requirements).