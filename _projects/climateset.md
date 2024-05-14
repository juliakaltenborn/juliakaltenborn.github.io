---
title: ClimateSet
subtitle: A large-scale climate model dataset for machine learning
order: 7
image: climateset-logo.png
contributors:
  - name: Julia Kaltenborn
  - name: Charlotte Lange
  - name: Venkatesh Ramesh
  - name: Philippe Brouillard
  - name: Yaniv Gurwicz
  - name: Chandni Nagda
  - name: Jakob Runge
  - name: Peer Nowack
  - name: David Rolnick
publications:
  - name: Neurips Dataset Track 2023
    link: https://arxiv.org/abs/2311.03721
talks:
  - name: Neurips 2023
    link: https://neurips.cc/virtual/2023/poster/73703
  - name: kungfu.ai
    link: 
  - name: ICML 2024
    link: 
tags:
    - name: ArXiv
      link: https://arxiv.org/abs/2311.03721
    - name: Website
      link: https://climateset.github.io/
    - name: Twitter
      link: https://twitter.com/JuliaKaltenborn/status/1734268262425469373?s=20
    - name: Data
      link: https://huggingface.co/datasets/climateset/causalpaca
    - name: GitHub
      link: https://climateset.github.io/
status: in-progress
---

#### Current State
- **Emulator Code:** Up and Running (code for scientists)
- **Dataset:** Subset of the climate models available on hugging face 
- **Dataset Extension Pipeline:** Currently rebuild for scalability and usability (package release expected end of 2024)
- **Documentation & User friendliness:** In Progress



<img align="right" width="500" style="vertical-align:middle;margin:0px 40px" src="../../assets/images/projects/climate_set_overview.png">

#### Brief Introduction

Foundational models for climate and weather forecasting achieved major breakthroughs in the last years and are on the rise. Most of those models rely on past observational weather data (ERA5). If we want to be able to predict not only our medium-range weather we must find a way to include climate dynamics in our models or data. One way to address this issue is, to learn not only from past data distributions, but also train our ML models on different future climate scenarios. With ClimateSet we present a data-pipeline that enables ML practicioners to retrieve climate model data (CMIP6) across multiple resolutions, climate models, clime model ensemble members, and climatic variables. We showcased ClimateSet on a climate projection task. We hope that ClimateSet will make it either for ML practicioners to perform climate projection and train models - for different tasks - on a more generalized dataset.




