---
layout: project-page
title: Snowdragon
subtitle: Automatic classification of Snow Micro Pen profiles
order: 5
image: snowdragon_bearbeitet.jpg
contributors:
  - name: Julia Kaltenborn
  - name: Amy Macfarlane
  - name: Viviane Clay
  - name: Martin Schneebeli
publications:
  - name: Geoscientific Model Development
    link: https://doi.org/10.5194/gmd-16-4521-2023
  - name: Neurips 2021 (CCAI Workshop)
    link: https://s3.us-east-1.amazonaws.com/climate-change-ai/papers/neurips2021/48/paper.pdf
talks:
  - name: Neurips 2021 (CCAI Workshop)
    link: https://www.climatechange.ai/papers/neurips2021/48
  - name: EGU 2021 (ML for Cryosphere Session)
    link: https://meetingorganizer.copernicus.org/EGU21/EGU21-15637.html
tags:
    - name: GitHub
      link: https://github.com/liellnima/snowdragon
    - name: Data
      link: https://doi.org/10.1594/PANGAEA.935934
    - name: Models
      link: https://doi.org/10.5281/zenodo.7063520
    - name: MOSAiC
      link: https://mosaic-expedition.org/
status: finished
---

### Abstract

Snow-layer segmentation and classification are essential diagnostic tasks for various cryospheric applications. The SnowMicroPen (SMP) measures the snowpack's penetration force at submillimeter intervals in snow depth. The resulting depth–force profile can be parameterized for density and specific surface area. However, no information on traditional snow types is currently extracted automatically. The labeling of snow types is a time-intensive task that requires practice and becomes infeasible for large datasets. Previous work showed that automated segmentation and classification is, in theory, possible but cannot be applied to data straight from the field or needs additional time-costly information, such as from classified snow pits. We evaluate how well machine learning models can automatically segment and classify SMP profiles to address this gap. We trained 14 models, among them semi-supervised models and artificial neural networks (ANNs), on the MOSAiC SMP dataset, an extensive collection of snow profiles on Arctic sea ice. SMP profiles can be successfully segmented and classified into snow classes based solely on the SMP's signal. The model comparison provided in this study enables SMP users to choose a suitable model for their task and dataset. The findings presented will facilitate and accelerate snow type identification through SMP profiles. Anyone can access the tools and models needed to automate snow type identification via the software repository “snowdragon”. Overall, snowdragon creates a link between traditional snow classification and high-resolution force–depth profiles. Traditional snow profile observations can be compared to SMP profiles with such a tool.


### News
Collaboration with the National Tiroler Avalanche Safety department: **We are working on an Alpine Snowdragon!** I am supporting Jil Christin Lehnert and Marie Hofmann to train snowdragon on their alpine dataset.


<img align="right" width="800" style="vertical-align:middle;margin:0px 40px" src="../../assets/images/projects/snowdragon_overview.png">
