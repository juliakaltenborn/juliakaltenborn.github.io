---
layout: project-page
title: Causalpaca
subtitle: Emulating climate models with causal machine learning
order: 6
image: causalpaca.png
contributors:
  - name: Julia Kaltenborn
  - name: Charlotte Lange
  - name: Julien Boussard
  - name: Sebastian Hickman
  - name: Felix-Andreas Nahrstedt
  - name: Sebastien Lachapelle 
  - name: Philippe Brouillard
  - name: Francis Pelletier
  - name: Annie-Shan Morin
  - name: Matthew Fortier
  - name: Ilija Trajkovic
  - name: Chandni Nagda
  - name: Mats-Leon Richter
  - name: Yaniv Gurwicz
  - name: Jakob Runge
  - name: Peer Nowack
  - name: David Rolnick
publications:
  - name: ClimateSet
    link: https://arxiv.org/abs/2311.03721
  - name: Neurips 2023 (CCAI Workshop)
    link: https://arxiv.org/abs/2312.02858
status: in-progress
---

Climate models are key for humanity's understanding and preparation for climate change. Unfortunately, climate models need a lot of computational ressources and running time to simulate our future climate trajectories. Hence, policy makers are limited to a few scenarios (SSP) with coarse resolution. One way to provide policy makers with more scenarios, is by emulating climate models with machine learning. This way, many scenarios can be produced quickly during inference time. However, machine learning emulators are rarely deployed and used by climate scientists due to their lack of interpretability. To bring ML emulators for climate models into action, they need to follow physical laws, or be at least interpretable and transparent in their modeling of relations. Thus, this multi-year project aims to create emulators for climate models by working at the intersection of causal machine learning and emulators. Parts of the group build the mathematical foundation to perform causal discovery (with single-parent decoding) on climate model outputs; some move the climate model from theory to practice; some develop novel emulators that can scale well; some work at building the bridge between the causal model and the novel emulators; and even others retrieve and prepare the data needed for the whole project.


This is an on-going collaboration between Mila - Quebec AI Institute, and Intel.

<img align="left" width="600" style="vertical-align:middle;margin:0px 40px" src="../../assets/images/projects/causalpaca_big_picture.png">