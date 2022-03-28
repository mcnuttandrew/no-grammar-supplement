# No Grammar Supplementary Materials

This repo contains of the supplementary materials for our paper "No Grammar To Rule Them All: A Survey of JSON-Style Visualization DSLs".
Specifically it consists of

- a repository of example programs for each of the surveyed languages (code-examples/)
- an interactive website for exploring those samples and our associated analysis as well as several charts (src/)
- a notebook for constructing two of the charts (analysis-nbs/analysis.ipynb)
- a list of relationships between languages in the survey (analysis-nbs/relationships.tsv)
- a table showing our analysis for each of the languages (public/lang-meta.tsv)

The interactive website is made available at an anonymized URL found at https://vis-json-dsls.netlify.app/

While it is much easier to simply view these materials at the link provided above, if you wish to run them locally you can do so by running the following commands in the terminal

```
yarn
yarn dev
```

And then pointing a browser to http://localhost:5000/ This requires that node/yarn be already installed. See the [node website](https://nodejs.org/en/) and [yarn website](https://yarnpkg.com/) respectively for installation instructions.